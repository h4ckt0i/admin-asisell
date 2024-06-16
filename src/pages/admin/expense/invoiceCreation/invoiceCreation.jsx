import { useState, useEffect } from "react";
import clsx from "clsx";
import MenuBar from "~/components/menuBar/menuBar";
import ExpenseCreation from "./expenseCreation/expenseCreation";
import ServiceSupplierCreation from "./serviceSupplierCreation/serviceSupplierCreation";
import CategoryCreation from "./categoryCreation/categoryCreation";
import { tabs } from "./index";
import { setDocumentTitle } from "~/utils/common";

import styles from "./invoiceCreation.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function InvoiceCreation() {
  const [title, setTitle] = useState(tabs[0].title);

  useEffect(() => {
    setDocumentTitle("Khoản chi - Admin");
  }, []);

  return (
    <div className={clsx(generalStyles.rightSideContainer, styles.container)}>
      <span className={clsx(generalStyles.rightSideTitle)}>
        Thêm hóa đơn - Khoản chi
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
          {title === tabs[0].title && <CategoryCreation />}
          {title === tabs[1].title && <ServiceSupplierCreation />}
          {title === tabs[2].title && <ExpenseCreation />}
        </div>
      </div>
    </div>
  );
}

export default InvoiceCreation;
