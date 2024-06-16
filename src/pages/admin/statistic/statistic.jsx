import { useEffect } from "react";
import clsx from "clsx";
import BlockSection from "./components/blockSection/blockSection";
import YearlyRevenue from "./components/yearlyRevenue/yearlyRevenue";
import MostSoldProducts from "./components/mostSoldProducts/mostSoldProducts";
import TodaySales from "./components/todaySales/todaySales";
import TargetChart from "./components/targetChart/targetChart";
import CustomerByLocation from "./components/customerByLocation/customerByLocation";
import TargetRevenue from "./components/targetRevenue/targetRevenue";
import Members from "./components/members/members";
import { setDocumentTitle } from "~/utils/common";

import styles from "./statistic.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function Statistic() {
  useEffect(() => {
    setDocumentTitle("Phân tích - Admin");
  }, []);

  return (
    <div className={clsx(generalStyles.rightSideContainer, styles.container)}>
      <span className={clsx(generalStyles.rightSideTitle)}>Phân tích</span>
      <div className={styles.content}>
        <BlockSection />
        <div className={styles.partTwo}>
          <YearlyRevenue />
          <MostSoldProducts />
        </div>
        <div className={styles.partThree}>
          <TodaySales className={styles.monthlySales} />
          <TargetRevenue className={styles.target} />
        </div>
        <div className={styles.partFour}>
          <TargetChart className={styles.partFourChild} />
          <CustomerByLocation className={styles.partFourChild} />
          <Members className={styles.partFourChild} />
        </div>
      </div>
    </div>
  );
}

export default Statistic;
