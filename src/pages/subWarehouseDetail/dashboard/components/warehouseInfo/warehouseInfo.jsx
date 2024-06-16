import clsx from "clsx";
import LocationIcon from "~/assets/icons/locationIcon";
import HomeIcon from "~/assets/icons/homeIcon";
import TickUserIcon from "~/assets/icons/tickUserIcon";

import styles from "./warehouseInfo.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function warehouseInfo({ subWarehouseInfo, className }) {
  return (
    <div
      className={clsx(
        generalStyles.rightSideSection,
        styles.container,
        className
      )}
    >
      <div className={generalStyles.rightSideSubTitle}>Thông tin kho</div>
      <div className={styles.content}>
        <div className={styles.item}>
          <HomeIcon className={styles.icon} />
          <span className={styles.text}>
            Công ty: <span>{subWarehouseInfo.name}</span>
          </span>
        </div>
        <div className={styles.item}>
          <TickUserIcon className={styles.icon} />
          <span className={styles.text}>
            Người đại diện: <span>{subWarehouseInfo.representative}</span>
          </span>
        </div>
        <div className={styles.item}>
          <LocationIcon className={styles.icon} />
          <span className={styles.text}>
            Địa chỉ: <span>{subWarehouseInfo.address}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default warehouseInfo;
