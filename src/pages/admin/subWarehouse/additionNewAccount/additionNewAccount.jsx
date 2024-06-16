import { useState, useEffect } from "react";
import clsx from "clsx";
import MenuBar from "~/components/menuBar/menuBar";
import MainWarehouse from "./mainWarehouse/mainWarehouse";
import SubWarehouse from "./subWarehouse/subWarehouse";
import { tabs } from "./index";
import { setDocumentTitle } from "~/utils/common";

import styles from "./additionNewAccount.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function AdditionNewAccount() {
  const [title, setTitle] = useState(tabs[0].title);

  useEffect(() => {
    setDocumentTitle("Kho tổng/con - Admin");
  }, []);

  return (
    <div className={clsx(generalStyles.rightSideContainer, styles.container)}>
      <span className={clsx(generalStyles.rightSideTitle)}>
        Thêm tài khoản - Kho tổng/con
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
          {title === tabs[1].title && <SubWarehouse />}
        </div>
      </div>
    </div>
  );
}

export default AdditionNewAccount;
