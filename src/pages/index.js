import Head from "next/head";
import Results from "@/Components/Results";
import Pagination from "@/Components/Pagination";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Home({ results, totalPages }) {
	const router = useRouter();
	const [page, setPage] = useState(1);

	const [fetchedResults, setFetchedResults] = useState(results);

	useEffect(() => {
		window.scrollTo(0, 0);
		router.push({
			pathname: "/",
			query: { genre: router.query.genre, page: page },
		});

		// async function fetchData() {
		// 	const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
		// 	const genre = "fetchTrending";
		// 	try {
		// 		const res = await fetch(
		// 			`https://api.themoviedb.org/3/${
		// 				genre === "fetchTopRatedMovies"
		// 					? "movie/top_rated"
		// 					: genre === "fetchTrendingMovies"
		// 					? "trending/all/day"
		// 					: "trending/all/week"
		// 			}?api_key=${API_KEY}&language=en-US&page=${page}`,
		// 			{
		// 				method: "GET", // Specify the HTTP method
		// 				headers: {
		// 					Accept: "application/json",
		// 					// Add any other headers here if needed
		// 				},
		// 			}
		// 		);

		// 		if (!res.ok) {
		// 			throw new Error("Network response was not ok");
		// 		}

		// 		const data = await res.json();
		// 		setFetchedResults(data.results);
		// 	} catch (error) {
		// 		console.log(error);
		// 	}
		// }

		// fetchData();
	}, [page, router.query.genre]);

	useEffect(() => {
		setPage(1);
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
				<Results results={fetchedResults} />
				<Pagination
					totalPages={totalPages}
					pages={page}
					paginate={(value) => setPage(value)}
				/>
			</main>
		</>
	);
}

export async function getServerSideProps(context) {
	const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
	const query = context?.query;

	const { genre = "fetchTrending", page = 1 } = query;

	try {
		const res = await fetch(
			`https://api.themoviedb.org/3/${
				genre === "fetchTopRatedMovies"
					? "movie/top_rated"
					: genre === "fetchTrendingMovies"
					? "trending/all/day"
					: "trending/all/week"
			}?api_key=${API_KEY}&language=en-US&page=${page}`,
			{
				next: {
					revalidate: 3600,
				},
			}
		);

		if (!res.ok) {
			notFound = true;
		}

		const data = await res.json();
		return {
			props: {
				results: data.results,
				totalPages: data.total_pages,
			},
		};
	} catch (error) {
		console.log(error);
	}
}
