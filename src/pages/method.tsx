import React, { FC } from "react";
import styles from "../styles/About.module.css";

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import hero from "../assets/method-hero.png";
import timeline from "../assets/timeline.png";
import study from "../assets/study.png";
import listening from "../assets/listening.png";
import homework from "../assets/homework.png";
import one from "../assets/image-col-1.png";
import two from "../assets/image-col-2.png";
import three from "../assets/image-col-3.png";
import four from "../assets/image-col-4.png";
import five from "../assets/image-col-5.png";
import speaking from "../assets/speaking.png";

const About: FC = () => {
	return (
		<>
      <Head>
        <title>The OG Immersion Method for Learning Spanish</title>
      </Head>
			<Header sticky gray />
			<main>
				<div className={`${styles.hero_section} ${styles.gray_bg}`}>
					<Image src={hero} alt="" className={styles.hero} />
					<div className={styles.abs}>
						<h1 className={styles.hero_heading}>The OG Immersion Method</h1>
					</div>
				</div>
				<section className={styles.gray_bg}>
					<div className={`${styles.container} ${styles.section_1}`}>
						<div>
							<p className={styles.f24}>
								<span className={styles.black_text}>
									Good ol&apos; immersion.
								</span>{" "}
								How you, and I, and everyone else learned their native language.
								Who would&apos;ve thought that the most effective method of
								learning a language was something so obvious, something that
								we&apos;ve all done ourselves. What happened to lead us astray?
								How do we know{" "}
								<span className={styles.black_text}>OG immersion</span> really
								is the best way to learn?
							</p>
							<p className={`${styles.f24} ${styles.mt2}`}>
								On this page we explain{" "}
								<span className={styles.black_text}>
									what’s wrong with traditional language learning,
								</span>{" "}
								why{" "}
								<span className={styles.black_text}>
									the strong foundation of the OG Immersion Method
								</span>{" "}
								makes it the best approach, and{" "}
								<span className={styles.black_text}>
									what to do and expect at each stage of your learning to make
									the most of Dreaming Spanish.
								</span>{" "}
								Continue reading to understand how following this timeline will
								get you to your learning goal, however ambitious it may be:
							</p>
							<div className={styles.mt30}>
								<Image src={timeline} alt="" className={styles.image} />
							</div>
							<p className={`${styles.f24} ${styles.mt30} ${styles.caption}`}>
								*The number of hours is for speakers of European languages
								learning Spanish or another related language. Speakers of other
								romance languages can divide the amount of required hours by 2,
								while people that don&apos;t know any related language will need
								to spend approximately twice as many hours.
							</p>
						</div>
					</div>
				</section>
				<section>
					<div className={`${styles.container} ${styles.section_2}`}>
						<h2 className={styles.h2}>The Problem</h2>
						<div className={`${styles.layout_grid} ${styles.grid_7}`}>
							<div className={styles.content_col}>
								<p className={styles.f24}>
									Traditional language education doesn&apos;t work. Students
									spend years in school learning a second language, but by the
									time they graduate, they still can&apos;t hold a conversation
									in the language. Students spend hours and hours practicing
									grammar constructions, but after many years they are still
									unable to use them spontaneously in conversation. They spend a
									lot of time studying vocabulary lists for an exam, just to
									forget those words a week after the exam. As a consequence,
									the success rates are abysmal.
								</p>
								<p className={`${styles.f24} ${styles.mt30}`}>
									Why aren&apos;t we doing better? You would be surprised to
									know that it&apos;s not because we don&apos;t know how to do
									it. Actually,{" "}
									<span className={styles.black_text}>
										over the last 40+ years, language acquisition researchers
										like{" "}
										<a
											href="https://www.youtube.com/watch?v=NiTsduRreug"
											className={`${styles.orange_txt} ${styles.underline}`}
										>
											Dr. Stephen Krashen
										</a>
										have figured out why traditional language education
										doesn&apos;t work,
									</span>{" "}
									and how to do better. Keep reading to understand the
									fundamental misconception in which traditional language
									education is based.
								</p>
							</div>
							<div className={styles.image_col}>
								<Image src={study} alt="" className={styles.image} />
							</div>
						</div>
						<p className={`${styles.f24} ${styles.mt30}`}>
							Unfortunately, language education has&apos;nt caught up for the
							most part. Besides natural human resistance to change, and the
							tendency to consider languages as another subject matter that
							needs to be studied, real language acquisition is harder for
							teachers to measure in an exam. The requirements for teachers to
							give out scores that are easy to understand, and the lack of time
							to really judge how much language their students have acquired,
							leads to exams with easy-to-grade exercises like “fill in the
							blank”, “sort the words”, and other{" "}
							<span className={styles.black_text}>
								meaningless tests that have nothing to do with real acquisition.
							</span>{" "}
							As a result, teachers have to teach the things that will allow
							their students to pass the exam. Again, what they learn is very
							far from the real acquisition that would allow you to have a
							fluent conversation, or understand a movie or a book in the
							language you are learning.
						</p>
						<p className={`${styles.f24} ${styles.mt30}`}>
							But here, in Dreaming Spanish, we are not bound by those
							limitations. We&apos;ve decided to step up and put together a
							method that implements the principles of actual language
							acquisition in a way that works and that{" "}
							<span className={styles.black_text}>
								you&apos;ll actually have fun doing.
							</span>
						</p>
						<p className={`${styles.f24} ${styles.mt30}`}>
							Now we can explain to you the foundations of this method and how
							to make the most of it.
						</p>
					</div>
				</section>
				<section>
					<div className={`${styles.container} ${styles.bg_orange}`}>
						<h1 className={styles.h1}>Fundamentals</h1>
					</div>
				</section>
				<section className={styles.gray_bg}>
					<div className={`${styles.container} ${styles.section_2}`}>
						<h2 className={styles.h2}>Comprehensible Input</h2>
						<div className={styles.left_col}>
							<p className={styles.f24}>
								The concept of{" "}
								<span
									className={`${styles.black_text} ${styles.italic} ${styles.underline}`}
								>
									comprehensible input
								</span>{" "}
								is fundamental for understanding how we acquire a language.
								Since Dr. Stephen Krashen introduced this concept as part of his{" "}
								<a
									href="https://en.wikipedia.org/wiki/Input_hypothesis"
									className={`${styles.black_text} ${styles.underline} ${styles.orange_txt}`}
								>
									Input Hypothesis
								</a>
								, more and more research has piled up showing that receiving
								comprehensible input is not only
								<span className={styles.black_text}>necessary</span> for
								acquiring a language (both first and second), but it is also
								<span className={styles.black_text}>sufficient.</span> More and
								more research is also showing that it&apos;s not only necessary
								and sufficient, but also
								<span className={styles.black_text}>
									faster and gives better results.
								</span>
							</p>
							<p className={`${styles.f24} ${styles.mt2}`}>
								What is “Comprehensible Input”, though? We are receiving
								comprehensible input when we understand messages. The “input”
								part means that{" "}
								<span className={styles.black_text}>
									we are listening or reading
								</span>
								. Only listening or reading (or watching in the case of sign
								languages) is input.{" "}
								<span className={styles.black_text}>
									Speaking, writing, and doing exercises is not input
								</span>
								. The “comprehensible” part, means that{" "}
								<span className={styles.black_text}>
									what we are listening to or reading is understandable to us
								</span>
								. This doesn&apos;t mean that we understand every word or every
								grammar point in the input, but that we understand enough to be
								able to figure out the rest thanks to context. When we receive
								comprehensible input, the conditions are met for our brain to be
								able to use its natural ability to acquire language, without
								having to do anything else. There&apos;s no need to study,
								review vocabulary, or practice anything.{" "}
								<span className={styles.black_text}>
									Watching and reading itself results in acquisition
								</span>
								. Research also keeps showing that this ability to acquire
								language remains active even as an adult, and that we can
								benefit a lot by imitating the way children learn their first
								language.
							</p>
							<p className={`${styles.f24} ${styles.mt30}`}>
								During the 1980&apos;s,{" "}
								<a
									className={`${styles.black_text} ${styles.orange_txt} ${styles.underline}`}
									href="https://en.wikipedia.org/wiki/J._Marvin_Brown"
								>
									Dr. J. Marvin Brown
								</a>{" "}
								adapted Krashen&apos;s ideas into a practical classroom method
								called ALG, and developed a more unified framework about how we
								acquire languages, that also explains in more detail the reason
								why some people end up with stronger foreign accents than
								others, the benefits of delaying speech, the issues with trying
								to use explicit learning to acquire a language, and can even
								explain how creole languages appear.
							</p>
							<div className={`${styles.thai_wrapper} ${styles.mt6}`}>
								<Image src={listening} alt="" />
							</div>
							<p className={`${styles.f24} ${styles.mt30}`}>
								<span className={styles.black_text}>
									This framework explains acquisition in terms of the
									representation of the language in the brain
								</span>
								. When we are aware of a concept (because we see it or we
								understand it from the context) and hear the word that refers to
								it, we start forming connections between them. When we form more
								and more of these connections, we have acquired a word. Over
								time, those connections start to form between words that share
								common grammatical properties, between words that can be used in
								the same position in a phrase, and that&apos;s how our brain
								forms the patterns that will allow us to gain an intuitive
								understanding of the language.{" "}
								<span className={styles.black_text}>
									By forming brain connections that are similar to those that
									native speakers form,
								</span>{" "}
								we can become fluent and be able to produce language that&apos;s
								comparable to what native speakers would produce. If instead we
								make our brain form connections to our first language (by using
								translations), to the explicit thinking parts of our brain (by
								studying grammar), or to our own preconceived ideas of the
								language (by forcing early production), we end up with something
								that&apos;s different to what native speakers have.
							</p>
						</div>
					</div>
				</section>
				<section>
					<div className={`${styles.container} ${styles.section_2}`}>
						<h2 className={styles.h2}>Learning is Not Aquisition</h2>
						<p className={styles.f24}>
							To understand why traditional language education doesn&apos;t
							work, it&apos;s important to understand the difference between
							learning and acquisition. Learning refers to doing conscious
							study, be it in the form of grammar rules, studying lists of
							vocabulary, or any other activity that engages our conscious
							thinking. But{" "}
							<span className={styles.black_text}>
								conscious thinking is very slow and incapable of holding at once
								the incredible complexity of a language
							</span>
							. We can never hope to hold a fluent conversation if we need to be
							holding in our head and applying dozens of grammar rules for every
							sentence that we say, or if we need to constantly translate the
							words in our head.
						</p>
						<p className={`${styles.f24} ${styles.my2}`}>
							Acquired language is not conscious knowledge. Acquired language in
							fluent speakers (both as a first or second language) is
							subconscious knowledge, sometimes also called implicit knowledge.
							<span className={styles.black_text}>
								Acquired language works extremely fast, without having to make
								an effort to think about grammar or translate words in your head
							</span>
							. When receiving comprehensible input, our brain connects our
							experiences directly with the words that we hear associated with
							those experiences. These direct connections allow us to understand
							a word immediately when we hear it or read it, and to immediately
							know what sounds like correct grammar and what doesn&apos;t,
							without having to think about it or translate in our heads.
						</p>
						<div className={`${styles.layout_grid} ${styles.grid_3}`}>
							<div className={styles.content_col}>
								<div className={`${styles.f24} ${styles.black_text}`}>
									Acquisition, not learning, is what allows you to:
								</div>
								<ul role="list" className={`${styles.f24} ${styles.fflist}`}>
									<li>Be able to have a full-paced, fluent conversation.</li>
									<li>
										Be able to watch media in the language and understand it.
									</li>
									<li>Be able to read a book without struggling.</li>
									<li>
										Be able to write in the language without second guessing
										yourself every sentence.
									</li>
								</ul>
								<p className={`${styles.f24} ${styles.mt2}`}>
									On the other side, acquisition will{" "}
									<span className={styles.black_text}>NOT</span> be adequate or
									sufficient if your reason for learning a language is one of
									the following:
								</p>
								<ul className={`${styles.f24} ${styles.fflist}`}>
									<li>
										<span className={styles.underline}>
											Travel once to the country where the language is spoken:
										</span>
										You&apos;ll be better off learning a handful of common words
										and phrases, carrying a phrasebook, and using a translator
										app on your phone.
									</li>
								</ul>
							</div>
							<div className={styles.image_col}>
								<Image src={homework} alt="" className={styles.image} />
							</div>
						</div>
						<ul className={`${styles.f24} ${styles.fflist} ${styles.mt1}`}>
							<li>
								<span className={styles.underline}>
									Discussing the grammar of the language:
								</span>{" "}
								You&apos;ll have the same intuitions that native speakers have
								about what&apos;s correct grammar, but like many native
								speakers, you won&apos;t necessarily be able to explain how it
								works, or “why” something is correct or it isn&apos;t.
							</li>
							<li>
								<span className={styles.underline}>
									Doing translation and interpretation work:
								</span>{" "}
								While acquisition is very useful, and even necessary for doing
								interpretation work, you will know many words intuitively. You
								will know how they feel, and when they should be used. But in
								many cases, you won&apos;t necessarily have made a connection
								between them and the equivalent words in your native language.
								Getting to be a good translator or interpreter will require
								additional work.
							</li>
						</ul>
						<p className={`${styles.f24} ${styles.mt2}`}>
							Now that you know why you should acquire a language rather than
							studying it, let&apos;s see what that means in practice.
						</p>
					</div>
				</section>
				<section>
					<div className={`${styles.container} ${styles.bg_orange}`}>
						<h1 className={styles.h1}>Applying Our Method</h1>
					</div>
				</section>
				<section className={styles.gray_bg}>
					<div className={`${styles.container} ${styles.py8}`}>
						<div>
							<h2 className={styles.h2}>How to Use Our Videos</h2>
							<p className={styles.f24}>
								We said this earlier, but it bears repeating.{" "}
								<span className={styles.black_text}>
									Watching the videos is by itself what results in acquiring the
									language
								</span>
								. Not doing comprehension tests. Not reviewing vocabulary. Not
								doing other activities related to the content. Any of these
								activities that don&apos;t provide you with comprehensible input
								will not result in acquisition.
							</p>
							<div
								className={`${styles.layout_grid} ${styles.grid_4} ${styles.mt30}`}
							>
								<div className={styles.image_col}>
									<Image src={one} alt="" className={styles.image} />
									<Image
										src={two}
										alt=""
										className={`${styles.image} ${styles.mt5}`}
									/>
									<Image
										src={three}
										alt=""
										className={`${styles.image} ${styles.mt5}`}
									/>
									<Image
										src={four}
										alt=""
										className={`${styles.image} ${styles.mt5}`}
									/>
									<Image
										src={five}
										alt=""
										className={`${styles.image} ${styles.mt5}`}
									/>
								</div>
								<div className={styles.content_col}>
									<p className={styles.f24}>
										Watching is the activity that will lead you to acquire the
										language. For the first few hundred hours of exposure to the
										language, it really is the only activity that you need to
										do. At the higher levels, listening to audio is also useful,
										and reading also has its place. We discuss reading later in
										this page.
									</p>
									<p className={`${styles.f24} ${styles.mt2}`}>
										By the way, if you would like to get the benefits of
										Comprehensible Input but you prefer direct personal
										interaction with speakers of the language, we recommend you
										check out Crosstalk.
									</p>
									<p className={`${styles.f24} ${styles.mt2}`}>
										When watching our videos, your focus should be on enjoying
										the videos.{" "}
										<span className={styles.black_text}>
											You do need to be paying attention
										</span>
										, so listening to them in the background or while you sleep
										won&apos;t work, but{" "}
										<span className={styles.black_text}>
											your focus should be on enjoying them
										</span>
										, not on trying to analyze what&apos;s being said or on
										memorizing certain words.
									</p>
									<p className={`${styles.f24} ${styles.mt2}`}>
										The input needs to be{" "}
										<span className={styles.black_text}>comprehensible</span>.
										You need to understand enough of the input. How much is
										enough? You certainly need to understand enough to stay
										engaged and enjoy watching the videos.
									</p>
									<p className={`${styles.f24} ${styles.mt2}`}>
										But when you&apos;re just starting, you won&apos;t know most
										of the words that are being said. That&apos;s okay, though.{" "}
										<span className={styles.black_text}>
											As long as you understand the overall story
										</span>{" "}
										by looking at the pictures and drawings, you will start
										connecting meaning with vocabulary. Most vocabulary you are
										ready to learn at this stage are nouns for concrete items
										(house, dog, river...) and verbs for common actions (walk,
										talk, see...), and our easiest videos are designed to help
										you do that without needing to know every word.
									</p>
									<p className={`${styles.f24} ${styles.mt2}`}>
										Even at the higher levels,{" "}
										<span className={styles.black_text}>
											you don&apos;t need to understand every single word
										</span>
										. At each step of your learning, you&apos;ll be ready to
										acquire certain things, and you won&apos;t be ready to
										acquire certain other things. By focusing on watching
										interesting content, the things that you are ready to
										acquire will stick, and the rest will come to you when you
										are ready for them. This is especially true of function
										words, which you will hear over and over before your brain
										figures out their meaning.
									</p>
								</div>
							</div>
							<p className={`${styles.f24} ${styles.mt2}`}>
								Because context is so helpful to figure out the meaning of new
								words that you encounter,{" "}
								<span className={styles.black_text}>
									most people would benefit from watching lower level videos
								</span>{" "}
								than what they think they should. If you are losing track of
								what&apos;s being said, then we advise you to try watching
								easier content. In this case,{" "}
								<span className={styles.black_text}>
									challenging yourself with harder content is counter-productive
									most of the time.
								</span>
							</p>
							<p className={`${styles.f24} ${styles.mt2}`}>
								While watching, avoid doing things like looking up words in the
								dictionary, repeating words in your head to try to memorize
								them, or paying any kind of conscious thought to the structure
								or the pronunciation of the language. To say it in the most
								general way possible:{" "}
								<span className={styles.black_text}>don&apos;t think</span>.
								These things take you out of the activity of listening, and
								engage the conscious part of your brain, which should be focused
								on understanding the content, not the form of the language.
							</p>
						</div>
					</div>
				</section>
				<section>
					<div className={`${styles.container} ${styles.py8}`}>
						<h2 className={styles.h2}>How Do I Know if I&apos;m Improving?</h2>
						<p className={styles.f24}>
							Improvement when doing real acquisition{" "}
							<span className={styles.black_text}>feels quite different</span>{" "}
							to what it feels like to study a list of vocabulary or a grammar
							point. You shouldn&apos;t expect to acquire a 100% of any single
							word or expression in a single day. Rather,{" "}
							<span className={styles.black_text}>
								each day you will be acquiring 1% of hundreds of words
							</span>{" "}
							and expressions. Each time you hear or read a word, your brain
							will be connecting that word to all the other things that you were
							aware of when you heard it. It will be connected to the physical
							reality it referred to in that particular context, to the other
							words that appeared in the sentence, to the degree of formality of
							the situation, to the person who said that word, and to
							innumerable other details. Over time, hearing or reading this word
							dozens or hundreds of times,{" "}
							<span className={styles.black_text}>
								you will develop a clear picture for the range of meanings the
								word can have
							</span>
							, how to use it grammatically, and in which situations it&apos;s
							appropriate to use that word.
						</p>
						<p className={`${styles.f24} ${styles.mt2}`}>
							Since every word or expression is learned gradually, words will
							feel a bit different depending on how well you know them. The
							first few times you hear a word, you may start getting a feeling
							for the meaning of the word, but not be able to tell exactly what
							it refers to. Then, you will know the word well enough to
							understand its meaning, but only when in context. Then, you will
							know it well enough to understand what it means when hearing it by
							itself. Only after that, you will be able to say the word out loud
							yourself. Naturally, there will always be more words that you
							understand than words you are able to say. This is not a problem,
							and it&apos;s actually inevitable. It even happens for our first
							language.
						</p>
						<p className={`${styles.f24} ${styles.mt2}`}>
							<span className={styles.black_text}>At the lower levels</span>,
							you can expect to be mostly acquiring{" "}
							<span className={styles.black_text}>
								words that refer to real world items
							</span>
							, actions, and other things that can be conveyed visually.{" "}
							<span className={styles.black_text}>
								Acquisition of more abstract terms
							</span>{" "}
							(e.g., “hope”, “sluggishly”, “policy”) and words that have mostly
							grammatical function but no actual meaning{" "}
							<span className={styles.black_text}>will come much later</span>.
						</p>
						<p className={`${styles.f24} ${styles.mt2}`}>
							The <span className={styles.black_text}>learning of grammar</span>{" "}
							and conjugations will be very progressive, and, unlike vocabulary,
							initially{" "}
							<span className={styles.black_text}>
								you won&apos;t be aware that it&apos;s happening
							</span>
							. Expect to have to wait until getting to level 3 to start
							noticing how certain word orders and conjugations just feel
							better, and start detecting how some things just feel wrong. You
							will eventually acquire the totality of the grammar of the
							language if you just keep the input flowing.
						</p>
						<p className={`${styles.f24} ${styles.mt2}`}>
							Because both the vocabulary and the grammar are learned so
							gradually, the{" "}
							<span className={styles.black_text}>
								best indicator of your progress is actually the total amount of
								input that you have received
							</span>
							. That&apos;s why the levels of our timeline are based on the
							number of hours of input that you need to get to each level. For
							reading, the total number of words read is the measure to use.
						</p>
					</div>
				</section>
				<section className={styles.gray_bg}>
					<div className={`${styles.container} ${styles.py8}`}>
						<h2 className={styles.h2}>What About Studying?</h2>
						<p className={styles.f24}>
							<span className={styles.black_text}>
								There is no need to study grammar or vocabulary
							</span>
							. Research over the last few decades has more than proven that the
							innate ability of our brain to figure out the patterns in the
							language stays active even as an adult, and it can work as long as
							we provide it with the appropriate fuel. There&apos;s no reason to
							consider yourself more stupid than a child. You are not.
						</p>
						<p className={`${styles.f24} ${styles.mt2}`}>
							By hearing a word over and over, we intuitively remember its
							meaning, and we even associate it to its correct usage, level of
							formality, and other details that will let us use that word in an
							idiomatic way.
						</p>
						<p className={`${styles.f24} ${styles.mt2}`}>
							The same happens with the grammar. Once we know enough words that
							we can start understanding complete phrases, our brain will
							subconsciously start figuring out the patterns, and providing you
							with an intuitive feeling for how to put together sentences, how
							to use prepositions correctly, how to conjugate, and every other
							aspect of the grammar.
						</p>
					</div>
				</section>
				<section>
					<div className={`${styles.container} ${styles.py8}`}>
						<h2 className={styles.h2}>What About Practicing Speaking?</h2>
						<div className={`${styles.layout_grid} ${styles.grid_6}`}>
							<div className={styles.content_col}>
								<p className={styles.f24}>
									While speaking has its place,{" "}
									<span className={styles.black_text}>
										its importance has been grossly overstated
									</span>
									. Speaking is output. That means that when speaking, no new
									information is actually entering your brain. Therefore,
									speaking itself doesn&apos;t help us learn new words or
									grammar.
								</p>
								<p className={`${styles.f24} ${styles.mt2}`}>
									In addition, at the beginner and intermediate level we still
									haven&apos;t acquired enough of the language to be able to
									speak well. That means that our brain will try to find
									whatever it can to fill in the gaps, and that usually means
									using the vocabulary, grammar and pronunciation of your first
									language. After doing this repeatedly, we create connections
									between our first language and the language we are learning,
									which result in a nonnative use of the language that&apos;s
									very hard to fix.
								</p>
								<p className={`${styles.f24} ${styles.mt2}`}>
									Speaking does become desirable at the higher levels. One
									reason is that{" "}
									<span className={styles.black_text}>
										by speaking, you get speakers of the language to speak back
										to you
									</span>{" "}
									and provide you with highly engaging, highly meaningful input.
								</p>
							</div>
							<div className={styles.image_col}>
								<Image src={speaking} alt="" className={styles.image} />
							</div>
						</div>
						<p className={`${styles.f24} ${styles.mt2}`}>
							The biggest benefit of practicing speaking is gaining confidence
							about your ability to communicate and get rid of fears you may
							have about speakers of the language not understanding you or
							reacting negatively to your attempts to talk to them. The more
							language you have acquired, the more likely you&apos;ll have an
							easy time communicating and holding conversations.{" "}
							<span className={styles.black_text}>
								If you try speaking and you are missing too many words and
								expressions, there&apos;s no shame in focusing on input for a
								while longer
							</span>
							, and trying again in the future. Once you have acquired enough
							language, if you are still hesitant about speaking, it&apos;s
							helpful to get a language exchange partner, a private instructor,
							or a patient friend that you can talk to in a comfortable setting.
						</p>
						<p className={`${styles.f24} ${styles.mt2}`}>
							A bit of{" "}
							<span className={styles.black_text}>
								speaking practice is also needed to get your mouth muscles to
								produce the appropriate sounds
							</span>
							. This is purely a muscle memory issue, so it requires actual
							practice. However,{" "}
							<span className={styles.black_text}>
								this is much shorter than most people think,
							</span>{" "}
							only taking a few dozen hours of practice at most. If your mental
							image of the sounds of the language is well built by getting lots
							of input, you will be able to very quickly guide your muscles and
							have them converge towards producing the sounds that you expect
							them to produce.{" "}
							<span className={styles.black_text}>
								When people can&apos;t pronounce a language clearly it&apos;s
								not because of lack of speaking practice,
							</span>{" "}
							but rather because they internally don&apos;t have a clear target
							for what the language coming out of their mouths should sound
							like.
						</p>
						<p className={`${styles.f24} ${styles.mt2}`}>
							Additionally, thanks to several case studies of people who were
							unable to communicate because of handicaps, suddenly were able to
							produce whole sentences in the language as soon as they were given
							the technological means to do so. This, and our personal
							experience, indicates that grammar and vocabulary don&apos;t need
							to be practiced to “activate” it.
						</p>
					</div>
				</section>
				<section className={styles.gray_bg}>
					<div className={`${styles.container} ${styles.py8}`}>
						<h2 className={styles.h2}>But Nobody Will Correct My Mistakes!</h2>
						<p className={styles.f24}>
							The belief that we need to make mistakes and be corrected is a
							leftover from the days of B. F. Skinner&apos;s behaviorism. The
							problem with correcting errors is that it targets the conscious
							part of our brain, not the intuitive part that&apos;s in charge of
							producing fluent language. This has been confirmed by the
							research, since for years and years researchers have been trying
							to get both oral or written corrections to work,{" "}
							<span className={styles.black_text}>
								but none have been able to get
							</span>
						</p>
						<p className={`${styles.f24} ${styles.mt2}`}>
							The good thing is that if you keep getting lots of input, you
							won&apos;t need your mistakes to be corrected. You&apos;ll
							eventually learn the right way of saying things from the input
							itself.
						</p>
					</div>
				</section>
				<section>
					<div className={`${styles.container} ${styles.py8}`}>
						<h2 className={styles.h2}>What About Reading and Writing?</h2>
						<p className={styles.f24}>
							We highly recommend reading once you are at level 5 or ideally 6.
							Reading practice is required in order to get good at (1) spelling,
							and (2) reading fast. Additionally, reading practice can help you
							learn tons of vocabulary that doesn&apos;t commonly appear in
							other kinds of media.
						</p>
						<p className={`${styles.f24} ${styles.mt2}`}>
							<span className={styles.black_text}>
								The reason we don&apos;t recommend reading early on is purely
								because of pronunciation
							</span>
							. If you don&apos;t care about talking to people, or if you
							already speak a language that sounds very similar to the language
							you are learning, you can start reading the most basic graded
							readers (easy readings for language learners) at around level 2 or
							3. If you decide to start reading early, we do recommend to, at
							least, become familiar with the way the letters are pronounced in
							Spanish. You can get started with{" "}
							<a
								href="https://onemonthspanish.com/blog/wp-content/uploads/2014/11/onemonthspanish.com-Spanish_Pronunciation_The_Complete_Guide.pdf"
								className={`${styles.black_text} ${styles.orange_txt} ${styles.underline}`}
							>
								this guide
							</a>
							.
						</p>
						<p className={`${styles.f24} ${styles.mt2}`}>
							The reason reading early affects your pronunciation is the same
							reason why speaking early affects it. When you are reading, you
							are going to sound out the letters and the words in your head. If
							you haven&apos;t developed a good mental image for the sounds of
							the language through input,{" "}
							<span className={styles.black_text}>
								your brain is going to have to use the sounds it already knows
							</span>
							, which are the sounds of your first language.
						</p>
						<p className={`${styles.f24} ${styles.mt2}`}>
							<span className={styles.black_text}>
								If having a clear and understandable pronunciation is important
								for you, we recommend waiting at least until you are at level 5
							</span>{" "}
							to start reading. By then, your mental image of the sounds of the
							language will already be quite well developed. For those learners
							out there that really care about having a pronunciation
							that&apos;s very close to that of native speakers, you can even
							postpone reading until you get to level 6. At level 5 or 6, your
							mental image of the sound of the language will be so solid that it
							will be able to overcome your default tendency to read the letters
							the way they sound in your first language. In this case, you
							won&apos;t have any problems, even if you don&apos;t study the
							pronunciation of the letters. Once you are at this level,
							explicitly learning the rules of pronunciation is not a bad thing
							to do, though. Especially with Spanish, since it has such a direct
							relation between spelling and pronunciation. So feel free to do so
							if you wish.
						</p>
						<p className={`${styles.f24} ${styles.mt2}`}>
							A good thing about starting reading at level 5 or 6, is that by
							then there will be lots of books that you can already understand,
							like children&apos;s novels or non-fiction books.
						</p>
						<p className={`${styles.f24} ${styles.mt2}`}>
							So until you get there,{" "}
							<span className={styles.black_text}>
								don&apos;t worry about anything and just keep getting your
								input!
							</span>
						</p>
					</div>
				</section>
				<section className={styles.gray_bg}>
					<div className={`${styles.container} ${styles.py8}`}>
						<h2 className={styles.h2}>
							Video Course: How to Use Dreaming Spanish
						</h2>
						<p className={styles.f24}>
							If you&apos;ve made it this far and still crave for more details, watch{" "}
							<Link href="/about" className={`${styles.black_text} ${styles.orange_txt} ${styles.underline}`}>Pablo</Link> himself talk about the theory and practice of Dreaming
							Spanish <Link href="/browse" className={`${styles.black_text} ${styles.orange_txt} ${styles.underline}`}>here on this playlist of 12 subtitled videos</Link>.
						</p>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default About;
