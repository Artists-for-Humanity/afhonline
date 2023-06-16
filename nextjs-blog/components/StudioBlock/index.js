import styles from "./styles.module.css";

const StudioBlock = ({ name, color }) => {
  return (
    <div className={styles.Block} style={{ "--color": color }}>
      <div className={styles.Inner}>{name}</div>
    </div>
  );
};

export default StudioBlock;
