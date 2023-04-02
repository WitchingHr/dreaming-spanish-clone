import React from "react";

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import Head from "next/head";

// Images
import hero1 from "../assets/hero1.png";
import tiled from "../assets/tiled-bg.png";
import progress from "../assets/progress-bar.svg";
import books from "../assets/books-feature.jpg";
import girl from "../assets/girl-feature.jpg";
import map from "../assets/map-feature.jpg";
import laughing from "../assets/laughing-feature.png";
import testimonials from "../assets/testimonials.png";

// Styles
import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<Head>
				<title>Dreaming Spanish: Learn with Comprehensible Input</title>
			</Head>
			<Header home scroll />
			<main>
				<section
					style={{
						backgroundImage: `url(${hero1.src})`,
					}}
					className={styles.hero_one}
				>
					<div className={`${styles.hero_one_wrapper} ${styles.container}`}>
						<div className={styles.welcome_message}>
							<h1 className={styles.heading}>
								Learn <span style={{ borderBottom: "2px solid" }}>Spanish</span>{" "}
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
					</div>
				</section>
				<section
					style={{
						backgroundImage: `url(${tiled.src})`,
					}}
					className={styles.how_it_works}
				>
					<div className={`${styles.container} ${styles.how_it_works_container}`}>
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
					</div>
				</section>
				<section className={styles.features_container}>
					<div className={styles.container}>
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
							<Image
								src={laughing}
								alt=""
								className={`${styles.feature_img} ${styles._60}`}
							/>
						</div>
					</div>
				</section>
				<section
					style={{
						backgroundImage: `url(${testimonials.src})`,
					}}
					className={styles.testimonials_container}
				>
					<div className={`${styles.container} ${styles.reviews}`}>
						<h1 className={styles.testimonials_heading}>
							What our{" "}
							<span style={{ borderBottom: "2px solid" }}>students</span> have
							to say...
						</h1>
						<div className={styles.testimonials_wrapper}>
							<div className={`${styles.testimonial} ${styles.testimonial1}`}>
								<p className={styles.testimonial_text}>
									I truly believe if everyone knew about this method, there
									wouldn&apos;t be any monolingual people in the world.
								</p>
								<p className={styles.testimonial_writer}>Peter Henderson</p>
							</div>
							<div className={`${styles.testimonial} ${styles.testimonial2}`}>
								<p className={styles.testimonial_text}>
									I love hearing all the different Spanish and South American
									accents. I watch about half an hour a day and the time goes
									very quickly which means that all your content is interesting
									and entertaining.
								</p>
								<p className={styles.testimonial_writer}>Shaun Harper</p>
							</div>
							<div className={`${styles.testimonial} ${styles.testimonial3}`}>
								<p className={styles.testimonial_text}>
									I recently took a trip to Spain and was able to speak with
									confidence (having mostly just listened to things in Spanish /
									read books and articles in Spanish).
								</p>
								<p className={styles.testimonial_writer}>Sandeep</p>
							</div>
							<div className={`${styles.testimonial} ${styles.testimonial4}`}>
								<p className={styles.testimonial_text}>
									When nowhere else provided Spanish that I could understand
									(and boy did I search high and low), Dreaming Spanish provided
									real content in 100% Spanish that I could learn from.
								</p>
								<p className={styles.testimonial_writer}>Adrian Ellis</p>
							</div>
						</div>
					</div>
				</section>
				<section
					style={{
						backgroundImage: `url(${tiled.src})`,
					}}
					className={styles.get_started}
				>
					<div className={`${styles.container} ${styles.get_started_container}`}>
						<h1 className={styles.get_started_heading}>Ready to get started?</h1>
							<Link href="/browse">
								<button className={styles.start}>START LEARNING</button>
							</Link>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
