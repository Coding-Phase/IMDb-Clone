import Head from "next/head";

const About = () => {
	return (
		<>
			<Head>
				<title>IMDB Clone</title>
				<meta name="description" content="Created by Vishal Thakur" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="max-w-6xl mx-auto space-y-4">
				<h1 className="text-2xl font-medium text-amber-600">About Page</h1>
				<p>
					Welcome to our movie database website! We are a team of passionate
					movie enthusiasts who love to watch movies and share our thoughts
					about them. We have created this website to share our thoughts about
					movies and to help others find the best movies to watch. Our website
					is designed to provide you with a comprehensive database of movies
					from all around the world, along with their ratings, reviews, and
					other information.
				</p>
				<p>
					We have also included a list of the best movies of all time, so that
					you can find the best movies to watch. Our movie database is
					constantly updated with new releases, ensuring that you have access to
					the latest movies. You can search for movies by title, genre, year,
					and more. We also have a list of the best movies of all time, so that
					you can find the best movies to watch.
				</p>
				<p>
					We are always looking for new ways to improve our website and enhance
					the user experience on our website.
				</p>
				<p>
					We hope you enjoy our website and find it useful. If you have any
					questions or suggestions, please feel free to contact us. Happy
					browsing!
				</p>
			</div>
		</>
	);
};

export default About;
