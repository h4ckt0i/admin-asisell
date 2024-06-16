import { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import Image from "~/components/image/image";
import BlueStars from "~/assets/icons/blue-stars.png";
import { convertCurrency, fetchApi, getCurrentYear } from "~/utils/common";
import * as targetSlice from "~/store/common/slice/targetSlice";
import * as orderSlice from "~/store/common/slice/orderSlice";

import styles from "./targetRevenue.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function TargetRevenue({ className }) {
  const [totalTarget, setTotalTarget] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    const getRevenueByYear = () =>
      fetchApi(orderSlice.getRevenueByYear(getCurrentYear()), dispatch);
    const getAll = () => fetchApi(targetSlice.getAll(), dispatch);

    getRevenueByYear().then((result) => {
      result.length !== 0 && setTotalRevenue(result.total_revenue);
    });

    getAll().then(
      (result) => result.length !== 0 && setTotalTarget(result[0].total_revenue)
    );
  }, []);

  return (
    <div
      className={clsx(
        generalStyles.rightSideSection,
        styles.container,
        className
      )}
    >
      <div className={generalStyles.rightSideSubTitle}>Mục tiêu năm</div>
      <div className={styles.content}>
        <Image className={styles.icon} src={BlueStars} />
        <div className={styles.textContainer}>
          <span className={styles.number}>{convertCurrency(totalTarget)}</span>
          <span
            className={styles.duration}
          >{`Thời hạn: 31/12/${getCurrentYear()}`}</span>
          <span className={styles.percentage}>
            Đã đạt:{" "}
            <span>
              {totalTarget > 0
                ? ((totalRevenue / totalTarget) * 100).toFixed()
                : totalTarget}
              %
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default TargetRevenue;
