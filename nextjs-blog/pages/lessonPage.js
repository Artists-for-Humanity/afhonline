import React from "react";
import Head from "next/head";
import styles from "../styles/lessonPage.module.css";
// import StudioGrid from "../components/StudioGrid";
// import LessonCard from "../components/LessonCard";
// import Image from 'next/image';


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
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/VIDEO_ID"
                    title="Lesson Video"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </div>
            <div>
                <img src="play-button.png" alt="Play" />
                <div>
                    <img src="volume-button.png" alt="Volume" />
                    <img src="fullscreen-button.png" alt="Fullscreen" />
                </div>
            </div>
            <hr />
            <div>
                <p>Description</p>
                <button>Button 1</button>
                <button>Button 2</button>
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
