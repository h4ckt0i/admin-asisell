import { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import BarChart from "~/components/chart/barChart/barChart";
import { getCurrentYear, fetchApi } from "~/utils/common";
import * as invoiceSlice from "~/store/common/slice/invoiceSlice";

import styles from "./importAndExportGoods.module.scss";
import variableStyles from "~/styles/_variables.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function ImportAndExportGoods({ className }) {
  const [imported, setImported] = useState({});
  const [exported, setExported] = useState({});
  const [totalMonths, setTotalMonths] = useState([]);
  const [importedTotalList, setImportedTotalList] = useState([]);
  const [exportedTotalList, setExportedTotalList] = useState([]);

  const importColor = variableStyles.chartColor;
  const exportColor = variableStyles.secondChartColo;

  const dispatch = useDispatch();

  const data = {
    labels: totalMonths,
    datasets: [
      {
        label: "Nhập",
        data: importedTotalList,
        borderWidth: 1,
        backgroundColor: importColor,
      },
      {
        label: "Xuất",
        data: exportedTotalList,
        borderWidth: 1,
        backgroundColor: exportColor,
      },
    ],
  };

  const options = {};

  useEffect(() => {
    const year = getCurrentYear();

    const getTotalExportedAndImportedInvoicesByYear = () =>
      fetchApi(
        invoiceSlice.getTotalExportedAndImportedInvoicesByYear(year),
        dispatch
      );

    getTotalExportedAndImportedInvoicesByYear().then((result) => {
      setImported(result.import);
      setExported(result.export);
    });
  }, []);

  useEffect(() => {
    if (imported.monthly_total) {
      const monthlyList = imported.monthly_total.map(
        (item) =>
          `${
            item.month < 10 ? "0" + item.month : item.month
          }-${getCurrentYear()}`
      );
      const importedTotalList = imported.monthly_total.map(
        (item) => item.total
      );

      setTotalMonths(monthlyList);
      setImportedTotalList(importedTotalList);
    }

    if (exported.monthly_total) {
      const exportedTotalList = exported.monthly_total.map(
        (item) => item.total
      );

      setExportedTotalList(exportedTotalList);
    }
  }, [imported, exported]);

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
          Nhập & xuất hàng
        </span>
      </div>
      <div className={styles.chart}>
        <BarChart data={data} options={options} />
      </div>
    </div>
  );
}

export default ImportAndExportGoods;
