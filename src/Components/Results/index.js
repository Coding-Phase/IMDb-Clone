import Head from "next/head";
import React from "react";
import Card from "./Card";

const results = ({ results }) => {
	// console.log(results);
	return (
		<>
			<Head>
				<title>IMDB Results</title>
				<meta name="description" content="Created by Vishal Thakur" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
				{results.map((result) => (
					<Card key={result.id} result={result} />
				))}
			</div>
		</>
	);
};

export default results;
