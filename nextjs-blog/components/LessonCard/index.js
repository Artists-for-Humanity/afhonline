import styles from "./styles.module.css";

const LessonCard = ({ image, studiochip, title, author, caption }) => {
    return (
        // <div className={styles.Block} style={{ "--color": color }}>
        //     <div className={styles.Inner}>{name}</div>
        // </div>
        <div className={styles.lessonCard}>
            <div className={styles.previewImage}></div>
            <div className={styles.cardInfo}>
                <div className={styles.studioChip}>{studiochip}</div>
                <div className={styles.cardTitle}> {title}</div>
                <div className={styles.cardAuthor}>By {author}</div>
                <div className={styles.cardDescription}> {caption} </div>
            </div>
        </div>
    );
};

export default LessonCard;
