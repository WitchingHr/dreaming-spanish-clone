import React, { FC } from "react";
import styles from "../styles/About.module.css";

import Image from "next/image";
import Link from "next/link";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import hero from "../assets/about-hero.png";
import pablo from "../assets/pablo-face.png";
import japan from "../assets/pablo-japan.png";
import thailand from "../assets/pablo-thai.png";

const About: FC = () => {
	return (
		<>
			<Header scroll={false} sticky={true} />
			<main>
				<div className={styles.hero_section}>
					<Image src={hero} alt="" className={styles.hero} />
					<div className={styles.abs}>
						<h1 className={styles.hero_heading}>
							Pablo&apos;s Language Learning Journey
						</h1>
					</div>
				</div>
				<section className={styles.gray_bg}>
					<div className={`${styles.container} ${styles.section_1}`}>
						<div className={`${styles.layout_grid} ${styles.grid_8}`}>
							<div className={styles.left_col}>
								<p className={`${styles.f24} ${styles.italics}`}>
									Pablo is determined to revolutionize how people learn
									languages worldwide.
								</p>
								<p className={`${styles.f24} ${styles.mt2}`}>
									Having gone through language classes in school, Pablo was
									frustrated with how boring and ineffective traditional
									language education was. He thought that there had to be a
									better way, and decided to seek out alternative methods that
									would be more effective and enjoyable.{" "}
									<span className={`${styles.black_text} ${styles.underline}`}>
										After learning English, French, Japanese, and Thai to
										fluency,
									</span>{" "}
									he felt that he had finally found the method that he was
									looking for, and that he could contribute to the world by
									sharing his learnings and experiences.
								</p>
								<p className={`${styles.f24} ${styles.mt2}`}>
									How did Pablo come up with the method that lies behind
									Dreaming Spanish? Let us take a look at his language learning
									journey to see how he arrived at what he calls the{" "}
									<Link href="/method">
										<span
											className={`${styles.orange_txt} ${styles.underline}`}
										>
											OG Immersion Method
										</span>
									</Link>
									.
								</p>
							</div>
							<div className={styles.right_col}>
								<Image src={pablo} alt="" className={styles.face} />
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className={`${styles.container} ${styles.section_2}`}>
						<h2 className={styles.h2}>English</h2>
						<p className={styles.f24}>
							Pablo’s language learning journey started with English. Like many
							students around the world, Pablo started learning English at
							school, through traditional methods of studying grammar,
							memorizing vocabulary, doing grammar exercises, and so on.{" "}
							<span className={styles.black_text}>
								After 10 years of studies, he realized that he, and all of his
								classmates that were graduating high school, still could not
								speak English.
							</span>
						</p>
						<p className={`${styles.f24} ${styles.mt2}`}>
							In college,{" "}
							<span className={styles.black_text}>
								Pablo started engaging in English in more natural ways.{" "}
							</span>
							He started reading books and consuming a lot of media in English,
							and found that he was acquiring English at a much faster rate. By
							his last year of university, when he left Spain to spend a year on
							exchange in Finland, he realized that{" "}
							<span className={styles.black_text}>
								he could for the first time speak completely fluently in
								English.
							</span>
						</p>
					</div>
				</section>
				<section className={styles.gray_bg}>
					<div className={`${styles.container} ${styles.section_3}`}>
						<h2 className={styles.h2}>Japanese</h2>
						<div className={`${styles.layout_grid} ${styles.grid_8}`}>
							<div className={styles.left_col}>
								<p className={styles.f24}>
									With Japanese, Pablo took this approach one step further.
									Unlike English, which he had exposure to in school and which
									shares a lot of grammar and vocabulary with his native tongue
									Spanish,{" "}
									<span className={styles.black_text}>
										Japanese was a completely different and new language for
										Pablo.{" "}
									</span>
									He had doubts about whether ignoring grammar and vocabulary
									would work, and decided that the best way to find out was to
									give it a try.
								</p>
								<p className={`${styles.f24} ${styles.mt2}`}>
									It took quite a bit of effort to find material, but
									nonetheless Pablo was able to{" "}
									<span className={styles.black_text}>
										immerse himself completely in Japanese.
									</span>{" "}
									After six months of at-home immersion in Spain, Pablo moved to
									Japan and continued to learn Japanese without studying grammar
									or taking language classes. A year more of doing this, he
									found that{" "}
									<span className={styles.black_text}>
										he had reached a point where he could speak Japanese with
										complete fluency, and became convinced that this method of
										mass immersion can work right from the start,
									</span>{" "}
									even without any prior knowledge of the language.
								</p>
							</div>
							<div className={styles.right_col}>
								<Image src={japan} alt="" className={styles.face} />
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className={`${styles.container} ${styles.section_4}`}>
						<div>
							<h2 className={styles.h2}>Thai</h2>
							<p className={styles.f24}>
								After mastering Japanese, Pablo realized that he had become
								quite good at learning languages, and that he wanted to devote
								himself in helping others achieve success in language learning
								too. He started researching language pedagogy, reading many
								research papers on the subject, and encountered the idea of{" "}
								<span className={styles.black_text}>comprehensible input.</span>{" "}
								He felt that{" "}
								<span className={styles.black_text}>
									this idea explained why he and other fluent speakers he knew
									were able to achieve such success,
								</span>{" "}
								and so he began to investigate the best way to teach languages
								using this idea.
							</p>
						</div>
						<Image src={thailand} alt="" className={styles.thai} />
						<div>
							<p className={styles.f24}>
								This line of inquiry eventually brought Pablo to Thailand. He
								had heard of{" "}
								<span className={styles.black_text}>
									a school in Bangkok that taught Thai only using comprehensible
									input
								</span>{" "}
								, and as an experiment he decided he would enroll in this school
								to test it out himself. After many hours of comprehensible Thai,{" "}
								<span className={styles.black_text}>
									he did indeed succeed in learning the language, but he also
									learned many ideas of teaching through comprehensible input
									that he felt he could adopt, modify, and expand to reach
									language learners all across the world.
								</span>{" "}
							</p>
						</div>
					</div>
				</section>
				<section className={styles.gray_bg}>
					<div className={`${styles.container} ${styles.section_2}`}>
						<h2 className={styles.h2}>Dream On...</h2>
						<p className={styles.f24}>
							As research has shown and as Pablo’s personal experience has
							confirmed, learning through immersion — through comprehensible
							input — really is the best way to acquire a language. And in this
							day and age,{" "}
							<span className={styles.black_text}>
								with the help of the internet, one could in principle achieve
								immersion in any language from anywhere in the world. The only
								thing missing is the right content — content that is engaging,
								that is comprehensible from the get-go, and that exhibits
								authentic use of the language.
							</span>
						</p>
						<p className={`${styles.f24} ${styles.mt2}`}>
							With these goals in mind, Pablo started creating content aimed at
							learners of his native language, and{" "}
							<span className={styles.black_text}>
              Dreaming Spanish was born.{" "}
							</span>
						</p>
					</div>
				</section>
			</main>
      <Footer />
		</>
	);
};

export default About;
