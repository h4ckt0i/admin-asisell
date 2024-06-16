import { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import Search from "~/components/search/search";
import Filter from "./components/filter/filter";
import BriefInfo from "./components/briefInfo/briefInfo";
import OrderTable from "./components/orderTable/orderTable";
import ShippingCost from "./components/shippingCost/shippingCost";
import CollectionPrice from "./components/collectionPrice/collectionPrice";
import { fetchApi, setDocumentTitle } from "~/utils/common";
import * as orderSlice from "~/store/common/slice/orderSlice";

import styles from "./delivery.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function Delivery() {
  const [numbersList, setNumbersList] = useState([]);
  const [totalOrders, setTotalOrders] = useState(0);
  const [pendingOrders, setPendingOrders] = useState(0);
  const [shippingOrders, setShippingOrders] = useState(0);
  const [deliveredOrders, setDeliveredOrders] = useState(0);
  const [canceledOrders, setCanceledOrders] = useState(0);
  const [collectionPrice, setCollectionPrice] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    setDocumentTitle("Vận chuyển - Admin");

    const getAll = () => fetchApi(orderSlice.getTotalOrders(), dispatch);
    const getPendingDelivery = () =>
      fetchApi(orderSlice.getPendingDelivery(), dispatch);
    const getShippingOrders = () =>
      fetchApi(orderSlice.getShippingOrders(), dispatch);
    const getDeliveredOrders = () =>
      fetchApi(orderSlice.getDeliveredOrders(), dispatch);
    const getCanceledOrders = () =>
      fetchApi(orderSlice.getCanceledOrders(), dispatch);
    const getMonthlyShippingCost = () =>
      fetchApi(orderSlice.getMonthlyShippingCost(), dispatch);

    getAll().then((result) => setTotalOrders(result.total_orders));
    getPendingDelivery().then((result) => setPendingOrders(result.count));
    getShippingOrders().then((result) => setShippingOrders(result.count));
    getDeliveredOrders().then((result) => setDeliveredOrders(result.count));
    getCanceledOrders().then((result) => setCanceledOrders(result.count));
    getMonthlyShippingCost().then((result) =>
      setShippingCost(result.total_shipping_cost)
    );
  }, []);

  useEffect(() => {
    const numbersList = [
      totalOrders,
      pendingOrders,
      shippingOrders,
      deliveredOrders,
      canceledOrders,
    ];

    setNumbersList(numbersList);
  }, [
    totalOrders,
    pendingOrders,
    shippingOrders,
    deliveredOrders,
    canceledOrders,
  ]);

  return (
    <div className={clsx(generalStyles.rightSideContainer, styles.container)}>
      <span className={clsx(generalStyles.rightSideTitle)}>
        Giao hàng - Vận chuyển
      </span>
      <div className={styles.content}>
        <div className={styles.totalContainer}>
          <CollectionPrice
            className={styles.total}
            collectionPrice={collectionPrice}
          />
          <ShippingCost className={styles.total} shippingCost={shippingCost} />
        </div>
        <div className={styles.partTwo}>
          <div className={styles.blockAndSearch}>
            <BriefInfo className={styles.briefInfo} numbersList={numbersList} />
            <Search placeholder="Tìm kiếm đơn hàng, mã VC" />
          </div>
          <Filter className={styles.filter} />
        </div>
        <OrderTable className={styles.table} />
      </div>
    </div>
  );
}

export default Delivery;
