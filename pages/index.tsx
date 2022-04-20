import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jade</title>
        {/* [] look up what a meta tag is */}
        <meta name="jadedotcom" content="I brag about myself" />
        {/* robot light 300 */}
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
        </style>
      </Head>

      <main className={styles.main}>
        <p className={styles.name}>Jade</p>
        <p className={styles.title}>Freelance Web Developer</p>

        <div className={styles.nav}>
          <div className={styles.circle}>
            <Link href="/about">
              <a className={styles.item}>About</a>
            </Link>
            <Link href="/projects">
              <a className={styles.item}>Projects</a>
            </Link>
            <Link href="/skills">
              <a className={styles.item}>Skills</a>
            </Link>
            <Link href="/interests">
              <a className={styles.item}>Interests</a>
            </Link>
            <Link href="/writing">
              <a className={styles.item}>Writing</a>
            </Link>
            <Link href="/socials">
              <a className={styles.item}>Socials</a>
            </Link>
          </div>
        </div>
      </main>

      <div className={styles.contact}>{/* insert cute email svg */}</div>
    </div>
  );
};

export default Home;
