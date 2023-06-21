import React from "react";
import StudioHome from "../components/StudioHome";
import MentorCard from "../components/MentorCard";
import LessonCard from "../components/LessonCard";
import styles from "../styles/studioHome.module.css";
import Image from 'next/image';




const graphicsHome = () => {
  return (
    <div className={styles.container}>

      <StudioHome
        studio={"Graphic Design"}
        description={"Step into our vibrant graphic design studio, where creativity thrives and experimentation knows no bounds. With 25 years of experience, we've mastered the art of crafting visual stories that make brands shine, from logos to sneakers and everything in between. Get ready to embrace your inner designer and start creating jaw-dropping visuals!"}
      />

      <div className={styles.subheader}> Meet the Mentors </div>
      <div className={styles.mentorCards}>
        <MentorCard
          first="Mikey"
          last="Guderama"
          role="Lead Graphic Designer"
          headshot="/images/profile.png"
        />
        <MentorCard
          first="Mikey"
          last="Guderama"
          role="Lead Graphic Designer"
          headshot="/images/profile.png"

        />

        <MentorCard
          first="Mikey"
          last="Guderama"
          role="Lead Graphic Designer"
          headshot="/images/profile.png"
        />

        <Image
          src="/images/forwardArrow.png"
          width={50}
          height={50}
          alt="Forward Arrow"
          className={styles.arrow}
        />
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

export default graphicsHome;
