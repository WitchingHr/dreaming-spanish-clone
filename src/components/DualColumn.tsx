import { StaticImageData } from "next/image";
import React, { FC, PropsWithChildren } from "react";
import Image from "next/image";

import styles from "../styles/Resources.module.css";

interface DualColumnProps {
  image: StaticImageData;
  grid: number;
}

const DualColumn: FC<PropsWithChildren<DualColumnProps>> = ({ image, children, grid }) => {
  const gridStyle = styles[`grid_${grid}`];
  return (
      <div className={`${styles.layout_grid} ${gridStyle}`}>
        <div className={styles.left_col}>
          {children}
        </div>
        <div className={styles.right_col}>
          <Image src={image} alt="" className={styles.image} />
        </div>
      </div>
  );
};

export default DualColumn;
