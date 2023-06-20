import React from "react";
import Head from "next/head";
import styles from "../styles/studioHome.module.css";



const studioHome = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>AFH ONLINE</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <div className={styles.title}> This is the Paint Page </div>

        </div >
    );
};

export default studioHome;
