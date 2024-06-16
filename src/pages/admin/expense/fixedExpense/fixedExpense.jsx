import { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import BriefInfo from "./components/briefInfo/briefInfo";
import BlockSection from "../components/blockSection/blockSection";
import ExpenseCategory from "../components/expenseCategory/expenseCategory";
import ExpenseTable from "../components/expenseTable/expenseTable";
import { fetchApi, setDocumentTitle } from "~/utils/common";
import * as expenseSlice from "~/store/common/slice/expenseSlice";

import styles from "./fixedExpense.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function FixedExpense() {
  const [expenseList, setExpenseList] = useState([]);
  const [monthlyTotalList, setMonthlyTotalList] = useState({});
  const [monthlyTotal, setMonthlyTotal] = useState(0);
  const [monthlyPaidTotal, setMonthlyPaidTotal] = useState(0);
  const [monthlyUnPaidTotal, setMonthlyUnPaidTotal] = useState(0);
  const [expenseInfoList, setExpenseInfoList] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);
  const [paidTotal, setPaidTotal] = useState(0);
  const [unpaidTotal, setUnpaidTotal] = useState(0);
  const [mostExpensiveCost, setMostExpensiveCost] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    setDocumentTitle("Khoản chi - Admin");

    const getAll = () => fetchApi(expenseSlice.getAllFixedCost(), dispatch);
    const getAllMonthlyTotal = () =>
      fetchApi(expenseSlice.getAllMonthlyFixedCostTotal(), dispatch);
    const getMonthlyPaidTotal = () =>
      fetchApi(expenseSlice.getPaidMonthlyFixedCostTotal(), dispatch);
    const getMonthlyUnpaidTotal = () =>
      fetchApi(expenseSlice.getUnpaidMonthlyFixedCostTotal(), dispatch);
    const getAllTotal = () =>
      fetchApi(expenseSlice.getAllFixedCostTotal(), dispatch);
    const getPaidTotal = () =>
      fetchApi(expenseSlice.getPaidFixedCostTotal(), dispatch);
    const getUnpaidTotal = () =>
      fetchApi(expenseSlice.getUnpaidFixedCostTotal(), dispatch);
    const getMostExpensive = () =>
      fetchApi(expenseSlice.getMostExpensiveFixedCost(), dispatch);

    getAll().then((result) => setExpenseList(result));
    getAllMonthlyTotal().then((result) =>
      setMonthlyTotal(result.total_expenses)
    );
    getMonthlyPaidTotal().then((result) =>
      setMonthlyPaidTotal(result.total_paid)
    );
    getMonthlyUnpaidTotal().then((result) =>
      setMonthlyUnPaidTotal(result.total_unpaid)
    );
    getAllTotal().then((result) => setTotalExpense(result.total_expenses));
    getPaidTotal().then((result) => setPaidTotal(result.total_paid));
    getUnpaidTotal().then((result) => setUnpaidTotal(result.total_unpaid));
    getMostExpensive().then((result) => setMostExpensiveCost(result));
  }, []);

  useEffect(() => {
    setMonthlyTotalList({
      monthlyTotal,
      monthlyPaidTotal,
      monthlyUnPaidTotal,
    });
  }, [monthlyTotal, monthlyPaidTotal, monthlyUnPaidTotal]);

  useEffect(() => {
    setExpenseInfoList([totalExpense, paidTotal, unpaidTotal]);
  }, [totalExpense, unpaidTotal, paidTotal]);

  return (
    <div className={clsx(generalStyles.rightSideContainer, styles.container)}>
      <span className={clsx(generalStyles.rightSideTitle)}>
        Chi phí cố định - Khoản chi
      </span>
      <div className={styles.content}>
        <BlockSection
          className={styles.blockSection}
          monthlyTotalList={monthlyTotalList}
        />
        <div className={styles.partTwo}>
          <BriefInfo
            className={styles.partTwoChild}
            expenseInfoList={expenseInfoList}
          />
          <ExpenseCategory mostExpensiveCost={mostExpensiveCost} />
        </div>
        <ExpenseTable list={expenseList} setNewExpenses={setExpenseList} />
      </div>
    </div>
  );
}

export default FixedExpense;
