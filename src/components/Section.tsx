import React, { FC, PropsWithChildren } from "react";

import styles from "../styles/Resources.module.css";

interface SectionProps {
  size: number;
  gray?: boolean;
}

const Section: FC<PropsWithChildren<SectionProps>> = ({ size, gray, children }) => {
  const sizeStyle = styles[`section_${size}`];
  const grayStyle = gray ? styles.gray_bg : "";
  return (
    <section className={grayStyle}>
      <div className={`${styles.container} ${sizeStyle}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
