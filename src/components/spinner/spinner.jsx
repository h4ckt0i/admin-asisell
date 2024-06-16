import clsx from "clsx";

import styles from "./spinner.module.scss";

function Spinner({ className }) {
  return (
    <div className={clsx(styles.container, className)}>
      <i className="fa-solid fa-spinner"></i>
    </div>
  );
}

export default Spinner;
