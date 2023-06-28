import React, { useState, useRef } from "react";
import Head from "next/head";
import styles from "../styles/lessonPage.module.css";
import Image from 'next/image';


const lessonPage: React.FC = () => {

    const [showSideMenu, setShowSideMenu] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const videoRef = useRef(null);

    const toggleSideMenu = () => {
        setShowSideMenu(!showSideMenu);
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
                            <div className={styles.dropdownSection}>
                                <div className={styles.dropdownTitle}>Lesson 1</div>
                                <div className={styles.dropdownContent}>
                                    <div>Section 1</div>
                                    <div>Section 2</div>
                                    <div>Section 3</div>
                                </div>
                            </div>
                            <div className={styles.dropdownSection}>
                                <div className={styles.dropdownTitle}>Lesson 2</div>
                                <div className={styles.dropdownContent}>
                                    <div>Section 1</div>
                                    <div>Section 2</div>
                                    <div>Section 3</div>
                                </div>
                            </div>
                            <div className={styles.dropdownSection}>
                                <div className={styles.dropdownTitle}>Lesson 3</div>
                                <div className={styles.dropdownContent}>
                                    <div>Section 1</div>
                                    <div>Section 2</div>
                                    <div>Section 3</div>
                                </div>
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
