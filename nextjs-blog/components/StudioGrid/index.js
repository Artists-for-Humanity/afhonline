import StudioBlock from "../StudioBlock";
import styles from "./styles.module.css";

const StudioGrid = ({ studios }) => {
  return (
    <div className={styles.Container}>
      {studios.map((studio) => (
        <StudioBlock key={studio.slug} {...studio} />
      ))}
    </div>
  );
};

export default StudioGrid;
