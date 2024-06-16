import { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import BarChart from "~/components/chart/barChart/barChart";
import LineChart from "~/components/chart/lineChart/lineChart";
import { invoiceStats } from "./index";
import { formatNumber, getCurrentYear, fetchApi } from "~/utils/common";
import * as invoiceSlice from "~/store/common/slice/invoiceSlice";

import styles from "./exportGoods.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function ExportGoods({ className }) {
  const [retail, setRetail] = useState({});
  const [wholesale, setWholesale] = useState({});
  const [totalMonths, setTotalMonths] = useState([]);
  const [retailTotalList, setRetailTotalList] = useState([]);
  const [wholesaleTotalList, setWholesaleTotalList] = useState([]);

  const retailColor = invoiceStats[0].backgroundColor.chart;
  const wholesaleColor = invoiceStats[1].backgroundColor.chart;

  const dispatch = useDispatch();

  const barData = {
    labels: totalMonths,
    datasets: [
      {
        label: "",
        data: retailTotalList,
        borderWidth: 1,
        backgroundColor: retailColor,
      },
      {
        label: "",
        data: wholesaleTotalList,
        borderWidth: 1,
        backgroundColor: wholesaleColor,
      },
    ],
  };

  const lineData = {
    labels: totalMonths,
    datasets: [
      {
        label: "",
        data: retailTotalList,
        borderWidth: 2,
        borderColor: retailColor,
        backgroundColor: retailColor,
        cubicInterpolationMode: "monotone",
      },
      {
        label: "",
        data: wholesaleTotalList,
        borderWidth: 2,
        borderColor: wholesaleColor,
        backgroundColor: wholesaleColor,
        cubicInterpolationMode: "monotone",
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
    const year = getCurrentYear();

    const getTotalExportedInvoicesByYear = () =>
      fetchApi(invoiceSlice.getTotalExportedInvoicesByYear(year), dispatch);

    getTotalExportedInvoicesByYear().then((result) => {
      setRetail(result.retail);
      setWholesale(result.wholesale);
    });
  }, []);

  useEffect(() => {
    if (retail.monthly_total) {
      const monthlyList = retail.monthly_total.map(
        (item) =>
          `${
            item.month < 10 ? "0" + item.month : item.month
          }-${getCurrentYear()}`
      );
      const retailTotalList = retail.monthly_total.map((item) => item.total);

      setTotalMonths(monthlyList);
      setRetailTotalList(retailTotalList);
    }

    if (wholesale.monthly_total) {
      const wholesaleTotalList = wholesale.monthly_total.map(
        (item) => item.total
      );

      setWholesaleTotalList(wholesaleTotalList);
    }
  }, [retail, wholesale]);

  return (
    <div className={clsx(styles.container, className)}>
      <div
        className={clsx(generalStyles.rightSideSection, styles.chartSection)}
      >
        <div className={styles.invoice}>
          <span className={generalStyles.rightSideSubTitle}>
            Chi tiết xuất hàng
          </span>
        </div>
        <div className={styles.content}>
          <div className={styles.chart}>
            <BarChart data={barData} options={options} />
          </div>
          <ul className={clsx(generalStyles.list, styles.list)}>
            {invoiceStats.map((stat) => {
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
      <div
        className={clsx(generalStyles.rightSideSection, styles.chartSection)}
      >
        <div className={styles.invoice}>
          <span className={generalStyles.rightSideSubTitle}>
            So sánh nhập xuất
          </span>
        </div>
        <div className={styles.content}>
          <div className={styles.chart}>
            <LineChart data={lineData} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExportGoods;
