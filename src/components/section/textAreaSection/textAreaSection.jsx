import { forwardRef } from "react";
import clsx from "clsx";

import styles from "./textAreaSection.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

const TextAreaSection = forwardRef(
  (
    {
      className,
      textareaStyles,
      title,
      placeholder,
      row,
      column,
      value,
      setState,
      isDisabled = false,
    },
    ref
  ) => {
    return (
      <div
        className={clsx(
          generalStyles.rightSideInputSection,
          styles.container,
          className
        )}
      >
        {title && (
          <span className={generalStyles.rightSideSubTitle}>{title}</span>
        )}
        <textarea
          className={clsx(generalStyles.rightSideInput, textareaStyles)}
          rows={row}
          column={column}
          ref={ref}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setState(e.target.value)}
          disabled={isDisabled}
        />
      </div>
    );
  }
);

export default TextAreaSection;
