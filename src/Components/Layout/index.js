import React from "react";
import Header from "../Header";
import Navbar from "../Navbar";
import Providers from "@/pages/Providers";
import Search from "../SearchBar";

const Layout = ({ children }) => {
	return (
		<div>
			<Providers>
				<Header />
				<Navbar />
				<Search />
				{children}
			</Providers>
		</div>
	);
};

export default Layout;
