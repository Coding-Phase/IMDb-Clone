"use client";

import Link from "next/link";
import { useEffect } from "react";

const Error = ({ error }) => {
	useEffect(() => {
		console.log(error);
	}, [error]);

	return (
		<div className="text-center mt-10 flex flex-col gap-4">
			<h1 className="truncate text-lg font-bold text-amber-600">Not Found!</h1>
			<Link href="/" className="hover:text-amber-600 ">
				Go to home
			</Link>
		</div>
	);
};

export default Error;
