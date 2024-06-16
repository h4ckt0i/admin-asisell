import { forwardRef } from "react";
import clsx from "clsx";
import SelectionInput from "~/components/selection/selectionInput/selectionInput";

import generalStyles from "~/styles/generalStyle.module.scss";

const SelectSection = forwardRef(
  (
    {
      className,
      title,
      placeholder,
      options,
      setState,
      isMulti,
      isClearable,
      isDisabled,
      defaultInputValue,
      ...props
    },
    ref
  ) => {
    const selectInputStyles = {
      control: (styles, state) => ({
        ...styles,
        fontSize: "1.5rem",
        outline: "none",
        boxShadow: "0 !important",
        borderRadius: "1rem",
      }),
      menu: (styles, state) => ({
        ...styles,
        zIndex: "20",
      }),
    };

    return (
      <div
        className={clsx(
          generalStyles.rightSideInputSection,

          className
        )}
      >
        <span className={generalStyles.rightSideSubTitle}>{title}</span>
        <SelectionInput
          ref={ref}
          selectInputStyles={selectInputStyles}
          placeholder={placeholder}
          options={options}
          onChange={(e) => setState(e)}
          isMulti={isMulti}
          isClearable={isClearable}
          isDisabled={isDisabled}
          defaultInputValue={defaultInputValue}
          {...props}
        />
      </div>
    );
  }
);

export default SelectSection;
