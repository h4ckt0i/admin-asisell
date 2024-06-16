import { forwardRef } from "react";
import clsx from "clsx";

import styles from "./input.module.scss";

const Input = forwardRef(
  (
    {
      className,
      srcLeftIcon,
      srcRightIcon,
      inputStyles,
      type = "text",
      placeholder,
      value,
      required = false,
      iconStyles,
      onClickRightIcon,
      children,
      rightChildren,
      isDisabled,
      onChange = () => {},
      ...inputProps
    },
    ref
  ) => {
    return (
      <div className={clsx(styles.container, className)}>
        <div className={styles.leftIconContainer}>
          {srcLeftIcon ? (
            <img
              src={srcLeftIcon}
              alt="Left Icon"
              className={clsx(styles.icon, styles.leftIcon, iconStyles)}
            />
          ) : (
            children
          )}
        </div>
        <input
          className={clsx(
            styles.input,
            inputStyles,
            required ? styles.errorBorder : null
          )}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          ref={ref}
          disabled={isDisabled}
          onWheel={(e) => e.target.blur()}
          {...inputProps}
        />
        <div className={styles.rightIconContainer} onClick={onClickRightIcon}>
          {srcRightIcon ? (
            <img
              src={srcRightIcon}
              alt="Right Icon"
              className={clsx(styles.icon, styles.rightIcon, iconStyles)}
            />
          ) : (
            rightChildren
          )}
        </div>
      </div>
    );
  }
);

export default Input;
