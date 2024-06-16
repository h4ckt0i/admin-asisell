import { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import Loading from "~/components/loading/loading";
import IconButton from "~/components/iconButton/iconButton";
import TableSection from "../tableSection/tableSection";
import { headerTable, deliveryType, paymentType } from "./index";
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

function OrderTable({ limit, setOrderQuantity, className }) {
  const [orders, setOrders] = useState([]);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.order.loading);

  useEffect(() => {
    const getAllBySuccess = () =>
      fetchApi(orderSlice.getAllBySuccess(), dispatch);

    getAllBySuccess().then((result) => {
      if (!limit) {
        sortListByDate(result, setOrders);
        setOrderQuantity && setOrderQuantity(result.length);
      } else {
        const orders = result.filter((order, index) => index < limit);

        sortListByDate(orders, setOrders);
      }
    });
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
            const products = order.products
              .map((product) => product.product_id.name)
              .join(", ");
            const deliveryStatus = order.delivery_status;
            const paymentStatus = order.payment_status;

            return (
              <tr key={index}>
                <td>
                  <IconButton
                    textBtn={order.code}
                    to={`/order-detail/${order._id}`}
                  />
                </td>
                <td>{isNullField(convertTime(order.date))}</td>
                <td>{isNullField(order.user.name)}</td>
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
                <td>
                  <div className={generalStyles.statusContainer}>
                    <div className={generalStyles.status}>
                      <div
                        className={clsx(
                          deliveryStatus.value === deliveryType[0].value &&
                            generalStyles.backgroundSuccessful,
                          deliveryStatus.value === deliveryType[1].value &&
                            generalStyles.backgroundShipping,
                          deliveryStatus.value === deliveryType[2].value &&
                            generalStyles.backgroundPending,
                          deliveryStatus.value === deliveryType[3].value &&
                            generalStyles.backgroundCanceled
                        )}
                      ></div>
                      <span>{deliveryStatus.label}</span>
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
