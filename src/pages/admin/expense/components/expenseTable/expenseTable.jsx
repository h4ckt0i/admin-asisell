import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import IconButton from "~/components/iconButton/iconButton";
import TableSection from "~/components/table/tableSection/tableSection";
import RedTrashIcon from "~/assets/icons/redTrashIcon";
import { headerTable } from "./index";
import {
  formatNumber,
  convertCurrency,
  convertTime,
  sortListByDate,
  fetchApi,
  isNullField,
} from "~/utils/common";
import * as expenseSlice from "~/store/common/slice/expenseSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function ExpenseTable({
  list,
  setNewExpenses,
  showDeletion = true,
  className,
}) {
  const [header, setHeader] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const dispatch = useDispatch();

  const deleteExpense = (id) => {
    const deleteObject = () =>
      fetchApi(expenseSlice.deleteExpense(id), dispatch);

    deleteObject().then(() => {
      const newExpenses = list.filter((expense) => expense._id !== id);

      setNewExpenses(newExpenses);
    });
  };

  useEffect(() => {
    sortListByDate(list, setExpenses);
  }, [list]);

  useEffect(() => {
    const newHeader = headerTable.filter((header, index) => index < 10);

    showDeletion ? setHeader(headerTable) : setHeader(newHeader);
  }, [showDeletion]);

  return (
    <TableSection
      className={className}
      headerTable={header}
      bodyTable={expenses.map((expense, index) => {
        const paymentInfo = expense.payment_info;
        const vat = expense.vat;

        return (
          <tr key={index}>
            <td>{isNullField(convertTime(expense.date))}</td>
            <td>{isNullField(expense.code)}</td>
            <td>{isNullField(expense.type.label)}</td>
            <td>{isNullField(expense.creator)}</td>
            <td>{isNullField(convertCurrency(expense.unit_price))}</td>
            <td>{isNullField(convertCurrency(vat.price))}</td>
            <td>{isNullField(formatNumber(expense.quantity))}</td>
            <td>{isNullField(convertCurrency(paymentInfo.total))}</td>
            <td></td>
            {showDeletion && (
              <td>
                <div className={generalStyles.action}>
                  <IconButton
                    className={generalStyles.actionBtn}
                    onClick={() => deleteExpense(expense._id)}
                  >
                    <RedTrashIcon className={generalStyles.actionIcon} />
                  </IconButton>
                </div>
              </td>
            )}
          </tr>
        );
      })}
      listTable={expenses}
      emptyTitle="Hiện chưa có hóa đơn nào"
    />
  );
}

export default ExpenseTable;
