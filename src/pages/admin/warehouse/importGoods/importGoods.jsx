import { useState, useEffect } from "react";
import clsx from "clsx";
import MenuBar from "~/components/menuBar/menuBar";
import ImportedInvoice from "./importedInvoice/importedInvoice";
import InvoicesList from "./invoicesList/invoicesList";
import { tabs } from "./index";
import { setDocumentTitle } from "~/utils/common";

import styles from "./importGoods.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function ImportGoods() {
  const [title, setTitle] = useState(tabs[0].title);

  useEffect(() => {
    setDocumentTitle("Quản lý kho - Admin");
  }, []);

  return (
    <div className={clsx(generalStyles.rightSideContainer, styles.container)}>
      <span className={clsx(generalStyles.rightSideTitle)}>
        Nhập hàng - Quản lý kho
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
          {title === tabs[1].title && <ImportedInvoice />}
        </div>
      </div>
    </div>
  );
}

export default ImportGoods;
