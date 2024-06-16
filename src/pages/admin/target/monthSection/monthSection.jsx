import { useState, useEffect } from "react";
import clsx from "clsx";
import InputSection from "~/components/section/inputSection/inputSection";

import styles from "./monthSection.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function MonthSection({ setMonthlyTarget, isDisabled, className }) {
  const [targets, setTargets] = useState("");

  const convertStringToArray = (string) => {
    return string.trim().split(" ");
  };

  const handleInput = (value) => {
    const targetsArray = convertStringToArray(value);
    if (targetsArray.length <= 12) {
      setTargets(value);
    }
  };

  useEffect(() => {
    if (targets) {
      const targetsArray = convertStringToArray(targets);
      const monthlyTarget = targetsArray.map((target, index) => ({
        month: index + 1,
        revenue: +target,
      }));
      setMonthlyTarget(monthlyTarget);
    }
  }, [targets]);

  return (
    <div className={clsx(styles.container, className)}>
      <span className={styles.targetText}>
        * Mỗi mục tiêu tương ứng với 1 tháng và cách nhau bằng 1 khoảng trắng
        (nhập đủ 12 tháng, nếu tháng nào không có mục tiêu thì để bằng 0)
      </span>
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Mục tiêu năm"
        placeholder="Nhập mục tiêu năm"
        value={targets}
        setState={handleInput}
        isDisabled={isDisabled}
      />
    </div>
  );
}

export default MonthSection;
