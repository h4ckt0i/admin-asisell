import { useState } from "react";
import clsx from "clsx";
import MenuBar from "~/components/menuBar/menuBar";
import SuppliersList from "./suppliersList/suppliersList";
import SupplierAddition from "./supplierAddition/supplierAddition";
import { tabs } from "./index";

import styles from "./supplier.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function Supplier() {
  const [title, setTitle] = useState(tabs[0].title);

  return (
    <div className={clsx(generalStyles.rightSideContainer, styles.container)}>
      <span className={clsx(generalStyles.rightSideTitle)}>
        Nhà cung cấp - Quản lý kho
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
          {title === tabs[0].title && <SuppliersList />}
          {title === tabs[1].title && <SupplierAddition />}
        </div>
      </div>
    </div>
  );
}

export default Supplier;
