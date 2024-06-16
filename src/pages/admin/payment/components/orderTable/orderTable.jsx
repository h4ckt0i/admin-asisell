import { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import Loading from "~/components/loading/loading";
import IconButton from "~/components/iconButton/iconButton";
import TableSection from "~/components/table/tableSection/tableSection";
import { headerTable, paymentType } from "./index";
import {
  formatNumber,
  convertCurrency,
  convertTime,
  sortListByDate,
  fetchApi,
  isNullField,
} from "~/utils/common";
import * as orderSlice from "~/store/common/slice/orderSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function OrderTable({ className }) {
  const [orders, setOrders] = useState([]);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.order.loading);

  useEffect(() => {
    const getAllBySuccess = () =>
      fetchApi(orderSlice.getAllBySuccess(), dispatch);

    getAllBySuccess().then((result) => sortListByDate(result, setOrders));
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <TableSection
          className={className}
          headerTable={headerTable}
          bodyTable={orders.map((order, index) => {
            const user = order.user;
            const paymentStatus = order.payment_status;
            const products = order.products
              .map((product) => product.product_id.name)
              .join(", ");

            return (
              <tr key={index}>
                <td>
                  <IconButton
                    to={`/order-detail/${order._id}`}
                    textBtn={order.code}
                  />
                </td>
                <td>{isNullField(user.name)}</td>
                <td>{isNullField(convertTime(order.date))}</td>
                <td className={generalStyles.productSection}>
                  {isNullField(products)}
                </td>
                <td>{isNullField(formatNumber(order.quantity))}</td>
                <td>{isNullField(convertCurrency(order.total))}</td>
                <td>
                  <div className={generalStyles.statusContainer}>
                    <div className={generalStyles.status}>
                      <div
                        className={clsx(
                          paymentStatus.value === paymentType[0].value &&
                            generalStyles.backgroundPending,
                          paymentStatus.value === paymentType[1].value &&
                            generalStyles.backgroundSuccessful
                        )}
                      ></div>
                      <span>{paymentStatus.label}</span>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
          listTable={orders}
          emptyTitle="Hiện chưa có đơn hàng nào"
        />
      )}
    </>
  );
}

export default OrderTable;
