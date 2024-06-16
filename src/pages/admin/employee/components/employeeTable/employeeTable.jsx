import { useEffect, useState } from "react";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import Loading from "~/components/loading/loading";
import IconButton from "~/components/iconButton/iconButton";
import TableSection from "~/components/table/tableSection/tableSection";
import RedTrashIcon from "~/assets/icons/redTrashIcon";
import { headerTable, workFormEmployee } from "./index";
import { sortListByIndex, fetchApi, isNullField } from "~/utils/common";
import * as employeeSlice from "~/store/common/slice/employeeSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function EmployeeTable({ showDeletion = false, className }) {
  const [employees, setEmployees] = useState([]);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.employee.loading);

  const deleteEmployee = (id) => {
    const deleteObject = () =>
      fetchApi(employeeSlice.deleteEmployee(id), dispatch);

    deleteObject().then(() => {
      const newEmployees = employees.filter((employee) => employee._id !== id);

      setEmployees(newEmployees);
    });
  };

  useEffect(() => {
    const getAll = () => fetchApi(employeeSlice.getAll(), dispatch);

    getAll().then((result) => sortListByIndex(result, setEmployees));
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <TableSection
          className={className}
          headerTable={headerTable}
          bodyTable={employees.map((employee, index) => {
            const position = employee.position;
            const workingDate = employee.working_date;
            const workForm = employee.work_form;

            return (
              <tr key={index}>
                <td>{isNullField(employee.name)}</td>
                <td>{isNullField(employee.birthday)}</td>
                <td>{isNullField(employee.identity_id)}</td>
                <td>{isNullField(workingDate && workingDate.start)}</td>
                <td>{isNullField(workingDate && workingDate.end)}</td>
                <td>{isNullField(position && position.label)}</td>
                <td
                  className={clsx(
                    workForm.value === workFormEmployee[0].value
                      ? generalStyles.successful
                      : generalStyles.shipping
                  )}
                >
                  {isNullField(workForm && workForm.label)}
                </td>
                <td>{isNullField(employee.phone)}</td>
                <td>{isNullField(employee.email)}</td>
                <td>{isNullField(employee.address)}</td>
                {showDeletion && (
                  <td>
                    <div className={generalStyles.action}>
                      <IconButton
                        className={generalStyles.actionBtn}
                        onClick={() => deleteEmployee(employee._id)}
                      >
                        <RedTrashIcon className={generalStyles.actionIcon} />
                      </IconButton>
                    </div>
                  </td>
                )}
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
