import { useEffect, useState } from "react";
import Head from "next/head";
import Results from "@/Components/Results";
import { useRouter } from "next/router";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY; // 11f30ff94e90c3a8cf0c5d6a95483999

export default function Home() {
	const [results, setResults] = useState([]);
	const router = useRouter();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const genre = router.query.genre || "fetchTrending";

				const res = await fetch(
					`https://api.themoviedb.org/3/${
						genre === "fetchTopRatedMovies"
							? "movie/top_rated"
							: genre === "fetchTrendingMovies"
							? "trending/all/day"
							: "trending/all/week"
					}?api_key=${API_KEY}&language=en-US&page=1`,
					{ next: { revalidate: 3600 } }
				);

				if (!res.ok) {
					throw new Error("Failed to fetch data");
				}

				const data = await res.json();
				setResults(data.results);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, [router.query.genre]);

	return (
		<>
			<Head>
				<title>IMDB Clone</title>
				<meta name="description" content="Created by Vishal Thakur" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Results results={results} />
			</main>
		</>
	);
}
