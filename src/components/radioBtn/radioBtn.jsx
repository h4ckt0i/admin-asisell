import clsx from "clsx";

import styles from "./radioBtn.module.scss";

function RadioBtn({
  className,
  titleStyles,
  isChecked,
  title,
  onChange,
  isDisabled,
}) {
  return (
    <div className={clsx(styles.container, className)}>
      <input
        type="radio"
        checked={isChecked}
        className={styles.input}
        onChange={onChange}
        disabled={isDisabled}
      />
      <span className={clsx(styles.title, titleStyles)}>{title}</span>
    </div>
  );
}

export default RadioBtn;
