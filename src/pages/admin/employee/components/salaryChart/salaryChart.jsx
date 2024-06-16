import { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import BarChart from "~/components/chart/barChart/barChart";
import Loading from "~/components/loading/loading";
import { getCurrentYear, fetchApi } from "~/utils/common";
import * as salarySlice from "~/store/common/slice/salarySlice";

import styles from "./salaryChart.module.scss";
import variableStyles from "~/styles/_variables.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function SalaryChart({ className }) {
  const [salary, setSalary] = useState({});
  const [bonus, setBonus] = useState({});
  const [totalMonths, setTotalMonths] = useState([]);
  const [totalSalariesList, setTotalSalariesList] = useState([]);
  const [totalBonusList, setTotalBonusList] = useState([]);

  const salaryColor = variableStyles.chartColor;
  const bonusColor = variableStyles.secondChartColor;

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.salary.loading);

  const data = {
    labels: totalMonths,
    datasets: [
      {
        label: "Lương",
        data: totalSalariesList,
        borderWidth: 1,
        backgroundColor: salaryColor,
      },
      {
        label: "Thưởng",
        data: totalBonusList,
        borderWidth: 1,
        backgroundColor: bonusColor,
      },
    ],
  };

  const options = {};

  useEffect(() => {
    const year = getCurrentYear();

    const getYearlySalaries = () =>
      fetchApi(salarySlice.getYearlySalaries(year), dispatch);

    getYearlySalaries().then((result) => {
      setSalary(result.salaries);
      setBonus(result.bonuses);
    });
  }, []);

  useEffect(() => {
    if (salary.monthly_salaries) {
      const monthlyList = salary.monthly_salaries.map(
        (item) =>
          `${
            item.month < 10 ? "0" + item.month : item.month
          }-${getCurrentYear()}`
      );
      const totalSalariesList = salary.monthly_salaries.map(
        (item) => item.total
      );
      setTotalMonths(monthlyList);
      setTotalSalariesList(totalSalariesList);
    }
    if (bonus.monthly_bonuses) {
      const totalBonusesList = bonus.monthly_bonuses.map((item) => item.total);
      setTotalBonusList(totalBonusesList);
    }
  }, [salary, bonus]);

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
          <div className={styles.header}>
            <span className={generalStyles.rightSideSubTitle}>
              Lương/thưởng
            </span>
          </div>
          <div className={styles.chart}>
            <BarChart data={data} options={options} />
          </div>
        </div>
      )}
    </>
  );
}

export default SalaryChart;
