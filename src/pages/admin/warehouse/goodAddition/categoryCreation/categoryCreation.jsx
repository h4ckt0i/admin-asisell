import { useState } from "react";
import clsx from "clsx";
import MenuBar from "~/components/menuBar/menuBar";
import Category from "./category/category";
import SubCategory from "./subCategory/subCategory";
import { tabs } from "./index";

import styles from "./categoryCreation.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function CategoryCreation() {
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
          {title === tabs[0].title && <Category />}
          {title === tabs[1].title && <SubCategory />}
        </div>
      </div>
    </div>
  );
}

export default CategoryCreation;
