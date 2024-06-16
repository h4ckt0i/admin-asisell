import clsx from "clsx";
import IconButton from "~/components/iconButton/iconButton";
import TableSection from "~/components/table/tableSection/tableSection";
import { headerTable, paymentMethod } from "./index";
import { deliveryType } from "~/components/table/orderTable";
import {
  convertTime,
  convertCurrency,
  formatNumber,
  isNullField,
} from "~/utils/common";

import generalStyles from "~/styles/generalStyle.module.scss";

function OrderTable({ orders, className }) {
  return (
    <TableSection
      className={className}
      headerTable={headerTable}
      bodyTable={orders.map((order, index) => {
        const products = order.products
          .map((product) => product.product_id.name)
          .join(", ");
        const deliveryMethod = order.delivery_method;
        const deliveryStatus = order.delivery_status;

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
  );
}

export default OrderTable;
