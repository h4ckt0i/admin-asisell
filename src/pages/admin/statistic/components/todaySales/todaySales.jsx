import { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import BlockSection from "~/components/block/blockSection/blockSection";
import { iconsList, blockList } from "./index";
import { fetchApi } from "~/utils/common";
import * as orderSlice from "~/store/common/slice/orderSlice";
import * as productSlice from "~/store/common/slice/productSlice";
import * as userSlice from "~/store/common/slice/userSlice";

import styles from "./todaySales.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function TodaySales({ className }) {
  const [infoList, setInfoList] = useState(blockList);
  const [revenueToday, setRevenueToday] = useState(0);
  const [totalOrdersToday, setTotalOrdersToday] = useState(0);
  const [totalSoldToday, setTotalSoldToday] = useState(0);
  const [totalNewCustomersToday, setTotalNewCustomersToday] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    const getRevenueToday = () =>
      fetchApi(orderSlice.getRevenueToday(), dispatch);
    const getTotalOrdersToday = () =>
      fetchApi(orderSlice.getTotalOrdersToday(), dispatch);
    const getTotalSoldToday = () =>
      fetchApi(productSlice.getTotalSoldToday(), dispatch);
    const getNewCustomersToday = () =>
      fetchApi(userSlice.getNewCustomersToday(), dispatch);

    getRevenueToday().then((result) => setRevenueToday(result.total_revenue));

    getTotalOrdersToday().then((result) =>
      setTotalOrdersToday(result.total_orders)
    );

    getTotalSoldToday().then((result) =>
      setTotalSoldToday(result.total_sold_products)
    );

    getNewCustomersToday().then((result) =>
      setTotalNewCustomersToday(result.total_customers)
    );
  }, []);

  useEffect(() => {
    const numbersList = [
      revenueToday,
      totalOrdersToday,
      totalSoldToday,
      totalNewCustomersToday,
    ];

    const dataList = blockList.map((item, index) => ({
      ...item,
      number: numbersList[index],
    }));

    setInfoList(dataList);
  }, [revenueToday, totalOrdersToday, totalSoldToday, totalNewCustomersToday]);

  return (
    <div
      className={clsx(
        generalStyles.rightSideSection,
        styles.container,
        className
      )}
    >
      <div className={styles.header}>
        <div className={generalStyles.rightSideSubTitle}>Số bán hôm nay</div>
      </div>
      <BlockSection
        className={styles.block}
        list={infoList}
        iconsList={iconsList}
      />
    </div>
  );
}

export default TodaySales;
