import { useState } from "react";
import clsx from "clsx";
import MenuBar from "~/components/menuBar/menuBar";
import MainWarehouse from "./mainWarehouse/mainWarehouse";
import WholeWarehouse from "./wholeWarehouse/wholeWarehouse";
import { tabs } from "./index";

import styles from "./goodsManagement.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function GoodsManagement() {
  const [title, setTitle] = useState(tabs[0].title);

  return (
    <div className={clsx(generalStyles.rightSideContainer, styles.container)}>
      <span className={clsx(generalStyles.rightSideTitle)}>
        Danh sách sản phẩm - Quản lý kho
      </span>
      <div className={styles.content}>
        <MenuBar
          menu={tabs}
          activeStyles={generalStyles.tabsItemActivated}
          itemStyles={generalStyles.tabsItem}
          listStyles={clsx(generalStyles.tabsList, styles.list)}
          setTitle={setTitle}
        />
        <div className={generalStyles.mainContent}>
          {title === tabs[0].title && <MainWarehouse />}
          {title === tabs[1].title && <WholeWarehouse />}
        </div>
      </div>
    </div>
  );
}

export default GoodsManagement;
