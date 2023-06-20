import React from "react";
import Head from "next/head";
import styles from "../styles/studioHome.module.css";



const studioHome = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>AFH ONLINE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.hero}>
        <div className={styles.title}> Graphic Design </div>
        <div className={styles.description}>Step into our vibrant graphic design studio, where creativity thrives and experimentation knows no bounds. With 25 years of experience, we've mastered the art of crafting visual stories that make brands shine, from logos to sneakers and everything in between. Get ready to embrace your inner designer and start creating jaw-dropping visuals!</div>
      </div>


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
    </div >
  );
};

export default studioHome;
