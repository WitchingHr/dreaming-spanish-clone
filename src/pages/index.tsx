import React from 'react';
import styles from '@/styles/Home.module.css'
import Header from '../../components/Header';
import hero1 from '../assets/hero1.png';

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
            <h1 className={styles.heading}>Learn <span style={{textDecoration: "underline"}}>Spanish</span> in the most<span style={{display: "block"}}> </span> natural and effective way</h1>
            <p className={styles.subheading}>Be immersed in authentic content at your level<span style={{display: "block"}}> </span>and progress smoothly towards fluency.</p>
            <button className={styles.start}>START LEARNING</button>
          </div>
        </section>
      </main>
    </>
  );
}
