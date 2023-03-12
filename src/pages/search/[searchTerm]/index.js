import React from "react";
import Results from "@/Components/Results";

const SearchPage = ({ results }) => {
	return (
		<>
			{results && results.length === 0 && (
				<h1 className="text-center pt-6 pb-6 bg-gray-800"> No results found</h1>
			)}

			{results && <Results results={results} />}
		</>
	);
};

export default SearchPage;

export async function getServerSideProps({ params }) {
	const searchTerm = params.searchTerm;
	try {
		const res = await fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${searchTerm}&language=en-US`
		);

		if (!res.ok) {
			return {
				notFound: true,
			};
		}

		const data = await res.json();
		const results = data.results;

		return { props: { results } };
	} catch (error) {
		console.log(error);
	}
}
