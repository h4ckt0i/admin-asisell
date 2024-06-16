import { useEffect } from "react";
import clsx from "clsx";
import OrderTable from "~/components/table/orderTable/orderTable";
import BlockSection from "../statistic/components/blockSection/blockSection";
import YearlyRevenue from "../statistic/components/yearlyRevenue/yearlyRevenue";
import MostSoldProducts from "../statistic/components/mostSoldProducts/mostSoldProducts";
import { setDocumentTitle } from "~/utils/common";

import styles from "./dashboard.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function Dashboard() {
  useEffect(() => {
    setDocumentTitle("Dashboard - Admin");
  }, []);

  return (
    <div className={clsx(generalStyles.rightSideContainer, styles.container)}>
      <span className={clsx(generalStyles.rightSideTitle)}>Dashboard</span>
      <div className={styles.content}>
        <BlockSection />
        <div className={styles.chartAndProgress}>
          <YearlyRevenue />
          <MostSoldProducts />
        </div>
        <div
          className={clsx(
            generalStyles.rightSideSection,
            styles.tableContainer
          )}
        >
          <span className={generalStyles.rightSideSubTitle}>
            Đơn hàng gần đây
          </span>
          <OrderTable className={styles.table} isAction={false} limit={10} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
