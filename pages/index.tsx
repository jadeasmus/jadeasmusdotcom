import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.main}>
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
        </div>
      </div>
    </Layout>
  );
};

export default Home;
