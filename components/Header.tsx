import React, { useState, useEffect, FC } from "react";
import styles from "./Header.module.css";

import Image from "next/image";
import Link from "next/link";
import logo from "../src/assets/logo-orange-horizontal.svg";

interface HeaderProps {
	scroll?: boolean;
	sticky?: boolean;
	gray?: boolean;
	home?: boolean;
}

const Header: FC<HeaderProps> = ({ scroll, sticky, gray, home }) => {
	const [scrolled, setScrolled] = useState<boolean>(false);

	function handleScroll() {
		if (window.scrollY > 0) {
			if (!scrolled) {
				setScrolled(true);
			}
		} else {
			setScrolled(false);
		}
	}

	useEffect(() => {
		if (window.scrollY > 0) {
			setScrolled(true);
		}
	}, []);

	useEffect(() => {
		if (scroll) {
			window.addEventListener("scroll", handleScroll);
		}
		return () => {
			if (scroll) {
				window.removeEventListener("scroll", handleScroll);
			}
		};
	}, []);

	const scrollStyle = scrolled || scroll === undefined ? styles.scrolled : "";
	const pos = sticky ? styles.sticky : styles.fixed;
	const grayStyle = gray ? styles.gray : "";
	const homeStyle = home && scrolled ? styles.home : "";

	return (
		<nav className={`${styles.header} ${scrollStyle} ${pos} ${grayStyle} ${homeStyle}`}>
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
				<Link href="/browse" className={styles.header_button}>
					<button className={styles.start_button}>START LEARNING</button>
				</Link>
			</div>
		</nav>
	);
};

export default Header;
