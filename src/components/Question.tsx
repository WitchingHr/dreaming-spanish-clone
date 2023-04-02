import React, { FC, PropsWithChildren, useState } from "react";

import styles from "../styles/About.module.css";

interface QuestionProps {
	question: string;
}

const Question: FC<PropsWithChildren<QuestionProps>> = ({
	question,
	children,
}) => {
	const [open, setOpen] = useState(false);
	const innerStyle = open ? {maxHeight: "600px"} : {maxHeight: "0"}
  const barStyle = open ? styles.bar_open : "";

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<div>
			<div className={styles.faq_title} onClick={handleClick}>
				<div className={styles.faq_question}>{question}</div>
				<div className={styles.state}>
					<div className={styles.state_bar}></div>
					<div className={`${styles.state_bar} ${barStyle}`}></div>
				</div>
			</div>
			<div className={`${styles.faq_body}`}
      style={innerStyle}>
				<div className={styles.faq_inner}>{children}</div>
			</div>
		</div>
	);
};

export default Question;
