import { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import TotalBonus from "./totalBonus/totalBonus";
import TotalSalary from "./totalSalary/totalSalary";
import { fetchApi } from "~/utils/common";
import * as salarySlice from "~/store/subWarehouseDetail/slice/salarySlice";

import styles from "./blockSection.module.scss";

function BlockSection({ subWarehouseInfo, className }) {
  const [totalBonus, setTotalBonus] = useState(0);
  const [totalSalaries, setTotalSalaries] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    const subWarehouseId = subWarehouseInfo._id;

    const getTotalBonus = () =>
      fetchApi(salarySlice.getTotalBonus(subWarehouseId), dispatch);
    const getTotalSalaries = () =>
      fetchApi(salarySlice.getTotalSalaries(subWarehouseId), dispatch);

    if (subWarehouseId) {
      getTotalSalaries().then((result) =>
        setTotalSalaries(result.total_salaries)
      );

      getTotalBonus().then((result) => setTotalBonus(result.total_bonuses));
    }
  }, [subWarehouseInfo]);

  return (
    <div className={clsx(styles.container, className)}>
      <TotalBonus className={styles.block} totalBonus={totalBonus} />
      <TotalSalary className={styles.block} totalSalaries={totalSalaries} />
    </div>
  );
}

export default BlockSection;
