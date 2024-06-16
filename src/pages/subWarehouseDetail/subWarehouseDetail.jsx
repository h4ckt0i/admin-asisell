import { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import MenuBar from "~/components/menuBar/menuBar";
import HomeButton from "~/components/homeButton/homeButton";
import Dashboard from "./dashboard/dashboard";
import Product from "./product/product";
import Finance from "./finance/finance";
import Transportation from "./transportation/transportation";
import Employee from "./employee/employee";
import { tabs } from "./index";
import { getIdFromPathName, fetchApi, setDocumentTitle } from "~/utils/common";
import * as subWarehouseSlice from "~/store/common/slice/subWarehouseSlice";

import styles from "./subWarehouseDetail.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function SubWarehouseDetail() {
  const [title, setTitle] = useState(tabs[0].title);
  const [subWarehouse, setSubWarehouse] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    setDocumentTitle("Chi tiết kho con");

    const subWarehouseId = getIdFromPathName();

    const getSubWarehouse = () =>
      fetchApi(subWarehouseSlice.getSubWarehouseById(subWarehouseId), dispatch);

    getSubWarehouse().then((result) => setSubWarehouse(result[0]));
  }, []);

  return (
    <div className={clsx(generalStyles.generalContainer, styles.container)}>
      <div className={generalStyles.body}>
        <div className={clsx(generalStyles.content, styles.bodyContainer)}>
          <div>
            <div className={styles.header}>
              <HomeButton className={styles.warehouseSection} />
              <div className={styles.warehouseSection}>
                Mã kho: <span>{subWarehouse.code}</span>
              </div>
              <div className={styles.warehouseSection}>
                Tên kho: <span>{subWarehouse.name}</span>
              </div>
            </div>
            <div className={styles.content}>
              <MenuBar
                menu={tabs}
                activeStyles={generalStyles.tabsItemActivated}
                itemStyles={generalStyles.tabsItem}
                listStyles={clsx(generalStyles.tabsList, styles.list)}
                setTitle={setTitle}
              />
              <div
                className={clsx(generalStyles.mainContent, styles.mainContent)}
              >
                {title === tabs[0].title && (
                  <Dashboard subWarehouse={subWarehouse} />
                )}
                {title === tabs[1].title && (
                  <Product subWarehouse={subWarehouse} />
                )}
                {title === tabs[2].title && (
                  <Finance subWarehouse={subWarehouse} />
                )}
                {title === tabs[3].title && (
                  <Transportation subWarehouse={subWarehouse} />
                )}
                {title === tabs[4].title && (
                  <Employee subWarehouse={subWarehouse} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubWarehouseDetail;
