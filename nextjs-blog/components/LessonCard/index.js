import styles from "./styles.module.css";

const LessonCard = ({ image, studiochip, title, author, caption, link }) => {
    return (
        // <div className={styles.Block} style={{ "--color": color }}>
        //     <div className={styles.Inner}>{name}</div>
        // </div>
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
