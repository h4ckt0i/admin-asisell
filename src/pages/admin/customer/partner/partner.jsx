import { useState, useEffect } from "react";
import clsx from "clsx";
import MenuBar from "~/components/menuBar/menuBar";
import PartnersList from "./partnersList/partnersList";
import PartnerAddition from "./partnerAddition/partnerAddition";
import { tabs } from "./index";
import { setDocumentTitle } from "~/utils/common";

import styles from "./partner.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function Partner() {
  const [title, setTitle] = useState(tabs[0].title);

  useEffect(() => {
    setDocumentTitle("Khách hàng - Admin");
  }, []);

  return (
    <div className={clsx(generalStyles.rightSideContainer, styles.container)}>
      <span className={clsx(generalStyles.rightSideTitle)}>
        Đối tác - Khách hàng
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
          {title === tabs[0].title && <PartnersList />}
          {title === tabs[1].title && <PartnerAddition />}
        </div>
      </div>
    </div>
  );
}

export default Partner;
