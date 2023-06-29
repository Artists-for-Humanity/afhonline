import React, { useState, useRef } from "react";
import Head from "next/head";
import styles from "../styles/lessonPage.module.css";
import Image from 'next/image';


const lessonPage: React.FC = () => {

    const [showSideMenu, setShowSideMenu] = useState(false);
    const [selectedLesson, setSelectedLesson] = useState<number | null>(null);
    const [selectedSection, setSelectedSection] = useState<number | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const videoRef = useRef(null);

    const toggleSideMenu = () => {
        setShowSideMenu(!showSideMenu);
    };

    const handleLessonClick = (lesson: number) => {
        setSelectedLesson(lesson);
        setSelectedSection(null); // Reset the selected section
    };

    const handleSectionClick = (section: number) => {
        setSelectedSection(section);
    };

    const handlePlayPause = () => {
        //will play and pause video
    };

    const handleVolume = () => {
        // will adjust volume of video
    };

    const handleFullscreen = () => {
        // will full screen video a
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>AFH ONLINE</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <div className={styles.title}>Doodles - to - Vector</div>
            <div className={styles.content}>
                <div className={styles.mainSection}>
                    <div>
                        <iframe
                            ref={videoRef}
                            width="100%"
                            height="1000px"
                            src="https://www.youtube.com/embed/rfscVS0vtbw"
                            title="YouTube video player"
                            allow=" autoplay;  encrypted-media; gyroscope;"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className={styles.controls}>
                        <button onClick={handlePlayPause}>
                            <Image
                                src={isPlaying ? "/images/pause.png" : "/images/play.png"}
                                width={50}
                                height={50}
                                alt={isPlaying ? "Pause" : "Play"}
                            />
                        </button>
                        <div>
                            <button onClick={handleVolume}>
                                <Image
                                    src="/images/volume.png"
                                    width={50}
                                    height={50}
                                    alt="Volume"
                                />
                            </button>
                            <button onClick={handleFullscreen}>
                                <Image
                                    src={isFullscreen ? "/images/exit-fullscreen.png" : "/images/fullscreen.png"}
                                    width={50}
                                    height={50}
                                    alt={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                                />
                            </button>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <div className={styles.lessonDescription}>
                            <div className={styles.title}> 2. Why the Doodle?? </div>
                            <p className={styles.description}>Welcome to 'Doodle-to-Vector,' an exciting project where
                                your doodles come to life in the digital world! Join us as we explore the magical world of transforming your hand-drawn creations into stunning and scalable vector graphics.</p>

                            <div className={styles.buttons}>
                                <div className={styles.button}>
                                    <Image
                                        src="/images/paper-clip.svg"
                                        width={50}
                                        height={50}
                                        alt="paper clip"
                                        className={styles.arrow}
                                    />
                                    <div className={styles.buttonText}> Starter Files </div>
                                </div>
                                <div className={styles.button}>
                                    <Image
                                        src="/images/paper-clip.svg"
                                        width={50}
                                        height={50}
                                        alt="paper clip"
                                        className={styles.arrow}
                                    />
                                    <div className={styles.buttonText}> Examples </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={styles.menuSection}>
                    <div className={styles.headerSection}>
                        <div className={styles.menuTitle}>Course Content</div>
                        <Image
                            src="/images/exit.svg"
                            width={60}
                            height={60}
                            alt="Exit"
                            className={styles.menuExit}
                            onClick={toggleSideMenu}
                        />
                    </div>
                    {showSideMenu && (
                        <div className={styles.dropdownMenu}>
                            {/* lesson 1 drop down */}
                            <div className={styles.dropdownSection}>
                                <div className={`${styles.dropdownTitle} ${selectedLesson === 1 && styles.selectedLesson}`} onClick={() => handleLessonClick(1)}> Lesson 1 </div>
                                {selectedLesson === 1 && (
                                    <div className={styles.dropdownContent}>
                                        <div className={`${styles.dropdownSectionItem} ${selectedSection === 1 && styles.selectedSection}`} onClick={() => handleSectionClick(1)}> Section 1 </div>
                                        <div className={`${styles.dropdownSectionItem} ${selectedSection === 2 && styles.selectedSection}`} onClick={() => handleSectionClick(2)}> Section 2 </div>
                                        <div className={`${styles.dropdownSectionItem} ${selectedSection === 3 && styles.selectedSection}`} onClick={() => handleSectionClick(3)}> Section 3 </div>
                                    </div>
                                )}
                            </div>
                            {/* lesson 2 drop down */}
                            <div className={styles.dropdownSection}>
                                <div className={`${styles.dropdownTitle} ${selectedLesson === 2 && styles.selectedLesson}`} onClick={() => handleLessonClick(2)}> Lesson 2 </div>
                                {selectedLesson === 2 && (
                                    <div className={styles.dropdownContent}>
                                        <div className={`${styles.dropdownSectionItem} ${selectedSection === 1 && styles.selectedSection}`} onClick={() => handleSectionClick(1)}> Section 1 </div>
                                        <div className={`${styles.dropdownSectionItem} ${selectedSection === 2 && styles.selectedSection}`} onClick={() => handleSectionClick(2)}> Section 2 </div>
                                        <div className={`${styles.dropdownSectionItem} ${selectedSection === 3 && styles.selectedSection}`} onClick={() => handleSectionClick(3)}> Section 3 </div>
                                    </div>
                                )}
                            </div>
                            {/* lesson 3 drop down */}
                            <div className={styles.dropdownSection}>
                                <div className={`${styles.dropdownTitle} ${selectedLesson === 3 && styles.selectedLesson}`} onClick={() => handleLessonClick(3)}> Lesson 3 </div>
                                {selectedLesson === 3 && (
                                    <div className={styles.dropdownContent}>
                                        <div className={`${styles.dropdownSectionItem} ${selectedSection === 1 && styles.selectedSection}`} onClick={() => handleSectionClick(1)}> Section 1 </div>
                                        <div className={`${styles.dropdownSectionItem} ${selectedSection === 2 && styles.selectedSection}`} onClick={() => handleSectionClick(2)}> Section 2 </div>
                                        <div className={`${styles.dropdownSectionItem} ${selectedSection === 3 && styles.selectedSection}`} onClick={() => handleSectionClick(3)}> Section 3 </div>
                                    </div>
                                )}
                            </div>
                        </div>

                    )}
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
            all: unset;
        }
      `}</style>
        </div >



    );
};

export default lessonPage;
