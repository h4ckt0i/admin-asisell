import { useEffect } from "react";
import clsx from "clsx";
import Filter from "../components/filter/filter";
import BriefInfo from "../components/briefInfo/briefInfo";
import PerformanceChart from "../components/performanceChart/performanceChart";
import PromotionTable from "../components/promotionTable/promotionTable";
import { setDocumentTitle } from "~/utils/common";

import styles from "./list.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function List() {
  useEffect(() => {
    setDocumentTitle("Khuyến mãi - Admin");
  }, []);

  return (
    <div className={clsx(generalStyles.rightSideContainer, styles.container)}>
      <span className={clsx(generalStyles.rightSideTitle)}>
        Danh sách - Khuyến mãi
      </span>
      <div className={styles.content}>
        <BriefInfo className={styles.briefInfo} />
        <div className={styles.partTwo}>
          <Filter className={generalStyles.filter} />
          <PerformanceChart className={generalStyles.lineChart} />
        </div>
        <PromotionTable className={styles.table} />
      </div>
    </div>
  );
}

export default List;
