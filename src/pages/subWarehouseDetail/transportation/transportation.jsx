import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "~/components/loading/loading";
import Filter from "./components/filter/filter";
import BriefInfo from "./components/briefInfo/briefInfo";
import OrderTable from "./components/orderTable/orderTable";
import ShippingCost from "./components/shippingCost/shippingCost";
import CollectionPrice from "./components/collectionPrice/collectionPrice";
import { sortListByDate, fetchApi } from "~/utils/common";
import * as orderSlice from "~/store/subWarehouseDetail/slice/orderSlice";

import styles from "./transportation.module.scss";

function Transportation({ subWarehouse }) {
  const [orders, setOrders] = useState([]);
  const [numbersList, setNumbersList] = useState([]);
  const [totalOrders, setTotalOrders] = useState(0);
  const [pendingOrders, setPendingOrders] = useState(0);
  const [shippingOrders, setShippingOrders] = useState(0);
  const [deliveredOrders, setDeliveredOrders] = useState(0);
  const [canceledOrders, setCanceledOrders] = useState(0);
  const [collectionPrice, setCollectionPrice] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.order.loading);

  useEffect(() => {
    const subWarehouseId = subWarehouse._id;

    const getAll = () => fetchApi(orderSlice.getAll(subWarehouseId), dispatch);
    const getTotalOrders = () =>
      fetchApi(orderSlice.getTotalOrders(subWarehouseId), dispatch);
    const getPendingDelivery = () =>
      fetchApi(orderSlice.getPendingDelivery(subWarehouseId), dispatch);
    const getShippingOrders = () =>
      fetchApi(orderSlice.getShippingOrders(subWarehouseId), dispatch);
    const getDeliveredOrders = () =>
      fetchApi(orderSlice.getDeliveredOrders(subWarehouseId), dispatch);
    const getCanceledOrders = () =>
      fetchApi(orderSlice.getCanceledOrders(subWarehouseId), dispatch);
    const getMonthlyShippingCost = () =>
      fetchApi(orderSlice.getMonthlyShippingCost(subWarehouseId), dispatch);

    if (subWarehouseId) {
      getAll().then((result) => sortListByDate(result, setOrders));
      getTotalOrders().then((result) => setTotalOrders(result.total_orders));
      getPendingDelivery().then((result) => setPendingOrders(result.count));
      getShippingOrders().then((result) => setShippingOrders(result.count));
      getDeliveredOrders().then((result) => setDeliveredOrders(result.count));
      getCanceledOrders().then((result) => setCanceledOrders(result.count));
      getMonthlyShippingCost().then((result) =>
        setShippingCost(result.total_shipping_cost)
      );
    }
  }, [subWarehouse]);

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
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.totalContainer}>
              <CollectionPrice
                className={styles.total}
                collectionPrice={collectionPrice}
              />
              <ShippingCost
                className={styles.total}
                shippingCost={shippingCost}
              />
            </div>
            <div className={styles.partTwo}>
              <BriefInfo
                className={styles.briefInfo}
                numbersList={numbersList}
              />
              <Filter className={styles.filter} />
            </div>
            <OrderTable className={styles.table} orders={orders} />
          </div>
        </div>
      )}
    </>
  );
}

export default Transportation;
