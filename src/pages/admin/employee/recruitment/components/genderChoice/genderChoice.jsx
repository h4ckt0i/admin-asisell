import { useState, useEffect } from "react";
import clsx from "clsx";
import RadioBtn from "~/components/radioBtn/radioBtn";
import { genders } from "./index";

import styles from "./genderChoice.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function GenderChoice({ setGender, className, isDisabled }) {
  const [labelText, setLabelText] = useState(genders[0].name);

  const handleLabel = (value) => {
    setLabelText(value);
    setGender(value);
  };

  return (
    <div className={clsx(styles.container, className)}>
      <span className={generalStyles.rightSideSubTitle}>Giới tính</span>
      <ul className={clsx(generalStyles.list, styles.choiceContainer)}>
        {genders.map((gender) => (
          <div className={clsx(styles.choice)} key={gender.id}>
            <RadioBtn
              className={styles.input}
              isChecked={labelText === gender.name ? true : false}
              onChange={() => handleLabel(gender.name)}
              value={gender.name}
              isDisabled={isDisabled}
            />
            <span
              htmlFor={gender.name}
              className={styles.label}
              onClick={(e) => handleLabel(e.target.innerHTML)}
            >
              {gender.name}
            </span>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default GenderChoice;
