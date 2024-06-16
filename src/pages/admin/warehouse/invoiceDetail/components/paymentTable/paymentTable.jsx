import { useState, useEffect } from "react";
import Table from "~/components/table/tableComponent/tableComponent";
import { header } from "./index";
import { convertCurrency, isNullField } from "~/utils/common";

import generalStyles from "~/styles/generalStyle.module.scss";

function PaymentTable({ list, className }) {
  const [payment, setPayment] = useState([]);

  useEffect(() => {
    setPayment([list]);
  }, [list]);

  return (
    <Table
      className={className}
      header={header}
      body={payment.map((payment, index) => {
        return (
          <tr key={index}>
            <td>{isNullField(convertCurrency(payment.total))}</td>
            <td className={generalStyles.successful}>
              {isNullField(convertCurrency(payment.paid_number))}
            </td>
            <td className={generalStyles.canceled}>
              {isNullField(convertCurrency(payment.unpaid_number))}
            </td>
            <td>{isNullField(payment.due_date)}</td>
          </tr>
        );
      })}
      list={header}
    />
  );
}

export default PaymentTable;
