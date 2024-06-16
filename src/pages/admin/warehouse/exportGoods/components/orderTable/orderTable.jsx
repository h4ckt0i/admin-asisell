import { useState, useEffect } from "react";
import clsx from "clsx";
import Image from "~/components/image/image";
import TableSection from "~/components/table/tableSection/tableSection";
import IconButton from "~/components/iconButton/iconButton";
import { headerTable } from "./index";
import {
  formatNumber,
  convertCurrency,
  sortListByDate,
  isNullField,
} from "~/utils/common";

import generalStyles from "~/styles/generalStyle.module.scss";

function OrderTable({ isRetail = true, className }) {
  const [header, setHeader] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const giftHeader = headerTable.filter(
      (item, index) => index < headerTable.length - 1
    );
    const list = [...Array(0).keys()];

    sortListByDate(list, setOrders);

    isRetail ? setHeader(headerTable) : setHeader(giftHeader);
  }, []);

  return (
    <TableSection
      className={className}
      headerTable={header}
      bodyTable={orders.map((item, index) => {
        return (
          <tr key={index}>
            <td>10/11/2023</td>
            <td>
              <IconButton
                className={generalStyles.productBtn}
                textBtn={"Snack đậu gà"}
              >
                <Image
                  className={generalStyles.productImg}
                  src={"https://tinyurl.com/product-image"}
                />
              </IconButton>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td>{convertCurrency(0)}</td>
            <td>{convertCurrency(0)}</td>
            <td>{formatNumber(0)}</td>
            <td className={generalStyles.canceled}>{convertCurrency(0)}</td>
            <td className={generalStyles.successful}></td>
            {isRetail && (
              <td>
                <IconButton
                  className={clsx(
                    generalStyles.productBtn,
                    generalStyles.successful
                  )}
                  textBtn="Áo thun"
                />
              </td>
            )}
          </tr>
        );
      })}
      listTable={orders}
      emptyTitle="Hiện chưa có đơn hàng nào"
    />
  );
}

export default OrderTable;
