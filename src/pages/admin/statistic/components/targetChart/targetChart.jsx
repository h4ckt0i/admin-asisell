import { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import Loading from "~/components/loading/loading";
import BarChart from "~/components/chart/barChart/barChart";
import { revenueStats } from "./index";
import { formatNumber, getCurrentYear, fetchApi } from "~/utils/common";
import * as orderSlice from "~/store/common/slice/orderSlice";
import * as targetSlice from "~/store/common/slice/targetSlice";

import styles from "./targetChart.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function TargetChart({ className }) {
  const [monthsList, setMonthsList] = useState([]);
  const [totalMonths, setTotalMonths] = useState([]);
  const [monthlyRevenue, setMonthlyRevenue] = useState([]);
  const [monthlyTarget, setMonthlyTarget] = useState([]);

  const realityColor = revenueStats[0].backgroundColor.chart;
  const targetColor = revenueStats[1].backgroundColor.chart;

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.order.loading);

  const data = {
    labels: totalMonths,
    datasets: [
      {
        label: "",
        data: monthlyRevenue,
        borderWidth: 1,
        backgroundColor: realityColor,
      },
      {
        label: "",
        data: monthlyTarget,
        borderWidth: 1,
        backgroundColor: targetColor,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  useEffect(() => {
    const getRevenueByYear = () =>
      fetchApi(orderSlice.getRevenueByYear(getCurrentYear()), dispatch);
    const getYearlyTarget = () => fetchApi(targetSlice.getAll(), dispatch);

    getRevenueByYear().then((result) => {
      const monthlyRevenue = result.monthly_revenue.map(
        (target) => target.revenue
      );

      revenueStats[0].number = result.total_revenue;

      setMonthsList(result.monthly_revenue);
      setMonthlyRevenue(monthlyRevenue);
    });

    getYearlyTarget().then((result) => {
      if (result.length !== 0) {
        const monthlyTarget = result[0].monthly_revenue.map(
          (target) => target.revenue
        );

        revenueStats[1].number = result[0].total_revenue;

        setMonthlyTarget(monthlyTarget);
      }
    });
  }, []);

  useEffect(() => {
    const monthlyList = monthsList.map(
      (item) =>
        `${item.month < 10 ? "0" + item.month : item.month}-${getCurrentYear()}`
    );

    setTotalMonths(monthlyList);
  }, [monthsList]);

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
            <span className={generalStyles.rightSideSubTitle}>
              Doanh thu mục tiêu và thực tế
            </span>
          </div>
          <div className={styles.content}>
            <div className={styles.chart}>
              <BarChart data={data} options={options} />
            </div>
            <ul className={clsx(generalStyles.list, styles.list)}>
              {revenueStats.map((stat) => {
                const Icon = stat.icon;
                const backgroundColor = stat.backgroundColor;

                return (
                  <div className={styles.textItem} key={stat.id}>
                    <div
                      className={styles.iconContainer}
                      style={{ backgroundColor: backgroundColor.label }}
                    >
                      <Icon className={styles.icon} />
                    </div>
                    <div className={styles.labelContainer}>
                      <span className={styles.label}>{stat.label}</span>
                      <span
                        className={styles.number}
                        style={{
                          fontWeight: "600",
                          color: backgroundColor.chart,
                        }}
                      >
                        {formatNumber(stat.number)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default TargetChart;
