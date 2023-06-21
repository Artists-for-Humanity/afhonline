import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import StudioGrid from "../components/StudioGrid";
import LessonCard from "../components/LessonCard";
import Image from 'next/image'

// const backArrow = {
//   width: '96px',
//   height: '96px',
//   border: '6px solid #000000',
//   transition: '0.3s',
//   borderRadius: '16px',
//   marginTp: '100px'
// }


const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>AFH ONLINE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            <div> Welcome to AFH Online</div>
          </h1>
          <p className={styles.description}>
            Artists For Humanity’s online community build on 32 years of
            mentoring experience.
          </p>
          <button className={styles.button}>
            <div className={styles.buttontext}>Start Creating</div>
          </button>
        </div>
      </div>
      <div className={styles.pageContent}>
        <div className={styles.blurb}>
          {" "}
          AFH Online expands the AFH mission of empowering teens to succeed in
          the creative industry! Ready to become a creator?
        </div>
        <div className={styles.subheader}> Start Creating</div>


        <div className={styles.homeScroll}>
          <div className={styles.backButton}>
            <Image
              src="/images/backArrow.png"
              width={50}
              height={50}
              alt="Back Arrow"
              className={styles.arrow}
            />
          </div>
          <LessonCard
            studiochip="Graphic Design"
            title="Doodle-to-Vector"
            author="Mikey Guderama"
            caption="Unleash your inner doodler and learn how to transform your sketches into vibrant and scalable vector graphics."
          />
          <div className={styles.forwardButton}>
            <Image
              src="/images/forwardArrow.png"
              width={50}
              height={50}
              alt="Forward Arrow"
              className={styles.arrow}
            />
          </div>
        </div>

        <div className={styles.subheader}> Create by Studio</div>

        <StudioGrid
          studios={[
            {
              slug: "graphic-design",
              name: "Graphic Design",
              color: "#008CFF",
            },
            {
              slug: "ctech",
              name: "CTech",
              color: "#FF3700",
            },
            {
              slug: "paint",
              name: "Paint",
              color: "#F7FF00",
            },
            {
              slug: "video",
              name: "Video",
              color: "#9747FF",
            },
            {
              slug: "3d-design",
              name: "3D design",
              color: "#52FF71",
            },
            {
              slug: "photo",
              name: "Photo",
              color: "#FFBC05"
            },
          ]}
        />
      </div>

      {/* <div className={styles.icon1}>
        <img src="images/afhpeep1.png"></img>
      </div> */}
      {/* <div className={styles.icon2}>
        <img src="images/afhpeep2.png"></img>
      </div>
      <div className={styles.icon3}>
        <img src="images/afhpeep3.png"></img>
      </div> */}

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI,
            Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        * {
          box-sizing: border-box;
        }

        h1,
        h2,
        p,
        ul {
          margin: 0;
        }

        ul {
          padding: 0;
          list-style: none;
        }

        button {
          padding: 0.5rem 1rem;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default Home;
