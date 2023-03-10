import React from "react";

const results = ({ results }) => {
	return (
		<div>
			{results.map((result) => (
				<div key={result.id}>
					<h1 className="text-2xl text-amber-600">
						{result.original_title
							? result.original_title
							: result.original_name}
					</h1>
					<p> {result.overview} </p>
					<br />
				</div>
			))}
		</div>
	);
};

export default results;
