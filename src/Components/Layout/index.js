import React from "react";
import Header from "../Header";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Providers from "@/pages/Providers";

const Layout = ({ children }) => {
	return (
		<div>
			<Providers>
				<Header />
				<Navbar />
				{children}
				<Footer />
			</Providers>
		</div>
	);
};

export default Layout;
