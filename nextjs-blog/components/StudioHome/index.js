import React from "react";
import Head from "next/head";
import styles from "./styles.module.css";
import MentorCard from "../MentorCard";
import LessonCard from "../LessonCard";



const studioHome = ({ studio, description }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>AFH ONLINE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.hero}>
        <div className={styles.title}> {studio} </div>
        <div className={styles.description}> {description} </div>
      </div>


      <div className={styles.subheader}> Meet the Mentors </div>
      <div className={styles.mentorCards}>
        <MentorCard
          first="Mikey"
          last="Guderama"
          role="Lead Graphic Designer"
        />
        <MentorCard
          first="Mikey"
          last="Guderama"
          role="Lead Graphic Designer"
        />

        <MentorCard
          first="Mikey"
          last="Guderama"
          role="Lead Graphic Designer"
        />
        <div className={styles.forwardButton}>
          <img src="images/forwardArrow.png"></img>
        </div>
      </div>

      <div className={styles.workshop}> Our Workshops </div>

      <div className={styles.lessonCards}>
        <LessonCard
          studiochip="Graphic Design"
          title="Doodle-to-Vector"
          author="Mikey Guderama"
          caption="Unleash your inner doodler and learn how to transform your sketches into vibrant and scalable vector graphics."
        />
        <LessonCard
          studiochip="Graphic Design"
          title="Doodle-to-Vector"
          author="Mikey Guderama"
          caption="Unleash your inner doodler and learn how to transform your sketches into vibrant and scalable vector graphics."
        />
        <LessonCard
          studiochip="Graphic Design"
          title="Doodle-to-Vector"
          author="Mikey Guderama"
          caption="Unleash your inner doodler and learn how to transform your sketches into vibrant and scalable vector graphics."
        />
        <LessonCard
          studiochip="Graphic Design"
          title="Doodle-to-Vector"
          author="Mikey Guderama"
          caption="Unleash your inner doodler and learn how to transform your sketches into vibrant and scalable vector graphics."
        />


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
