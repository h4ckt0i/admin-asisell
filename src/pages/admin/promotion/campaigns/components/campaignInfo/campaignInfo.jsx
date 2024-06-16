import clsx from "clsx";
import IconButton from "~/components/iconButton/iconButton";
import BluePenIcon from "~/assets/icons/bluePenIcon";

import styles from "./campaignInfo.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";
import { formatNumber } from "~/utils/common";

function CampaignInfo({ campaign, className }) {
  const date = campaign.applicable_date || {};
  const time = campaign.applicable_time || {};
  const product = campaign.applicable_product || [];

  return (
    <div className={clsx(styles.container, className)}>
      <div className={styles.header}>
        <span className={generalStyles.rightSideSubTitle}>{campaign.name}</span>
        <IconButton className={styles.editBtn} onClick={() => {}}>
          <BluePenIcon className={styles.editIcon} />
        </IconButton>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <span className={styles.label}>Mã chương trình:</span>
          <span className={styles.text}>{campaign.code}</span>
        </div>
        <div className={styles.section}>
          <span className={styles.label}>Thời gian triển khai:</span>
          <span className={generalStyles.successful}>{date.start || ""}</span>
        </div>
        <div className={styles.section}>
          <span className={styles.label}>Thời gian kết thúc:</span>
          <span className={generalStyles.canceled}>{date.end || ""}</span>
        </div>
        <div className={styles.section}>
          <span className={styles.label}>Đối tượng áp dụng:</span>
          <span className={styles.text}>{campaign.applicable_user}</span>
        </div>
        <div className={styles.section}>
          <span className={styles.label}>Địa điểm áp dụng:</span>
          <span className={styles.text}>{campaign.applicable_location}</span>
        </div>
        <div className={styles.section}>
          <span className={styles.label}>Khung giờ:</span>
          <span className={styles.text}>{`${time.start || ""} - ${
            time.end || ""
          }`}</span>
        </div>
        <div className={styles.section}>
          <span className={styles.label}>Sản phẩm áp dụng:</span>
          <span className={styles.text}>
            {product.length !== 0 && formatNumber(product[0].product.name)}
          </span>
        </div>
        <div className={styles.section}>
          <span className={styles.label}>Số sản phẩm áp dụng:</span>
          <span className={styles.text}>
            {product.length !== 0 && formatNumber(product[0].quantity)}
          </span>
        </div>
        <div className={styles.section}>
          <span className={styles.label}>Cách thức:</span>
          <span className={styles.text}>Nhập mã để áp dụng</span>
        </div>
      </div>
      <div className={styles.code}>{campaign.promotional_code}</div>
    </div>
  );
}

export default CampaignInfo;
