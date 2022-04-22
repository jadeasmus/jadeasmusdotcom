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
          {`
            url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap')
          `}
          ;
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

      <div className={styles.contact}>
        <a href="mailto:hi@jadeasmus.com" title="Contact me">
          <svg
            className={styles.mail}
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
          >
            <g>
              <g>
                <path
                  d="M503.83,78.979H8.17c-4.513,0-8.17,3.658-8.17,8.17v337.702c0,4.512,3.657,8.17,8.17,8.17h495.66
			c4.513,0,8.17-3.658,8.17-8.17V87.149C512,82.637,508.343,78.979,503.83,78.979z M495.66,416.681H16.34V95.319H495.66V416.681z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M473.351,386.123L330.108,256l143.24-130.123c3.34-3.034,3.588-8.201,0.555-11.541c-3.035-3.34-8.202-3.586-11.542-0.553
			L256,301.246L49.642,113.786c-3.338-3.033-8.506-2.788-11.542,0.553c-3.034,3.34-2.787,8.507,0.554,11.541L181.892,256
			L38.655,386.12c-3.34,3.034-3.588,8.201-0.553,11.541c1.612,1.775,3.828,2.677,6.05,2.677c1.961,0,3.926-0.702,5.491-2.123
			l144.4-131.177l56.464,51.293c1.558,1.415,3.525,2.123,5.494,2.123c1.968,0,3.936-0.707,5.494-2.123l56.465-51.294
			l144.404,131.181c1.565,1.422,3.531,2.123,5.491,2.123c2.222,0,4.437-0.902,6.05-2.677
			C476.939,394.324,476.692,389.157,473.351,386.123z"
                />
              </g>
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Home;
