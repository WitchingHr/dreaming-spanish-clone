import React, { FC } from "react";
import styles from "../styles/About.module.css";

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";
import TeachersCard from "../components/TeachersCard";

import hero from "../assets/teachers-hero.jpg";
import Pablo from "../assets/teachers-pablo.jpg";
import Alma from "../assets/teachers-alma.jpg";
import Andrea from "../assets/teachers-andrea.jpg";
import Michelle from "../assets/teachers-michelle.jpg";
import Sofia from "../assets/teachers-sofia.jpg";
import Clau from "../assets/teachers-clau.jpg";
import Ricardo from "../assets/teachers-ricardo.jpg";
import Montserrat from "../assets/teachers-montserrat.jpg";
import Agustina from "../assets/teachers-agustina.jpg";
import Marce from "../assets/teachers-marce.jpg";
import Jostin from "../assets/teachers-jostin.jpg";
import Spain from "../assets/spain.png";
import Mexico from "../assets/mexico.png";
import Argentina from "../assets/argentina.png";
import Colombia from "../assets/colombia.png";
import Venezuela from "../assets/venezuela.png";

const Teachers: FC = () => {
	return (
		<>
			<Head>
				<title>Our Teachers</title>
			</Head>
			<Header sticky gray />
			<main>
				<div className={styles.hero_section}>
					<Image src={hero} alt="" className={styles.hero} quality={100} />
					<div className={styles.abs}>
						<h1 className={styles.hero_heading}>Our Content Creators</h1>
					</div>
				</div>
				<section>
					<div className={`${styles.container} ${styles.section_2}`}>
						<div>
							<p className={styles.f24}>
								At <span className={styles.black_text}>Dreaming Spanish</span>,{" "}
								our teachers don&apos;t teach in the traditional way, giving
								grammar lessons and handing out vocabulary lists and whatnot.
								Instead, they tell you about{" "}
								<span className={styles.black_text}>
									their lives, their experiences, their opinions
								</span>
								, and <span className={styles.black_text}>their culture</span> –
								at every difficulty level so you that can be immersed in the
								language wherever you are in your Spanish learning journey. Get
								to meet them!
							</p>
						</div>
					</div>
				</section>
        <div className={styles.separator}></div>
				<section>
					<div className={`${styles.container} ${styles.py11}`}>
						<div className={styles.collection_list}>
              {teachersInfo.map((teacher, index) => (
                <li key={index} style={{listStyle: "none"}}>
                  <TeachersCard teacher={teacher.teacher} image={teacher.image} country={teacher.country} bio={teacher.bio} />
                </li>
              ))}
						</div>
					</div>
				</section>
			</main>
      <Footer gray />
		</>
	);
};

export default Teachers;

const teachersInfo = [
  {
    teacher: "Pablo",
    image: Pablo,
    country: Spain,
    bio: "enjoys learning languages and loves helping others learn languages."
  },
  {
    teacher: "Alma",
    image: Alma,
    country: Spain,
    bio: "loves singing and hanging out around the sea. Additionally, she thinks that cats are really cool."
  },
  {
    teacher: "Andrea",
    image: Andrea,
    country: Mexico,
    bio: "loves acting, exercising, and generally just living a healthy lifestyle."
  },
  {
    teacher: "Michelle",
    image: Michelle,
    country: Mexico,
    bio: "enjoys surfing, traveling, and learning about history and different cultures."
  },
  {
    teacher: "Sofia",
    image: Sofia,
    country: Mexico,
    bio: "enjoys painting, competing in beauty contests, and hanging out with her 5 dogs."
  },
  {
    teacher: "Clau",
    image: Clau,
    country: Mexico,
    bio: "loves running, learning languages, and is a major food enthusiast."
  },
  {
    teacher: "Ricardo",
    image: Ricardo,
    country: Mexico,
    bio: "loves sports, music and video games. He also really enjoys learning about science and history."
  },
  {
    teacher: "Montserrat",
    image: Montserrat,
    country: Mexico,
    bio: "loves gaming, music, nature and food, and is always sharing that passion with others with a big smile."
  },
  {
    teacher: "Agustina",
    image: Agustina,
    country: Argentina,
    bio: "loves traveling and is an expert in all things related to planes, airports, and air travel."
  },
  {
    teacher: "Marce",
    image: Marce,
    country: Colombia,
    bio: "loves acting, stand-up comedy, and is a great teller of paranormal stories."
  },
  {
    teacher: "Jostin",
    image: Jostin,
    country: Venezuela,
    bio: "loves dancing, K-pop, and is an expert in video editing and nutrition."
  },
];