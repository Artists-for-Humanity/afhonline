import React from "react";
import Head from "next/head";
import styles from "./styles.module.css";
import Image from 'next/image';

interface studioHomeProps {
  studio: String;
  description: String;

}




const studioHome: React.FC<studioHomeProps> = ({
  studio,
  description
}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>AFH ONLINE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.hero}>
        <a href={"/"}>
          <Image
            src={"/images/logo.png"}
            width={60}
            height={60}
            alt={"Home Button"}
            className={styles.homeButton}
          />
        </a>
        <div className={styles.title}> {studio} </div>
        <div className={styles.description}> {description} </div>
      </div>

    </div >

  );
};

export default studioHome;
