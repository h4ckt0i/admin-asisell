import { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import Loading from "~/components/loading/loading";
import IconButton from "~/components/iconButton/iconButton";
import TableSection from "~/components/table/tableSection/tableSection";
import { headerTable, paymentMethod } from "./index";
import { deliveryType } from "~/components/table/orderTable";
import {
  sortListByDate,
  convertTime,
  convertCurrency,
  fetchApi,
  formatNumber,
  isNullField,
} from "~/utils/common";
import * as orderSlice from "~/store/common/slice/orderSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function OrderTable({ className }) {
  const [orders, setOrders] = useState([]);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.order.loading);

  useEffect(() => {
    const getAll = () => fetchApi(orderSlice.getAll(), dispatch);

    getAll().then((result) => sortListByDate(result, setOrders));
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
            const deliveryMethod = order.delivery_method;
            const deliveryStatus = order.delivery_status;
            const subWarehouse = order.sub_warehouse;

            return (
              <tr key={index}>
                <td>
                  <IconButton
                    textBtn={order.code}
                    to={`/order-detail/${order._id}`}
                  />
                </td>
                <td>{isNullField(convertTime(order.date))}</td>
                <td className={generalStyles.productSection}>
                  {isNullField(products)}
                </td>
                <td>{isNullField(formatNumber(order.quantity))}</td>
                <td>{isNullField(convertCurrency(order.total))}</td>
                <td>{isNullField(subWarehouse && subWarehouse.name)}</td>
                <td>
                  <div
                    className={clsx(
                      deliveryMethod.value === paymentMethod.value
                        ? generalStyles.pending
                        : generalStyles.shipping
                    )}
                  >
                    <div className={generalStyles.status}>
                      {deliveryMethod.label}
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
