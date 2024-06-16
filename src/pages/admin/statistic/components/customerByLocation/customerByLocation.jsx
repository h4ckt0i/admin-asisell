import { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import LineChart from "~/components/chart/lineChart/lineChart";
import { fetchApi } from "~/utils/common";
import * as userSlice from "~/store/common/slice/userSlice";

import styles from "./customerByLocation.module.scss";
import variableStyles from "~/styles/_variables.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function CustomerByLocation({ className }) {
  const [customers, setCustomers] = useState([]);
  const [locations, setLocations] = useState([]);

  const dispatch = useDispatch();

  const chartColor = variableStyles.chartColor;

  const data = {
    labels: locations,
    datasets: [
      {
        label: "",
        data: customers,
        borderWidth: 2,
        borderColor: chartColor,
        backgroundColor: chartColor,
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
    const getAllCustomersByLocation = () =>
      fetchApi(userSlice.getAllCustomersByLocation(), dispatch);

    getAllCustomersByLocation().then((result) => {
      const replaceString = (item, string) => item.replace(string, "").trim();

      const currentCustomers = result.map((item) => item.total_user);
      const currentLocations = result.map((item) => item.province);
      const newLocations = currentLocations.map((location) =>
        location.startsWith("Thành phố")
          ? replaceString(location, "Thành phố")
          : location.startsWith("Tỉnh")
          ? replaceString(location, "Tỉnh")
          : location
      );

      setCustomers(currentCustomers);
      setLocations(newLocations);
    });
  }, []);

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
          Khách hàng theo khu vực
        </span>
      </div>
      <div className={styles.content}>
        <div className={styles.chart}>
          <LineChart data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

export default CustomerByLocation;
