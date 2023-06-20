import styles from "./styles.module.css";

const StudioBlock = ({ name, color, slug }) => {
  return (
    <a href={slug} className={styles.Block} style={{ "--color": color }}>
      <div className={styles.Inner}>{name}</div>
    </a>
  );
};

export default StudioBlock;
