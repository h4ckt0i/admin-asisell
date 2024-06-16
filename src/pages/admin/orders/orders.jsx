import { useState, useEffect } from "react";
import clsx from "clsx";
import OrderTable from "~/components/table/orderTable/orderTable";
import { setDocumentTitle } from "~/utils/common";

import styles from "./orders.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function Orders() {
  const [orderQuantity, setOrderQuantity] = useState(0);

  useEffect(() => {
    setDocumentTitle("Theo dõi đơn hàng - Admin");
  }, []);

  return (
    <div className={clsx(generalStyles.rightSideContainer, styles.container)}>
      <div className={generalStyles.rightSideHeader}>
        <span className={clsx(generalStyles.rightSideTitle)}>
          Theo dõi đơn hàng
        </span>
        <span className={styles.orderQuantity}>
          Tổng đơn hàng: {orderQuantity}
        </span>
      </div>
      <div className={clsx(generalStyles.rightSideSection, styles.content)}>
        <OrderTable isAction={true} setOrderQuantity={setOrderQuantity} />
      </div>
    </div>
  );
}

export default Orders;
