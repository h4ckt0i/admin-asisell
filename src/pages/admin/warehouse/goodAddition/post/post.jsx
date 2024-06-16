import { useState, useEffect } from "react";
import clsx from "clsx";
import MenuBar from "~/components/menuBar/menuBar";
import PostProduct from "./postProduct/postProduct";
import PostGift from "./postGift/postGift";
import { tabs } from "./index";

import styles from "./post.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function Post() {
  const [title, setTitle] = useState(tabs[0].title);

  return (
    <div className={styles.container}>
      <MenuBar
        menu={tabs}
        activeStyles={generalStyles.tabsItemActivated}
        itemStyles={generalStyles.tabsItem}
        listStyles={clsx(generalStyles.tabsList, styles.list)}
        setTitle={setTitle}
      />
      <div className={styles.content}>
        {title === tabs[0].title && <PostProduct />}
        {title === tabs[1].title && <PostGift />}
      </div>
    </div>
  );
}

export default Post;
