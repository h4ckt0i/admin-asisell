import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "~/components/loading/loading";
import OrderTable from "./components/orderTable/orderTable";
import PaidNumber from "./components/paidNumber/paidNumber";
import UnpaidNumber from "./components/unpaidNumber/unpaidNumber";
import Shipping from "./components/shipping/shipping";
import CanceledOrder from "./components/canceledOrder/canceledOrder";
import { sortListByDate, fetchApi } from "~/utils/common";
import * as orderSlice from "~/store/subWarehouseDetail/slice/orderSlice";

import styles from "./finance.module.scss";

function Finance({ subWarehouse }) {
  const [orders, setOrders] = useState([]);
  const [paidOrders, setPaidOrders] = useState({});
  const [pendingOrders, setPendingOrders] = useState({});
  const [shippingOrders, setShippingOrders] = useState({});
  const [canceledOrders, setCanceledOrders] = useState({});

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.order.loading);

  useEffect(() => {
    const subWarehouseId = subWarehouse._id;

    const getAll = () => fetchApi(orderSlice.getAll(), dispatch);
    const getPaidOrders = () =>
      fetchApi(orderSlice.getPaidOrders(subWarehouseId), dispatch);
    const getPendingOrders = () =>
      fetchApi(orderSlice.getPendingOrders(subWarehouseId), dispatch);
    const getShippingOrders = () =>
      fetchApi(orderSlice.getShippingOrders(subWarehouseId), dispatch);
    const getCanceledOrders = () =>
      fetchApi(orderSlice.getCanceledOrders(subWarehouseId), dispatch);

    if (subWarehouseId) {
      getAll().then((result) => sortListByDate(result, setOrders));
      getPaidOrders().then((result) => setPaidOrders(result));
      getPendingOrders().then((result) => setPendingOrders(result));
      getShippingOrders().then((result) => setShippingOrders(result));
      getCanceledOrders().then((result) => setCanceledOrders(result));
    }
  }, [subWarehouse]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.totalContainer}>
              <PaidNumber className={styles.total} orders={paidOrders} />
              <UnpaidNumber className={styles.total} orders={pendingOrders} />
              <Shipping className={styles.total} orders={shippingOrders} />
              <CanceledOrder className={styles.total} orders={canceledOrders} />
            </div>
            <OrderTable className={styles.table} orders={orders} />
          </div>
        </div>
      )}
    </>
  );
}

export default Finance;
