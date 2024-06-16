import { useState, useEffect } from "react";
import clsx from "clsx";
import MenuBar from "~/components/menuBar/menuBar";
import Overview from "./overview/overview";
import AdditionNewPartner from "./additionNewPartner/additionNewPartner";
import PartnersList from "./partnersList/partnersList";
import { tabs } from "./index";

import styles from "./customer.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function Customer() {
  const [title, setTitle] = useState(tabs[0].title);

  useEffect(() => {
    document.title = "Khách hàng - Admin | Asisell";
  }, []);

  return (
    <div className={clsx(generalStyles.rightSideContainer, styles.container)}>
      <span className={clsx(generalStyles.rightSideTitle)}>Khách hàng</span>
      <div className={styles.content}>
        <MenuBar
          menu={tabs}
          activeStyles={generalStyles.tabsItemActivated}
          itemStyles={generalStyles.tabsItem}
          listStyles={clsx(generalStyles.tabsList, styles.list)}
          setTitle={setTitle}
        />
        <div className={generalStyles.mainContent}>
          {title === tabs[0].title && <Overview />}
          {title === tabs[1].title && <PartnersList />}
          {title === tabs[2].title && <AdditionNewPartner />}
        </div>
      </div>
    </div>
  );
}

export default Customer;
