import { useEffect } from "react";
import clsx from "clsx";
import BriefInfo from "./components/briefInfo/briefInfo";
import ImportAndExportGoods from "./components/importAndExportGoods/importAndExportGoods";
import MostImportedProducts from "./components/mostImportedProducts/mostImportedProducts";
import ExportedGoodsStatus from "./components/exportedGoodsStatus/exportedGoodsStatus";
import ExportGoods from "./components/exportGoods/exportGoods";
import { setDocumentTitle } from "~/utils/common";

import styles from "./dashboard.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function Dashboard() {
  useEffect(() => {
    setDocumentTitle("Quản lý kho - Admin");
  }, []);

  return (
    <div className={clsx(generalStyles.rightSideContainer, styles.container)}>
      <span className={clsx(generalStyles.rightSideTitle)}>
        Dashboard - Quản lý kho
      </span>
      <div className={styles.content}>
        <BriefInfo />
        <div className={styles.partTwo}>
          <ImportAndExportGoods />
          <MostImportedProducts />
        </div>
        <ExportedGoodsStatus />
        <ExportGoods className={styles.exportGoods} />
      </div>
    </div>
  );
}

export default Dashboard;
