import React from "react";
import StudioBlock from "../StudioBlock";
import styles from "./styles.module.css";

interface Studio {
  name: string;
  color: string;
  slug: string
}

interface studioGridProps {
  studios: Studio[];
}

const StudioGrid: React.FC<studioGridProps> = ({ studios }) => {
  return (
    <div className={styles.Container}>
      {studios.map((studio: Studio) => (
        <StudioBlock key={studio.slug} {...studio} />
      ))}
    </div>
  );
};

export default StudioGrid;
