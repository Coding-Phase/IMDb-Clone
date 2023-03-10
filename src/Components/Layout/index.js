import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Providers from "@/pages/Providers";

const Layout = ({ children }) => {
	return (
		<div>
			<Providers>
				<Navbar />
				{children}
				<Footer />
			</Providers>
		</div>
	);
};

export default Layout;
