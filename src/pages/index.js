import Head from "next/head";
import Results from "@/Components/Results";
import Pagination from "@/Components/Pagination";
import { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/router";
import debounce from "lodash/debounce";

export default function Home({ results, totalPages }) {
	const router = useRouter();
	const scrollToTop = useRef(null);
	const searchParams = new URLSearchParams(router.query);

	const genre = searchParams.get("genre");

	const [page, setPage] = useState(1);
	const [fetchedResults, setFetchedResults] = useState(results);

	const debouncedScroll = useMemo(
		() =>
			debounce(() => {
				if (scrollToTop.current) {
					window.scrollTo({
						top: scrollToTop.current.offsetTop,
						left: 0,
						behavior: "smooth",
					});
				}
			}, 300),
		[]
	);

	useEffect(() => {
		debouncedScroll();
		router.push({
			pathname: "/",
			query: {
				genre: router.query.genre ? router.query.genre : "fetchTrending",
				page: page,
			},
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page]);

	useEffect(() => {
		async function fetchData() {
			const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
			try {
				const res = await fetch(
					`https://api.themoviedb.org/3/${genreMap[genre]}?api_key=${API_KEY}&language=en-US&page=${page}`
				);

				if (!res.ok) {
					throw new Error("Network response was not ok");
				}

				const data = await res.json();
				setFetchedResults(data.results);
			} catch (error) {
				console.error(error);
			}
		}

		fetchData();
	}, [genre, page]);

	useEffect(() => {
		setPage(1);
	}, [genre]);

	return (
		<>
			<Head>
				<title>IMDB Clone</title>
				<meta name="description" content="Created by Vishal Thakur" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main ref={scrollToTop}>
				<Results results={fetchedResults} />
				<Pagination
					totalPages={totalPages}
					currentPage={page}
					paginate={(value) => setPage(value)}
				/>
			</main>
		</>
	);
}

const genreMap = {
	fetchTopRatedMovies: "movie/top_rated",
	fetchTrendingMovies: "trending/all/day",
	fetchTrending: "trending/all/week",
};

export async function getServerSideProps(context) {
	const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
	const { genre = "fetchTrending", page = 1 } = context.query;

	try {
		const res = await fetch(
			`https://api.themoviedb.org/3/${genreMap[genre]}?api_key=${API_KEY}&language=en-US&page=${page}`,
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
