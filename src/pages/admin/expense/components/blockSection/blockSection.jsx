import clsx from "clsx";
import TotalExpense from "./totalExpense/totalExpense";
import PaidExpense from "./paidExpense/paidExpense";
import UnpaidExpense from "./unpaidExpense/unpaidExpense";

import styles from "./blockSection.module.scss";

function BlockSection({ monthlyTotalList, className }) {
  return (
    <div className={clsx(styles.container, className)}>
      <TotalExpense
        className={styles.block}
        total={monthlyTotalList.monthlyTotal}
      />
      <PaidExpense
        className={styles.block}
        total={monthlyTotalList.monthlyPaidTotal}
      />
      <UnpaidExpense
        className={styles.block}
        total={monthlyTotalList.monthlyUnPaidTotal}
      />
    </div>
  );
}

export default BlockSection;
