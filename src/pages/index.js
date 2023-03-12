import Head from "next/head";
import Results from "@/Components/Results";

export default function Home({ results }) {
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

export async function getServerSideProps(ctx) {
	const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

	const genre = ctx?.query?.genre || "fetchTrending";

	try {
		const res = await fetch(
			`https://api.themoviedb.org/3/${
				genre === "fetchTopRatedMovies"
					? "movie/top_rated"
					: genre === "fetchTrendingMovies"
					? "trending/all/day"
					: "trending/all/week"
			}?api_key=${API_KEY}&language=en-US&page=1`,
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
			},
		};
	} catch (error) {
		console.log(error);
	}
}
