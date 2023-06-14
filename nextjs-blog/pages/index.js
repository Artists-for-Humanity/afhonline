import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>AFH ONLINE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.hero}>
        <div className={styles.heroContent}>

          {/* <img className="sticker" src="/path/to/sticker-image.png" alt="Sticker" /> */}

          <h1 className={styles.title}>
            <div>
              Welcome to</div> <div> AFH Online</div>
          </h1>
          <p className={styles.description}>
            Artists For Humanity’s online community build on 32 years of mentoring experience.
          </p>
          <button className={styles.button}>
            <div className={styles.buttontext}>Start Creating</div>
          </button>
        </div>
      </div >

      <div className={styles.subheader}> AFH Online expands the AFH mission of empowering teens to succeed in the creative industry! Ready to become a creator?</div>
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
          font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
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

export default Home;
