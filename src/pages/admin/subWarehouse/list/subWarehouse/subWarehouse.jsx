import { useState, useEffect } from "react";
import clsx from "clsx";
import MenuBar from "~/components/menuBar/menuBar";
import AccountsList from "./accountsList/accountsList";
import SubWarehousesList from "./subWarehousesList/subWarehousesList";
import { subTabs } from "../index";

import styles from "./subWarehouse.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function SubWarehouse() {
  const [title, setTitle] = useState(subTabs[0].title);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <MenuBar
          menu={subTabs}
          activeStyles={generalStyles.tabsItemActivated}
          itemStyles={generalStyles.tabsItem}
          listStyles={clsx(generalStyles.tabsList, styles.list)}
          setTitle={setTitle}
        />
        <div className={generalStyles.mainContent}>
          {title === subTabs[0].title && <SubWarehousesList />}
          {title === subTabs[1].title && <AccountsList />}
        </div>
      </div>
    </div>
  );
}

export default SubWarehouse;
