import clsx from "clsx";
import HomeButton from "../homeButton/homeButton";

import styles from "./detail.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function Detail({ title, children, className }) {
  return (
    <div
      className={clsx(
        generalStyles.generalContainer,
        styles.container,
        className
      )}
    >
      <div className={clsx(generalStyles.body, styles.contentContainer)}>
        <div
          className={clsx(
            generalStyles.content,
            generalStyles.section,
            styles.content
          )}
        >
          <div className={styles.header}>
            <HomeButton className={styles.homeBtn} />
            <span className={styles.bigTitle}>{title}</span>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
