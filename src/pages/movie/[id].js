import Head from "next/head";
import React from "react";
import Image from "next/image";

const MoviePage = ({ movieData }) => {
	return (
		<>
			<Head>
				<title>{movieData?.title || "Movie Details"}</title>
				<meta name="description" content="Created by Vishal Thakur" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{movieData ? (
				<div className="w-full">
					<div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
						{movieData && (
							<Image
								src={`https://image.tmdb.org/t/p/original/${
									movieData?.backdrop_path || movieData?.poster_path
								}`}
								width={500}
								height={300}
								alt="Movie poster!"
								style={{
									maxWidth: "100%",
									height: "100%",
								}}
								placeholder="blur"
								blurDataURL="/spinner.svg"
								className="rounded-lg"
							/>
						)}
						<div className="p-2">
							<h2 className="text-lg mb-3 font-bold text-amber-600">
								{movieData?.title || movieData?.name}{" "}
							</h2>
							<p className="text-lg mb-3">
								<span className="font-semibold mr-1">Overview:</span>{" "}
								{movieData?.overview}{" "}
							</p>
							<p className="mb-3">
								<span className="font-semibold mr-1">Released Date:</span>
								{movieData?.release_date || movieData?.first_air_date}
							</p>
							<p className="mb-3">
								<span className="font-semibold mr-1">Rating:</span>
								{movieData?.vote_count}
							</p>
						</div>
					</div>
				</div>
			) : (
				<div className="flex justify-center items-center h-screen">
					<h1 className="text-2xl font-semibold">No data found!</h1>
				</div>
			)}
		</>
	);
};

export async function getStaticPaths() {
	return { paths: [], fallback: "blocking" };
}

export async function getStaticProps(ctx) {
	const Id = ctx.params.id;
	try {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/${Id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
		);

		if (!res.ok) {
			return {
				notFound: true,
			};
		}

		const data = await res.json();
		return { props: { movieData: data } };
	} catch (error) {
		console.log(error);
		return { props: { movieData: {} } };
	}
}

export default MoviePage;
