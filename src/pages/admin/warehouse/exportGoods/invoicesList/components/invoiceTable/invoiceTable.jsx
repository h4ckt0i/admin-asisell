import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "~/components/button/button";
import Loading from "~/components/loading/loading";
import TableSection from "~/components/table/tableSection/tableSection";
import { headerTable } from "./index";
import {
  convertCurrency,
  convertTime,
  sortListByDate,
  fetchApi,
  isNullField,
} from "~/utils/common";
import * as invoiceSlice from "~/store/common/slice/invoiceSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function InvoiceTable({ className }) {
  const [invoices, setInvoices] = useState([]);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.invoice.loading);

  useEffect(() => {
    const getAll = () => fetchApi(invoiceSlice.getExportedInvoices(), dispatch);

    getAll().then((result) => sortListByDate(result, setInvoices));
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <TableSection
          className={className}
          headerTable={headerTable}
          bodyTable={invoices.map((invoice, index) => {
            const paymentInfo = invoice.payment_info;
            const products = invoice.products;
            const productNames = products
              .map((product) => product.product_id.name)
              .join(", ");

            return (
              <tr key={index}>
                <td>
                  <Button
                    to={`/invoice-detail/${invoice._id}`}
                    textBtn={invoice.code}
                  />
                </td>
                <td>{isNullField(productNames)}</td>
                <td>{isNullField(convertTime(invoice.date))}</td>
                <td>{isNullField(convertCurrency(paymentInfo.total))}</td>
                <td className={generalStyles.successful}>
                  {isNullField(convertCurrency(paymentInfo.paid_number))}
                </td>
                <td className={generalStyles.canceled}>
                  {isNullField(convertCurrency(paymentInfo.unpaid_number))}
                </td>
                <td>{isNullField(paymentInfo.due_date)}</td>
                <td></td>
              </tr>
            );
          })}
          listTable={invoices}
          emptyTitle="Hiện chưa có phiếu nào"
        />
      )}
    </>
  );
}

export default InvoiceTable;
