import clsx from "clsx";
import IconButton from "~/components/iconButton/iconButton";
import TableSection from "~/components/table/tableSection/tableSection";
import { headerTable, paymentType } from "./index";
import { convertCurrency, convertTime, isNullField } from "~/utils/common";

import generalStyles from "~/styles/generalStyle.module.scss";

function OrderTable({ orders, className }) {
  return (
    <TableSection
      className={className}
      headerTable={headerTable}
      bodyTable={orders.map((order, index) => {
        const user = order.user;
        const paymentStatus = order.payment_status;

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
  );
}

export default OrderTable;
