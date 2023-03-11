import Image from "next/image";
import React from "react";

const Loading = () => {
	return (
		<div className="flex justify-center">
			<Image
				className="h-96"
				src="/loader.svg"
				alt="Loading..."
				width={100}
				height={100}
			/>
		</div>
	);
};

export default Loading;
