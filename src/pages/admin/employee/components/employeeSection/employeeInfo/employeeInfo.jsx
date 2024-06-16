import clsx from "clsx";
import Image from "~/components/image/image";
import CrownIcon from "~/assets/icons/crownIcon";
import EnvelopIcon from "~/assets/icons/envelopIcon";
import PhoneIcon from "~/assets/icons/phoneIcon";
import LocationIcon from "~/assets/icons/locationIcon";
import UserImg from "~/assets/images/user.png";

import styles from "./employeeInfo.module.scss";

function EmployeeInfo({ employeeInfo, className }) {
  return (
    <div className={clsx(styles.container, className)}>
      <Image className={styles.avatar} src={employeeInfo.avatar || UserImg} />
      <div className={styles.info}>
        <div className={styles.name}>{employeeInfo.name}</div>
        <div className={styles.infoSection}>
          <CrownIcon className={styles.icon} />
          <span className={styles.text}>
            {employeeInfo.position && employeeInfo.position.label}
          </span>
        </div>
        <div className={styles.infoSection}>
          <EnvelopIcon className={styles.icon} />
          <span className={styles.text}>{employeeInfo.email}</span>
        </div>
        <div className={styles.infoSection}>
          <PhoneIcon className={styles.icon} />
          <span className={styles.text}>{employeeInfo.phone}</span>
        </div>
        <div className={styles.infoSection}>
          <LocationIcon className={styles.icon} />
          <span className={styles.text}>{employeeInfo.address}</span>
        </div>
      </div>
    </div>
  );
}

export default EmployeeInfo;
