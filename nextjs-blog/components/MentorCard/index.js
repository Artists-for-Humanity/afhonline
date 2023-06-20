import styles from "./styles.module.css";

const MentorCard = ({ first, last, role, headshot }) => {
    return (
        <div className={styles.card}>
            <div className={styles.headshot}></div>
            <div className={styles.mentorInfo}>
                <div className={styles.name}>
                    <div>{first}</div>
                    <div>{last}</div>
                </div>
                <div className={styles.role}>{role} </div>
            </div>

        </div>
    );
};

export default MentorCard;
