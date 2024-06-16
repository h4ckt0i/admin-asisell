import { forwardRef } from "react";
import clsx from "clsx";
import Select from "react-select";

import styles from "./selectionInput.module.scss";

const SelectionInput = forwardRef(
  (
    {
      className,
      title,
      options,
      placeholder,
      titleStyles,
      isClearable = true,
      selectInputStyles,
      defaultInputValue,
      ...props
    },
    ref
  ) => {
    return (
      <div className={clsx(styles.container, className)}>
        <span className={clsx(styles.title, titleStyles)}>{title}</span>
        <Select
          ref={ref}
          className={styles.Select}
          placeholder={placeholder}
          options={options}
          styles={selectInputStyles}
          defaultInputValue={defaultInputValue}
          getOptionValue={(option) => option.label}
          isClearable={isClearable}
          isSearchable={false}
          {...props}
        />
      </div>
    );
  }
);

export default SelectionInput;
