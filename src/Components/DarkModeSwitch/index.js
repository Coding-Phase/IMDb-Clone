import React, { useEffect, useState } from "react";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { useTheme } from "next-themes";

const DarkModeSwitch = () => {
	const { systemTheme, theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	const currentTheme = theme === "system" ? systemTheme : theme;

	return (
		<>
			{mounted &&
				(currentTheme === "dark" ? (
					<BsFillSunFill
						className="text-xl cursor-pointer hover:text-amber-500"
						onClick={() => setTheme("light")}
					/>
				) : (
					<BsFillMoonStarsFill
						className="text-xl cursor-pointer hover:text-amber-500"
						onClick={() => setTheme("dark")}
					/>
				))}
		</>
	);
};

export default DarkModeSwitch;
