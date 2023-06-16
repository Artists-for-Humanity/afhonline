import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import StudioGrid from "../components/StudioGrid";

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

        {/* home scroll  */}
        <div className={styles.homeScroll}>
          <div className={styles.backButton}>
            <img src="images/backArrow.png"></img>
          </div>
          <div className={styles.lessonCard}>
            <div className={styles.previewImage}></div>
            <div className={styles.cardInfo}>
              <div className={styles.studioChip}>Graphic Design</div>
              <div className={styles.cardTitle}> Doodle-to-Vector</div>
              <div className={styles.cardAuthor}>By Mikey Guderama</div>
              <div className={styles.cardDescription}>
                Unleash your inner doodler and learn how to transform your
                sketches into vibrant and scalable vector graphics.
              </div>
            </div>
          </div>
          <div className={styles.forwardButton}>
            <img src="images/forwardArrow.png"></img>
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
              color: "#FF0000",
            },
            {
              slug: "paint",
              name: "Paint",
              color: "#00FF00",
            },
            {
              slug: "video",
              name: "Video",
              color: "#DD98CE",
            },
            {
              slug: "3d-design",
              name: "3D design",
              color: "#0DDE79",
            },
            { slug: "photo", name: "Photo", color: "#008CFF" },
          ]}
        />

        {/* <div className={styles.grid}>
          <div className={styles.graphic}>
            <div className={styles.studioText}>Graphic Design</div>
          </div>
          <div className={styles.ctech}>
            <div className={styles.studioText}>CTech</div>
          </div>
          <div className={styles.paint}>
            <div className={styles.studioText}>Paint</div>
          </div>
          <div className={styles.video}>
            <div className={styles.studioText}>Video</div>
          </div>
          <div className={styles.design}>
            <div className={styles.studioText}>3D design</div>
          </div>
          <div className={styles.photo}>
            <div className={styles.studioText}>Photo</div>
          </div>
        </div> */}
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

        img {
          max-width: 100%;
          height: auto;
          border: 6px solid #000000;
          transition: 0.3s;
          border-radius: 16px;
          margin-top: 100px;
        }

        img:hover {
          box-shadow: 6px 6px 0px #000000;
          transform: translateX(-10px);
          transition: 0.3s;
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
