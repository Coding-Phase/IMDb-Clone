import React from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
	return (
		<div className="flex justify-center dark:bg-gray-900 bg-amber-100 lg:text-lg p-4">
			<NavbarItem title="Trending" param="fetchTrendingMovies" />
			<NavbarItem title="Top Rated" param="fetchTopRatedMovies" />
		</div>
	);
};

export default Navbar;
