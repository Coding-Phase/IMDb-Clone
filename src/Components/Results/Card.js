import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillLike } from "react-icons/ai";

const Card = ({ result }) => {
	return (
		<div
			className="cursor-pointer sm:p-3
        sm:hover:shadow-slate-400 sm:shadow-md 
        rounded-lg sm:border sm:border-slate-400 
        sm:m-2 transition-shadow duration-200
        group">
			<Link href={`/movie/${result.id}`}>
				<Image
					src={`https://image.tmdb.org/t/p/original/${
						result.backdrop_path || result.poster_path
					}`}
					width={500}
					height={300}
					alt="Image not found!"
					style={{
						maxWidth: "100%",
						height: "auto",
					}}
					placeholder="blur"
					blurDataURL="/spinner.svg"
					className="sm:rounded-t-lg group-hover:opacity-80
                    transition-opacity 
                    duration-200"
				/>
				<div className="p-2">
					<p className="line-clamp-2 text-md">{result.overview}</p>
					<h3 className="truncate text-lg font-bold text-amber-600">
						{result.title || result.name}
					</h3>
					<p className="flex items-center text-xs">
						{result.first_air_date || result.release_date}
						<AiFillLike className="h-5 mr-1 ml-3" /> {result.vote_count}
					</p>
				</div>
			</Link>
		</div>
	);
};

export default Card;
