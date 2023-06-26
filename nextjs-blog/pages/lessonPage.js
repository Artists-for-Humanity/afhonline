import React from "react";
import Head from "next/head";
import styles from "../styles/lessonPage.module.css";
// import StudioGrid from "../components/StudioGrid";
// import LessonCard from "../components/LessonCard";
import Image from 'next/image';


const lessonPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>AFH ONLINE</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.title}>Doodles - to - Vector</div>
            <hr />
            <div>
                <iframe width="100%" height="1000px" src="https://www.youtube.com/embed/rfscVS0vtbw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div>
                {/* <img src="play-button.png" alt="Play" />
                <div>
                    <img src="volume-button.png" alt="Volume" />
                    <img src="fullscreen-button.png" alt="Fullscreen" />
                </div> */}
            </div>
            <hr />
            <div>
                <div className={styles.lessonDescription}>
                    <div className={styles.title}> 2. Why the doodle? </div>
                    <p className={styles.description}>Welcome to 'Doodle-to-Vector,' an exciting project where
                        your doodles come to life in the digital world! Join us as we explore the magical world of transforming your hand-drawn creations into stunning and scalable vector graphics.</p>

                    <div className={styles.buttons}>
                        <div className={styles.button}>
                            <Image></Image>
                            <div className={styles.buttonText}> Starte Files </div>
                        </div>
                        <div className={styles.button}>
                            <Image></Image>
                            <div className={styles.buttonText}> Examples </div>
                        </div>
                    </div>

                </div>
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

export default lessonPage;
