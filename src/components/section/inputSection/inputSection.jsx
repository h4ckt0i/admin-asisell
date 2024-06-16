import { forwardRef } from "react";
import clsx from "clsx";
import Input from "~/components/input/input";
import PenIcon from "~/assets/icons/penIcon";

import styles from "./inputSection.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

const InputSection = forwardRef(
  (
    {
      className,
      inputStyles,
      title,
      type,
      placeholder,
      value,
      setState = () => {},
      children,
      rightChildren,
      onClickRightIcon,
      isDisabled = false,
      defaultDisabled = false,
    },
    ref
  ) => {
    return (
      <div className={clsx(generalStyles.rightSideInputSection, className)}>
        <span className={generalStyles.rightSideSubTitle}>{title}</span>
        <Input
          className={clsx(
            generalStyles.rightSideInput,
            defaultDisabled && styles.disabled,
            inputStyles
          )}
          ref={ref}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setState(e.target.value)}
          rightChildren={
            rightChildren ||
            (!defaultDisabled && <PenIcon className={generalStyles.icon} />)
          }
          onClickRightIcon={onClickRightIcon}
          isDisabled={isDisabled || defaultDisabled}
        >
          {children}
        </Input>
      </div>
    );
  }
);

export default InputSection;
