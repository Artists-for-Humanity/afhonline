import React from "react";
import Head from "next/head";
import styles from "./styles.module.css";

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
        <div className={styles.title}> {studio} </div>
        <div className={styles.description}> {description} </div>
      </div>

    </div >

  );
};

export default studioHome;
