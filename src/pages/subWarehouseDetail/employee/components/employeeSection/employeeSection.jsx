import { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import Loading from "~/components/loading/loading";
import EmployeeInfo from "./employeeInfo/employeeInfo";
import { fetchApi } from "~/utils/common";
import * as employeeSlice from "~/store/subWarehouseDetail/slice/employeeSlice";

import styles from "./employeeSection.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function EmployeeSection({ subWarehouseInfo, limit = null, className }) {
  const [employees, setEmployees] = useState([]);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.employee.loading);

  useEffect(() => {
    const subWarehouseId = subWarehouseInfo._id;
    const getAll = () =>
      fetchApi(employeeSlice.getAll(subWarehouseId), dispatch);

    if (subWarehouseId) {
      getAll().then((result) => {
        const newEmployeesList = result.filter(
          (result, index) => index < limit
        );
        limit ? setEmployees(newEmployeesList) : setEmployees(result);
      });
    }
  }, [subWarehouseInfo]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ul className={clsx(generalStyles.list, styles.container, className)}>
          {employees.map((employee, index) => (
            <EmployeeInfo
              className={styles.employeeInfo}
              employeeInfo={employee}
              key={index}
            />
          ))}
        </ul>
      )}
    </>
  );
}

export default EmployeeSection;
