import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import logo from "../assets/logo-small.svg";

interface FooterProps {
	gray?: boolean;
}

const Footer: FC<FooterProps> = ({ gray }) => {
	const grayStyle = gray ? styles.gray : "";

	return (
		<footer className={`${styles.footer} ${grayStyle}`}>
			<div className={styles.footer_grid}>
				<div>
					<Image
						src={logo}
						alt=""
						width={62}
						height={65}
						className={styles.logo}
					/>
				</div>
				<div className={styles.footer_column}>
					<p className={styles.footer_title}>Content</p>
					<Link href="/about" className={styles.footer_link}>
						Superbeginner
					</Link>
					<Link href="/about" className={styles.footer_link}>
						Beginner
					</Link>
					<Link href="/about" className={styles.footer_link}>
						Intermediate
					</Link>
					<Link href="/about" className={styles.footer_link}>
						Advanced
					</Link>
				</div>
				<div className={styles.footer_column}>
					<p className={styles.footer_title}>Resources</p>
					<Link href="/about" className={styles.footer_link}>
						About
					</Link>
					<Link href="/method" className={styles.footer_link}>
						Method
					</Link>
					<Link href="/teachers" className={styles.footer_link}>
						Teachers
					</Link>
					<Link href="/faq" className={styles.footer_link}>
						FAQ
					</Link>
				</div>
				<div className={styles.footer_column}>
					<p className={styles.footer_title}>Company</p>
					<Link href="/about" className={styles.footer_link}>
						Contact
					</Link>
					<Link href="/about" className={styles.footer_link}>
						Terms
					</Link>
					<Link href="/about" className={styles.footer_link}>
						Privacy
					</Link>
					<p className={styles.footer_copyright}>© Dreaming Languages, Inc.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
