import clsx from "clsx";
import Button from "../button/button";
import Image from "~/components/image/image";
import IconButton from "../iconButton/iconButton";
import CheckCircleIcon from "~/assets/icons/checkCircleIcon";
import { convertCurrency } from "~/utils/common";

import styles from "./productOrder.module.scss";

function ProductOrder({
  brand,
  image,
  name,
  gifts,
  price,
  quantity,
  total,
  className,
}) {
  const giftNames = gifts.map((gift) => gift.name).join(" + ");

  return (
    <div className={clsx(styles.container, className)}>
      <div className={styles.brand}>
        <CheckCircleIcon className={styles.brandIcon} />
        <span className={styles.title}>Thương hiệu:</span>
        <span className={styles.brandName}>{brand}</span>
      </div>
      <div className={styles.productContent}>
        <IconButton className={styles.imgBtn}>
          <Image className={styles.productImg} src={image} />
        </IconButton>
        <div className={styles.content}>
          <div className={styles.nameAndGift}>
            <Button className={styles.name} textBtn={name} />
            {gifts.length !== 0 && (
              <span className={styles.gift}>{`Tặng ${giftNames}`}</span>
            )}
          </div>
          <div className={styles.quantityContainer}>
            <span className={styles.price}>{convertCurrency(price)}</span>
            <div className={styles.quantity}>{quantity}</div>
            <div className={styles.totalPrice}>{convertCurrency(total)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductOrder;
