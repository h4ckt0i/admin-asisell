import { useState, useEffect } from "react";
import clsx from "clsx";
import MenuBar from "~/components/menuBar/menuBar";
import ProductsList from "./productsList/productsList";
import GiftsList from "./giftsList/giftsList";
import { tabs } from "./index";

import styles from "./list.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function List() {
  const [title, setTitle] = useState(tabs[0].title);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <MenuBar
          menu={tabs}
          activeStyles={generalStyles.tabsItemActivated}
          itemStyles={generalStyles.tabsItem}
          listStyles={clsx(generalStyles.tabsList, styles.list)}
          setTitle={setTitle}
        />
        <div className={styles.content}>
          {title === tabs[0].title && <ProductsList />}
          {title === tabs[1].title && <GiftsList />}
        </div>
      </div>
    </div>
  );
}

export default List;
