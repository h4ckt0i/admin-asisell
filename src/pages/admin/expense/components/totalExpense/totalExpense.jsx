import { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import BarChart from "~/components/chart/barChart/barChart";
import Loading from "~/components/loading/loading";
import { getCurrentYear, fetchApi } from "~/utils/common";
import * as expenseSlice from "~/store/common/slice/expenseSlice";

import styles from "./totalExpense.module.scss";
import variableStyles from "~/styles/_variables.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function TotalExpense({ className }) {
  const [fixedCost, setFixedCost] = useState({});
  const [mobileCost, setMobileCost] = useState({});
  const [totalMonths, setTotalMonths] = useState([]);
  const [fixedCostList, setFixedCostList] = useState([]);
  const [mobileCostList, setMobileCostList] = useState([]);

  const fixedColor = variableStyles.expenseChartColor;
  const mobileColor = variableStyles.secondChartColor;

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.expense.loading);

  const data = {
    labels: totalMonths,
    datasets: [
      {
        label: "Cố định",
        data: fixedCostList,
        borderWidth: 1,
        backgroundColor: fixedColor,
      },
      {
        label: "Lưu động",
        data: mobileCostList,
        borderWidth: 1,
        backgroundColor: mobileColor,
      },
    ],
  };

  const options = {};

  useEffect(() => {
    const year = getCurrentYear();

    const getYearlyTotal = () =>
      fetchApi(expenseSlice.getYearlyTotal(year), dispatch);

    getYearlyTotal().then((result) => {
      setFixedCost(result.fixed_cost);
      setMobileCost(result.mobile_cost);
    });
  }, []);

  useEffect(() => {
    if (fixedCost.monthly_total) {
      const monthlyList = fixedCost.monthly_total.map(
        (item) =>
          `${
            item.month < 10 ? "0" + item.month : item.month
          }-${getCurrentYear()}`
      );
      const fixedCostList = fixedCost.monthly_total.map((item) => item.total);

      setTotalMonths(monthlyList);
      setFixedCostList(fixedCostList);
    }

    if (mobileCost.monthly_total) {
      const mobileCostList = mobileCost.monthly_total.map((item) => item.total);

      setMobileCostList(mobileCostList);
    }
  }, [fixedCost, mobileCost]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div
          className={clsx(
            generalStyles.rightSideSection,
            styles.container,
            className
          )}
        >
          <div className={styles.revenue}>
            <span className={generalStyles.rightSideSubTitle}>Chi phí</span>
          </div>
          <div className={styles.chart}>
            <BarChart data={data} options={options} />
          </div>
        </div>
      )}
    </>
  );
}

export default TotalExpense;
