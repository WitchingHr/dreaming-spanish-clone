import React, { useState, useEffect, FC } from "react";
import styles from "./Header.module.css";

import Image from "next/image";
import Link from "next/link";
import logo from '../src/assets/logo-orange-horizontal.svg';

const Header: FC = () => {
  const [scrolled, setScrolled] = useState(false);

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
    }
  }, []);

  const scrollStyle = scrolled ? styles.scrolled : '';

  return (
    <header className={`${styles.header} ${scrollStyle}`}>
      <Image src={logo} alt="" width={400} height={64} className={styles.logo} />
      <div className={styles.header_links}>
        <Link href="/about">About</Link>
        <Link href="/method">Method</Link>
        <Link href="/teachers">Teachers</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/blog">Blog</Link> {/* <---- Might not need this */}
        <Link href="/browse">
          <button className={styles.start_button}>START LEARNING</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
