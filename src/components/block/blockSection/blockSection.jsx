import clsx from "clsx";
import Block from "../blockComponent/blockComponent";

import styles from "./blockSection.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function BlockSection({ list, iconsList, className }) {
  return (
    <ul className={clsx(generalStyles.list, styles.container, className)}>
      {list.map((item, index) => {
        return (
          <Block
            className={styles.item}
            srcImg={iconsList[index].icon}
            number={item.number}
            title={item.title}
            style={{ backgroundColor: iconsList[index].backgroundColor }}
            key={item.id}
          />
        );
      })}
    </ul>
  );
}

export default BlockSection;
