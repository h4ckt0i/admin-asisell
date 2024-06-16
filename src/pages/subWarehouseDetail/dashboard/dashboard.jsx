import BriefInfo from "./components/briefInfo/briefInfo";
import ImportAndExportGoods from "./components/importAndExportGoods/importAndExportGoods";
import MostImportedProducts from "./components/mostImportedProducts/mostImportedProducts";
import ExportedGoodsStatus from "./components/exportedGoodsStatus/exportedGoodsStatus";
import Members from "./components/members/members";
import WarehouseInfo from "./components/warehouseInfo/warehouseInfo";

import styles from "./dashboard.module.scss";

function Dashboard({ subWarehouse }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <BriefInfo subWarehouseInfo={subWarehouse} />
        <div className={styles.partTwo}>
          <ImportAndExportGoods subWarehouseInfo={subWarehouse} />
          <MostImportedProducts subWarehouseInfo={subWarehouse} />
        </div>
        <ExportedGoodsStatus subWarehouseInfo={subWarehouse} />
        <div className={styles.partFour}>
          <Members className={styles.members} subWarehouseInfo={subWarehouse} />
          <WarehouseInfo
            className={styles.warehouseInfo}
            subWarehouseInfo={subWarehouse}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
