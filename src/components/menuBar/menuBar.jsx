import { useState } from "react";
import clsx from "clsx";
import Button from "../button/button";

import styles from "./menuBar.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function MenuBar({ setTitle, menu, activeStyles, itemStyles, listStyles }) {
  const [indexItem, setIndexItem] = useState(0);

  return (
    <ul className={clsx(generalStyles.list, styles.list, listStyles)}>
      {menu.map((item, index) => {
        return (
          <Button
            className={clsx(
              styles.item,
              index === indexItem && activeStyles,
              itemStyles
            )}
            onClick={() => {
              setTitle && setTitle(item.title);
              setIndexItem(index);
            }}
            textBtn={item.title}
            key={index}
          />
        );
      })}
    </ul>
  );
}

export default MenuBar;
