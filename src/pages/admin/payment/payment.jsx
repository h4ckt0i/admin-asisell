import { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import Loading from "~/components/loading/loading";
import Search from "~/components/search/search";
import OrderTable from "./components/orderTable/orderTable";
import PaidNumber from "./components/paidNumber/paidNumber";
import UnpaidNumber from "./components/unpaidNumber/unpaidNumber";
import Shipping from "./components/shipping/shipping";
import CanceledOrder from "./components/canceledOrder/canceledOrder";
import { fetchApi, setDocumentTitle } from "~/utils/common";
import * as orderSlice from "~/store/common/slice/orderSlice";

import styles from "./payment.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function Payment() {
  const [paidOrders, setPaidOrders] = useState({});
  const [pendingOrders, setPendingOrders] = useState({});
  const [shippingOrders, setShippingOrders] = useState({});
  const [canceledOrders, setCanceledOrders] = useState({});

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.order.loading);

  useEffect(() => {
    setDocumentTitle("Thanh toán - Admin");

    const getPaidOrders = () => fetchApi(orderSlice.getPaidOrders(), dispatch);
    const getPendingOrders = () =>
      fetchApi(orderSlice.getPendingOrders(), dispatch);
    const getShippingOrders = () =>
      fetchApi(orderSlice.getShippingOrders(), dispatch);
    const getCanceledOrders = () =>
      fetchApi(orderSlice.getCanceledOrders(), dispatch);

    getPaidOrders().then((result) => setPaidOrders(result));
    getPendingOrders().then((result) => setPendingOrders(result));
    getShippingOrders().then((result) => setShippingOrders(result));
    getCanceledOrders().then((result) => setCanceledOrders(result));
  }, []);

  return (
    <>
      {false ? (
        <Loading />
      ) : (
        <div
          className={clsx(generalStyles.rightSideContainer, styles.container)}
        >
          <span className={clsx(generalStyles.rightSideTitle)}>Thanh toán</span>
          <div className={styles.content}>
            <div className={styles.totalContainer}>
              <PaidNumber className={styles.total} orders={paidOrders} />
              <UnpaidNumber className={styles.total} orders={pendingOrders} />
              <Shipping className={styles.total} orders={shippingOrders} />
              <CanceledOrder className={styles.total} orders={canceledOrders} />
            </div>
            <Search placeholder="Tìm kiếm đơn hàng, mã đơn hàng" />
            <OrderTable className={styles.table} />
          </div>
        </div>
      )}
    </>
  );
}

export default Payment;
