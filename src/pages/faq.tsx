import React, { FC } from "react";
import Head from "next/head";
import Link from "next/link";

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Question from "../components/Question";

// Styles
import styles from "../styles/Resources.module.css";

// Images
import circle from "../assets/circle.svg";

const FAQ: FC = () => {
	return (
		<>
			<Head>
				<title>Freaquently Asked Questions | Dreaming Spanish</title>
			</Head>
			<Header gray sticky />
			<main
				className={styles.faq_bg}
				style={{
					backgroundImage: `url(${circle.src})`,
				}}
			>
				<section className={`${styles.container} ${styles.faq_section}`}>
					<h1 className={styles.faq_h1}>
						Got Questions?<br></br>We have answers.
					</h1>
					<div className={styles.faq_wrap}>
						<Question question="What is Dreaming Spanish?">
							<p className={styles.f24}>
								Dreaming Spanish is a video platform for Spanish learners. We
								produce content that are completely in Spanish, and that can be
								understood by students of every level. Even if you have no
								background in Spanish, you&apos;ll be able to find content that
								is comprehensible.
							</p>
						</Question>
						<Question question="So what's the idea? How does Dreaming Spanish work?">
							<p className={styles.f24}>
								Dreaming Spanish is based on the age-old idea of{" "}
								<span className={styles.black_text}>language immersion</span>,
								which, when you think about it, is essentially how every native
								speaker learned their mother tongue when they were babies and
								children. As researchers like{" "}
								<a
									href="https://www.youtube.com/watch?v=NiTsduRreug"
									className={`${styles.black_text} ${styles.underline} ${styles.orange_txt}`}
								>
									Dr. Stephen Krashen
								</a>{" "}
								have shown over the past 40+ years, receiving comprehensible
								input, that is, messages that you can understand in the target
								language, is what actually results in language acquisition. For
								more details, see{" "}
								<Link
									href="/method"
									className={`${styles.black_text} ${styles.underline} ${styles.orange_txt}`}
								>
									our Method page
								</Link>{" "}
								to learn more about the foundations of our approach.
							</p>
							<p className={`${styles.f24} ${styles.mt30}`}>
								Because of these findings, at Dreaming Spanish we seek to
								provide you with content in natural, authentic Spanish that you
								can understand, even if you&apos;re starting from zero.
							</p>
						</Question>
						<Question question="How do I learn with Dreaming Spanish?">
							<p className={styles.f24}>
								Watching the videos is by itself what results in acquiring the
								language. Not doing comprehension tests. Not reviewing
								vocabulary. Not doing other activities related to the content.
								Any of these activities that don&apos;t provide you with
								comprehensible input will not result in acquisition. Watching is
								the activity that will lead you to acquire the language. For the
								first few hundred hours of exposure to the language, it really
								is the only activity that you need to do. At the higher levels,
								listening to audio is also useful, and reading also has its
								place. We discuss reading later in this page.
							</p>
						</Question>
						<Question question="How do I know if I'm improving?">
							<p className={styles.f24}>
								Improvement when doing real acquisition feels quite different to
								what it feels like to study a list of vocabulary or a grammar
								point. You shouldn&apos;t expect to acquire a 100% of any single
								word or expression in a single day. Rather, each day you will be
								acquiring 1% of hundreds of words and expressions. Each time you
								hear or read a word, your brain will be connecting that word to
								all the other things that you were aware of when you heard it.
								It will be connected to the physical reality it referred to in
								that particular context, to the other words that appeared in the
								sentence, to the degree of formality of the situation, to the
								person who said that word, and to innumerable other details.
								Over time, hearing or reading this word dozens or hundreds of
								times, you will develop a clear picture for the range of
								meanings the word can have, how to use it grammatically, and in
								which situations it&apos;s appropriate to use that word.
							</p>
						</Question>
						<Question question="What about practicing speaking?">
							<p className={styles.f24}>
								While speaking has its place, its importance has been grossly
								overstated. Speaking is output. That means that when speaking,
								no new information is actually entering your brain. Therefore,
								speaking itself doesn&apos;t help us learn new words or grammar.
								In addition, at the beginner and intermediate level we still
								haven&apos;t acquired enough of the language to be able to speak
								well. That means that our brain will try to find whatever it can
								to fill in the gaps, and that usually means using the
								vocabulary, grammar, and pronunciation of your first language.
								After doing this repeatedly, we create connections between our
								first language and the language we are learning, which result in
								a non-native use of the language that&apos;s very hard to fix.
							</p>
						</Question>
						<Question question="What about reading and writing?">
							<p className={styles.f24}>
								We highly recommend reading once you are at level 5 or ideally
								6. The reason we don&apos;t recommend reading early on is purely
								because of pronunciation. If you don&apos;t care about talking to
								people, or if you already speak a language that sounds very
								similar to the language you are learning, you can start reading
								the most basic graded readers (easy readings for language
								learners) at around level 2 or 3. If you decide to start reading
								early, we do recommend to, at least, become familiar with the
								way the letters are pronounced in Spanish.
							</p>
						</Question>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default FAQ;
