import React from "react";

// Components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

// Images
import hero1 from "../assets/hero1.png";
import tiled from "../assets/tiled-bg.png";
import progress from "../assets/progress-bar.svg";
import books from "../assets/books-feature.jpg";
import girl from "../assets/girl-feature.jpg";
import map from "../assets/map-feature.jpg";
import laughing from "../assets/laughing-feature.png";

// Styles
import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<section
					style={{
						backgroundImage: `url(${hero1.src})`,
					}}
					className={styles.hero_one}
				>
					<div className={styles.welcome_message}>
						<h1 className={styles.heading}>
							Learn <span style={{ textDecoration: "underline" }}>Spanish</span>{" "}
							in the most<span style={{ display: "block" }}> </span> natural and
							effective way
						</h1>
						<p className={styles.subheading}>
							Be immersed in authentic content at your level
							<span style={{ display: "block" }}> </span>and progress smoothly
							towards fluency.
						</p>
						<Link href="/browse">
							<button className={styles.start}>START LEARNING</button>
						</Link>
					</div>
				</section>
				<section
					style={{
						backgroundImage: `url(${tiled.src})`,
					}}
					className={styles.how_it_works}
				>
					<p className={styles.develop}>
						Develop your
						<span className={styles.orange_text}> Spanish</span> by immersing
						yourself in <span style={{ display: "block" }}></span> compelling
						content at
						<span className={styles.orange_text}>
							{" "}
							gradually increasing difficulty
						</span>
					</p>
					<Image src={progress} alt="" className={styles.develop_img} />
				</section>
				<section className={styles.features_container}>
					<div className={styles.feature_wrapper}>
						<Image src={books} alt="" className={styles.feature_img} />
						<div className={styles.feature_box}>
							<h2>Research-Proven Approach.</h2>
							<p>
								Our method is based on research that has shown that language
								acquisition only happens when the student receives
								comprehensible input — authentic uses of the language that they
								can understand.
							</p>
							<Link href="/method" className={styles.feature_link}>
								SHOW ME THE SCIENCE!
							</Link>
						</div>
					</div>
					<div className={styles.feature_wrapper}>
						<div className={`${styles.feature_box} ${styles.left}`}>
							<h2>Comprehensible and Authentic Language.</h2>
							<p>
								We are known for having the most comprehensible Spanish content
								on the internet. We have created content that can be understood
								by absolutely anyone without using contrived, inauthentic
								language.
							</p>
							<Link href="/" className={styles.feature_link}>
								{/* Fix link */}
								SEE HOW WE DO IT IN OUR SUPERBEGINNER VIDEOS
							</Link>
						</div>
						<Image src={girl} alt="" className={styles.feature_img} />
					</div>
					<div className={`${styles.feature_wrapper} ${styles.feature_3}`}>
						<Image
							src={map}
							alt=""
							className={`${styles.feature_img} ${styles._70}`}
						/>
						<div className={`${styles.feature_box} ${styles.box_3}`}>
							<h2>Spanish From All Over the World.</h2>
							<p>
								We have speakers from all across the Spanish-speaking world so
								no matter which dialect you want to learn, we&apos;ve got you
								covered!
							</p>
							<Link href="/" className={styles.feature_link}>
								{/* Fix link */}
								DISCOVER OUR LATIN AMERICAN CONTENT BY USING FILTERS ON OUR
								VIDEO PLATFORM
							</Link>
						</div>
					</div>
					<div className={`${styles.feature_wrapper} ${styles.feature_3}`}>
						<div className={`${styles.feature_box} ${styles.right_margin}`}>
							<h2>Fun, Everyday Topics.</h2>
							<p>
								We love talking about all sorts of topics, from everyday
								subjects like food, travel, movies, and video games, to more
								serious ones like history, politics, culture, and philosophy.
							</p>
							<Link href="/" className={styles.feature_link}>
								{/* Fix link */}
								CHECK OUT OUR CONTENT LIBRARY NOW
							</Link>
						</div>
						<Image src={laughing} alt="" className={`${styles.feature_img} ${styles._60}`} />
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
