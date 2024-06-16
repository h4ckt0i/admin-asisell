import { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import BarChart from "~/components/chart/barChart/barChart";
import {
  convertCurrency,
  getCurrentMonth,
  getCurrentYear,
  fetchApi,
} from "~/utils/common";
import * as orderSlice from "~/store/common/slice/orderSlice";

import styles from "./yearlyRevenue.module.scss";
import variableStyles from "~/styles/_variables.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function YearlyRevenue({ className }) {
  const [yearlyRevenue, setYearlyRevenue] = useState(0);
  const [monthsList, setMonthsList] = useState([]);
  const [totalMonths, setTotalMonths] = useState([]);
  const [monthlyRevenueList, setMonthlyRevenueList] = useState([]);

  const chartColor = variableStyles.chartColor;

  const dispatch = useDispatch();

  const data = {
    labels: totalMonths,
    datasets: [
      {
        label: "Tổng doanh thu",
        data: monthlyRevenueList,
        borderWidth: 1,
        backgroundColor: chartColor,
      },
    ],
  };

  const options = {};

  useEffect(() => {
    const time = {
      month: getCurrentMonth(),
      year: getCurrentYear(),
    };

    const getRevenueByYear = () =>
      fetchApi(orderSlice.getRevenueByYear(time.year), dispatch);

    getRevenueByYear().then((result) => {
      setYearlyRevenue(result.total_revenue);
      setMonthsList(result.monthly_revenue);
    });
  }, []);

  useEffect(() => {
    const monthlyList = monthsList.map(
      (item) =>
        `${item.month < 10 ? "0" + item.month : item.month}-${getCurrentYear()}`
    );
    const monthlyRevenueList = monthsList.map((item) => item.revenue);

    setTotalMonths(monthlyList);
    setMonthlyRevenueList(monthlyRevenueList);
  }, [monthsList]);

  return (
    <div
      className={clsx(
        generalStyles.rightSideSection,
        styles.container,
        className
      )}
    >
      <div className={styles.revenue}>
        <span className={generalStyles.rightSideSubTitle}>
          Tổng doanh thu năm
        </span>
        <span className={styles.revenueText}>
          {convertCurrency(yearlyRevenue)}
        </span>
      </div>
      <div className={styles.chart}>
        <BarChart data={data} options={options} />
      </div>
    </div>
  );
}

export default YearlyRevenue;
