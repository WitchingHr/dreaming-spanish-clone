import React, { FC } from "react";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import styles from "./TeachersCard.module.css";

import arrow from "../src/assets/arrow.svg";

interface TeachersCardProps {
	teacher: string;
	image: StaticImageData;
	country: StaticImageData;
	bio: string;
}

const TeachersCard: FC<TeachersCardProps> = ({
	teacher,
	image,
	country,
	bio,
}) => {
	return (
		<div className={styles.member_card}>
			<Link href="/teachers" className={styles.link}>
				<Image src={image} alt="" className={styles.member} />
			</Link>
			<div className={styles.bio_wrap}>
				<div className={styles.flex}>
					<Image src={country} alt="" className={styles.flag} />
					<div className={styles.member_bio}>
						<p className={styles.no_mt}>
							<strong style={{ textDecoration: "underline" }}>{teacher}</strong>{" "}
							{bio}
						</p>
					</div>
				</div>
				<div className={`${styles.mt2} ${styles.txt_right}`}>
					<Link href="/teachers" className={styles.link_block}>
						<div className={styles.btn_inner}>
							<div>SEE {teacher}&apos;s videos</div>
							<Image src={arrow} alt="" width={10} style={{marginLeft: "10px"}} />
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default TeachersCard;
