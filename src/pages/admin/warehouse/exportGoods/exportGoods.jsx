import { useState, useEffect } from "react";
import clsx from "clsx";
import MenuBar from "~/components/menuBar/menuBar";
import InvoicesList from "./wholesale/invoicesList/invoicesList";
import ExportedInvoice from "./wholesale/exportedInvoice/exportedInvoice";
import InvoicesSubWarehouseList from "./subWarehouse/invoicesList/invoicesList";
import ExportedSubWarehouseInvoice from "./subWarehouse/exportedInvoice/exportedInvoice";
import { tabs } from "./index";
import { setDocumentTitle } from "~/utils/common";

import styles from "./exportGoods.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function ExportGoods() {
  const [title, setTitle] = useState(tabs[0].title);

  useEffect(() => {
    setDocumentTitle("Quản lý kho - Admin");
  }, []);

  return (
    <div className={clsx(generalStyles.rightSideContainer, styles.container)}>
      <span className={clsx(generalStyles.rightSideTitle)}>
        Xuất hàng - Quản lý kho
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
          {title === tabs[0].title && <InvoicesList />}
          {title === tabs[1].title && <ExportedInvoice />}
          {title === tabs[2].title && <InvoicesSubWarehouseList />}
          {title === tabs[3].title && <ExportedSubWarehouseInvoice />}
        </div>
      </div>
    </div>
  );
}

export default ExportGoods;
