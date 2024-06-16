import { useEffect, useState } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import BriefInfo from "../components/briefInfo/briefInfo";
import BlockSection from "../components/blockSection/blockSection";
import TotalExpense from "../components/totalExpense/totalExpense";
import ExpenseCategory from "../components/expenseCategory/expenseCategory";
import ExpenseTable from "../components/expenseTable/expenseTable";
import { fetchApi, setDocumentTitle } from "~/utils/common";
import * as expenseSlice from "~/store/common/slice/expenseSlice";

import styles from "./dashboard.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function Dashboard() {
  const [fixedCostList, setFixedCostList] = useState([]);
  const [mobileCostList, setMobileCostList] = useState([]);
  const [monthlyTotalList, setMonthlyTotalList] = useState({});
  const [monthlyTotal, setMonthlyTotal] = useState(0);
  const [monthlyPaidTotal, setMonthlyPaidTotal] = useState(0);
  const [monthlyUnPaidTotal, setMonthlyUnPaidTotal] = useState(0);
  const [expenseInfoList, setExpenseInfoList] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);
  const [fixedCostTotal, setFixedCostTotal] = useState(0);
  const [mobileCostTotal, setMobileCostTotal] = useState(0);
  const [mostExpensiveCost, setMostExpensiveCost] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    setDocumentTitle("Khoản chi - Admin");

    const getAllFixedCost = () =>
      fetchApi(expenseSlice.getAllFixedCost(), dispatch);
    const getAllMobileCost = () =>
      fetchApi(expenseSlice.getAllMobileCost(), dispatch);
    const getAllMonthlyTotal = () =>
      fetchApi(expenseSlice.getAllMonthlyTotal(), dispatch);
    const getMonthlyPaidTotal = () =>
      fetchApi(expenseSlice.getPaidTotal(), dispatch);
    const getMonthlyUnpaidTotal = () =>
      fetchApi(expenseSlice.getUnpaidTotal(), dispatch);
    const getAllTotal = () => fetchApi(expenseSlice.getAllTotal(), dispatch);
    const getAllFixedCostTotal = () =>
      fetchApi(expenseSlice.getAllFixedCostTotal(), dispatch);
    const getAllMobileCostTotal = () =>
      fetchApi(expenseSlice.getAllMobileCostTotal(), dispatch);
    const getMostExpensiveFixedCost = () =>
      fetchApi(expenseSlice.getMostExpensiveFixedCost(), dispatch);

    getAllFixedCost().then((result) => setFixedCostList(result));
    getAllMobileCost().then((result) => setMobileCostList(result));
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
    getAllFixedCostTotal().then((result) =>
      setFixedCostTotal(result.total_expenses)
    );
    getAllMobileCostTotal().then((result) =>
      setMobileCostTotal(result.total_expenses)
    );
    getMostExpensiveFixedCost().then((result) => setMostExpensiveCost(result));
  }, []);

  useEffect(() => {
    setMonthlyTotalList({
      monthlyTotal,
      monthlyPaidTotal,
      monthlyUnPaidTotal,
    });
  }, [monthlyTotal, monthlyPaidTotal, monthlyUnPaidTotal]);

  useEffect(() => {
    setExpenseInfoList([totalExpense, fixedCostTotal, mobileCostTotal]);
  }, [totalExpense, fixedCostTotal, mobileCostTotal]);

  return (
    <div className={clsx(generalStyles.rightSideContainer, styles.container)}>
      <span className={clsx(generalStyles.rightSideTitle)}>
        Dashboard - Khoản chi
      </span>
      <div className={styles.content}>
        <div className={styles.partOne}>
          <BlockSection
            className={styles.blockSection}
            monthlyTotalList={monthlyTotalList}
          />
          <BriefInfo expenseInfoList={expenseInfoList} />
        </div>
        <div className={styles.partTwo}>
          <TotalExpense />
          <ExpenseCategory mostExpensiveCost={mostExpensiveCost} />
        </div>
        <div className={styles.partThree}>
          <div className={styles.partThreeChild}>
            <span className={clsx(generalStyles.rightSideSubTitle)}>
              Cố định
            </span>
            <ExpenseTable list={fixedCostList} showDeletion={false} />
          </div>
          <div className={styles.partThreeChild}>
            <span className={clsx(generalStyles.rightSideSubTitle)}>
              Lưu động
            </span>
            <ExpenseTable list={mobileCostList} showDeletion={false} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
