import clsx from "clsx";

import styles from "./infoSection.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function InfoSection({ title, text, subText, className }) {
  return (
    <div
      className={clsx(
        generalStyles.rightSideSection,
        styles.container,
        className
      )}
    >
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>{text}</div>
      <div className={styles.subText}>{subText}</div>
    </div>
  );
}

export default InfoSection;
