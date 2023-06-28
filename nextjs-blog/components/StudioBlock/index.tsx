import React from "react";
import styles from "./styles.module.css";

interface StudioBlockProps {
  name: string;
  color: string;
  slug: string;
}

const StudioBlock: React.FC<StudioBlockProps> = ({
  name,
  color,
  slug
}) => {
  const blockStyle = { "--color": color } as React.CSSProperties;
  return (
    <a href={slug} className={styles.Block} style={blockStyle}>
      <div className={styles.Inner}>{name}</div>
    </a>
  );
};

export default StudioBlock;
