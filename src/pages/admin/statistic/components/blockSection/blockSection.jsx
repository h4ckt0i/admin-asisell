import clsx from "clsx";
import MonthlyRevenue from "./monthlyRevenue/monthlyRevenue";
import TotalMonthlyOrders from "./totalMonthlyOrders/totalMonthlyOrders";
import TotalRevenue from "./totalRevenue/totalRevenue";

import styles from "./blockSection.module.scss";

function BlockSection({ className }) {
  return (
    <div className={clsx(styles.container, className)}>
      <MonthlyRevenue className={styles.block} />
      <TotalMonthlyOrders className={styles.block} />
      <TotalRevenue className={styles.block} />
    </div>
  );
}

export default BlockSection;
