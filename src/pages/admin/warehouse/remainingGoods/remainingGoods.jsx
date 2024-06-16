import { useState, useEffect } from "react";
import clsx from "clsx";
import MenuBar from "~/components/menuBar/menuBar";
import RemainingProducts from "./remainingProducts/remainingProducts";
import RemainingGifts from "./remainingGifts/remainingGifts";
import { tabs } from "./index";
import { setDocumentTitle } from "~/utils/common";

import styles from "./remainingGoods.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function RemainingGoods() {
  const [title, setTitle] = useState(tabs[0].title);

  useEffect(() => {
    setDocumentTitle("Quản lý kho - Admin");
  }, []);

  return (
    <div className={clsx(generalStyles.rightSideContainer, styles.container)}>
      <span className={clsx(generalStyles.rightSideTitle)}>
        Quản lý hàng tồn - Quản lý kho
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
          {title === tabs[0].title && <RemainingProducts />}
          {title === tabs[1].title && <RemainingGifts />}
        </div>
      </div>
    </div>
  );
}

export default RemainingGoods;
