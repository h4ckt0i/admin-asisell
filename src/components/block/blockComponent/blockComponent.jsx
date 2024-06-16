import clsx from "clsx";
import Image from "~/components/image/image";
import { formatNumber } from "~/utils/common";

import styles from "./blockComponent.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function Block({ srcImg, title, number, style, className }) {
  return (
    <div
      className={clsx(
        generalStyles.rightSideSection,
        styles.container,
        className
      )}
      style={style}
    >
      <Image className={styles.img} src={srcImg} />
      <div className={styles.text}>
        <span className={styles.number}>{formatNumber(number)}</span>
        <span className={styles.title}>{title}</span>
      </div>
    </div>
  );
}

export default Block;
