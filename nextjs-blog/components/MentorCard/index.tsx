import styles from "./styles.module.css";
import Image from 'next/image'

interface MentorCardProps {
    first: string;
    last: string;
    role: string;
    headshot: string;
}

const MentorCard: React.FC<MentorCardProps> = ({
    first,
    last,
    role,
    headshot
}) => {
    return (
        <div className={styles.card}>
            <Image
                src={headshot}
                width={100}
                height={100}
                alt="Headshot"
                className={styles.headshot}
            />
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
