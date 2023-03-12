"use client";

import Link from "next/link";
import { useEffect } from "react";

const Error = ({ error }) => {
	useEffect(() => {
		console.log(error);
	}, [error]);

	return (
		<div className="text-center mt-10">
			<h1>Not Found!</h1>
			<Link href="/" className="hover:text-amber-600">
				Go to home
			</Link>
		</div>
	);
};

export default Error;
