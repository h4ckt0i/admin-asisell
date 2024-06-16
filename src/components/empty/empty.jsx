import clsx from "clsx";
import Button from "../button/button";

import styles from "./empty.module.scss";

function Empty({ className, title, btnText, btnHref, btnStyles }) {
  return (
    <div className={clsx(styles.container, className)}>
      <span className={styles.title}>{title}</span>
      {btnText && (
        <Button
          className={clsx(styles.btn, btnStyles)}
          href={btnHref}
          textBtn={btnText}
        />
      )}
    </div>
  );
}

export default Empty;
