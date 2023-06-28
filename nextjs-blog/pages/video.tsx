import React from "react";
import StudioHome from "../components/StudioHome";
import MentorCard from "../components/MentorCard";
import LessonCard from "../components/LessonCard";
import styles from "../styles/studioHome.module.css";
import Image from 'next/image';




const VideoHome: React.FC = () => {
    return (
        <div className={styles.container}>

            <StudioHome
                studio={"Videography"}
                description={"a field encompassing art, digital product design, digital media or an advertising and media made with a software-based, electronic and/or data-driven engine."}
            />

            <div className={styles.subheader}> Meet the Mentors </div>
            <div className={styles.mentorCards}>
                <MentorCard
                    first="Handy"
                    last="Dorceus"
                    role="Coding Director"
                    headshot="/images/profile.png"
                />
                <MentorCard
                    first="Trevor"
                    last="Ward"
                    role="Animation Director"
                    headshot="/images/profile.png"

                />

                <MentorCard
                    first="Jamie"
                    last="De Los Santos"
                    role="Web Dev Assistant Mentor"
                    headshot="/images/profile.png"
                />

                <MentorCard
                    first="Luke"
                    last="Chen"
                    role="User Design Assitant Mentor"
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
                    link='lessonPage'
                    studiochip="Graphic Design"
                    title="Doodle-to-Vector"
                    author="Mikey Guderama"
                    caption="Unleash your inner doodler and learn how to transform your sketches into vibrant and scalable vector graphics."
                />
                <LessonCard
                    link='lessonPage'
                    studiochip="Graphic Design"
                    title="Doodle-to-Vector"
                    author="Mikey Guderama"
                    caption="Unleash your inner doodler and learn how to transform your sketches into vibrant and scalable vector graphics."
                />
                <LessonCard
                    link='lessonPage'
                    studiochip="Graphic Design"
                    title="Doodle-to-Vector"
                    author="Mikey Guderama"
                    caption="Unleash your inner doodler and learn how to transform your sketches into vibrant and scalable vector graphics."
                />
                <LessonCard
                    link='lessonPage'
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

export default VideoHome;
