import { useState, useEffect } from "react";
import clsx from "clsx";
import MenuBar from "~/components/menuBar/menuBar";
import SaleRegistration from "./saleRegistration/saleRegistration";
import CooperativeSource from "./cooperativeSource/cooperativeSource";
import { tabs } from "./index";
import { setDocumentTitle } from "~/utils/common";

import styles from "./messages.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function Messages() {
  const [title, setTitle] = useState(tabs[0].title);

  useEffect(() => {
    setDocumentTitle("Tin nhắn - Admin");
  }, []);

  return (
    <div className={clsx(generalStyles.rightSideContainer, styles.container)}>
      <span className={clsx(generalStyles.rightSideTitle)}>Tin nhắn</span>
      <div className={styles.content}>
        <MenuBar
          menu={tabs}
          activeStyles={generalStyles.tabsItemActivated}
          itemStyles={generalStyles.tabsItem}
          listStyles={clsx(generalStyles.tabsList, styles.list)}
          setTitle={setTitle}
        />
        <div className={generalStyles.mainContent}>
          {title === tabs[0].title && <SaleRegistration />}
          {title === tabs[1].title && <CooperativeSource />}
        </div>
      </div>
    </div>
  );
}

export default Messages;
