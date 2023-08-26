import Head from "next/head";
import React from "react";
import Card from "./Card";

const results = ({ results }) => {
	return (
		<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4 max-sm:gap-5">
			{results.map((result) => (
				<Card key={result.id} result={result} />
			))}
		</div>
	);
};

export default results;
