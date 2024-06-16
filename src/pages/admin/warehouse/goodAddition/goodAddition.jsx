import { useState, useEffect } from "react";
import clsx from "clsx";
import MenuBar from "~/components/menuBar/menuBar";
import Post from "./post/post";
import CategoryCreation from "./categoryCreation/categoryCreation";
import BrandCreation from "./brandCreation/brandCreation";
import CertificateCreation from "./certificateCreation/certificateCreation";
import { tabs } from "./index";
import { setDocumentTitle } from "~/utils/common";

import styles from "./goodAddition.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function GoodAddition() {
  const [title, setTitle] = useState(tabs[0].title);

  useEffect(() => {
    setDocumentTitle("Quản lý kho - Admin");
  }, []);

  return (
    <div className={clsx(generalStyles.rightSideContainer, styles.container)}>
      <span className={clsx(generalStyles.rightSideTitle)}>
        Thêm sản phẩm - Quản lý kho
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
          {title === tabs[1].title && <BrandCreation />}
          {title === tabs[2].title && <CertificateCreation />}
          {title === tabs[3].title && <Post />}
        </div>
      </div>
    </div>
  );
}

export default GoodAddition;
