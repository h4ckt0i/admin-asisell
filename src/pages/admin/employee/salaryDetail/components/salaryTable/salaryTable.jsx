import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "~/components/loading/loading";
import TableSection from "~/components/table/tableSection/tableSection";
import { headerTable } from "./index";
import {
  convertTime,
  getCurrentYear,
  convertCurrency,
  fetchApi,
  isNullField,
} from "~/utils/common";
import * as salarySlice from "~/store/common/slice/salarySlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function SalaryTable({ employeeId, className }) {
  const [salaries, setSalaries] = useState([]);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.salary.loading);

  const currentYear = getCurrentYear();

  useEffect(() => {
    const data = {
      id: employeeId,
      year: currentYear,
    };

    const getDetail = () =>
      fetchApi(salarySlice.getDetailYearlyEmployeeSalaries(data), dispatch);

    employeeId &&
      getDetail().then(
        (result) => result && setSalaries(result.monthly_salaries)
      );
  }, [employeeId]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <TableSection
          className={className}
          headerTable={headerTable}
          bodyTable={salaries.map((salary, index) => {
            const month = salary.month;
            const date = salary.date;

            return (
              <tr key={index}>
                <td>
                  {month < 10
                    ? `0${month}/${currentYear}`
                    : `${month}/${currentYear}`}
                </td>
                <td>{isNullField(date && convertTime(date))}</td>
                <td>{isNullField(salary.title)}</td>
                <td>{isNullField(convertCurrency(salary).fixed_salary)}</td>
                <td>{isNullField(convertCurrency(salary).bonus)}</td>
                <td>{isNullField(convertCurrency(salary).salary_cut)}</td>
                <td className={generalStyles.canceled}>
                  {isNullField(convertCurrency(salary.total))}
                </td>
              </tr>
            );
          })}
          listTable={salaries}
          showPagination={false}
          emptyTitle="Chọn nhân viên để xem chi tiết lương"
        />
      )}
    </>
  );
}

export default SalaryTable;
