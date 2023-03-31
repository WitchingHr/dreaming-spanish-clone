import React, { useState, useEffect, FC } from "react";
import styles from "./Header.module.css";

import Image from "next/image";
import Link from "next/link";
import logo from "../src/assets/logo-orange-horizontal.svg";

const Header: FC = () => {
	const [scrolled, setScrolled] = useState<boolean>(false);

	function handleScroll() {
		if (window.scrollY > 0) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const scrollStyle = scrolled ? styles.scrolled : "";

	return (
		<header className={`${styles.header} ${scrollStyle}`}>
			<Link href="/" className={styles.logo_container}>
				<Image src={logo} alt="" className={styles.logo} />
			</Link>
			<div className={styles.header_links}>
				<Link href="/about" className={styles.header_link}>
					About
				</Link>
				<Link href="/method" className={styles.header_link}>
					Method
				</Link>
				<Link href="/teachers" className={styles.header_link}>
					Teachers
				</Link>
				<Link href="/faq" className={styles.header_link}>
					FAQ
				</Link>
				<Link href="/blog" className={styles.header_link}>
					Blog
				</Link>{" "}
				{/* <---- Might not need this */}
				<Link href="/browse" className={styles.header_button}>
					<button className={styles.start_button}>START LEARNING</button>
				</Link>
			</div>
		</header>
	);
};

export default Header;
