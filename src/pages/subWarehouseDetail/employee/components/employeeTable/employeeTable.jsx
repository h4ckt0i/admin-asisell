import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "~/components/loading/loading";
import TableSection from "~/components/table/tableSection/tableSection";
import { headerTable } from "./index";
import { sortListByIndex, fetchApi, isNullField } from "~/utils/common";
import * as employeeSlice from "~/store/subWarehouseDetail/slice/employeeSlice";

function EmployeeTable({ subWarehouseInfo, className }) {
  const [employees, setEmployees] = useState([]);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.employee.loading);

  useEffect(() => {
    const subWarehouseId = subWarehouseInfo._id;

    const getAll = () =>
      fetchApi(employeeSlice.getAll(subWarehouseId), dispatch);

    if (subWarehouseId) {
      getAll().then((result) => sortListByIndex(result, setEmployees));
    }
  }, [subWarehouseInfo]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <TableSection
          className={className}
          headerTable={headerTable}
          bodyTable={employees.map((employee, index) => {
            return (
              <tr key={index}>
                <td>{isNullField(employee.name)}</td>
                <td>{isNullField(employee.birthday)}</td>
                <td>{isNullField(employee.identity_id)}</td>
                <td>{isNullField(employee.working_date)}</td>
                <td>
                  {isNullField(employee.position && employee.position.label)}
                </td>
                <td>{isNullField(employee.phone)}</td>
                <td>{isNullField(employee.email)}</td>
                <td>{isNullField(employee.address)}</td>
              </tr>
            );
          })}
          listTable={employees}
          emptyTitle="Hiện chưa có nhân sự nào"
        />
      )}
    </>
  );
}

export default EmployeeTable;
