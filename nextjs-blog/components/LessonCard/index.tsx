import React from "react";
import styles from "./styles.module.css";

interface LessonCardProps {
    image?: string;
    studiochip: string;
    title: string;
    author: string;
    caption: string;
    link: string;
}

const LessonCard: React.FC<LessonCardProps> = ({
    image,
    studiochip,
    title,
    author,
    caption,
    link
}) => {
    return (
        <a href={link} className={styles.lessonCard}>
            <div className={styles.previewImage}></div>
            <div className={styles.cardInfo}>
                <div className={styles.studioChip}>{studiochip}</div>
                <div className={styles.cardTitle}> {title}</div>
                <div className={styles.cardAuthor}>By {author}</div>
                <div className={styles.cardDescription}> {caption} </div>
            </div>
        </a>
    );
};

export default LessonCard;
