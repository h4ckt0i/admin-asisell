import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import SelectSection from "~/components/section/selectSection/selectSection";
import { fetchApi } from "~/utils/common";
import * as employeeSlice from "~/store/common/slice/employeeSlice";

function EmployeeSelection({ isDisabled, setEmployee, className }) {
  const [employees, setEmployees] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const getAll = () => fetchApi(employeeSlice.getAll(), dispatch);

    getAll().then((result) => {
      const employees = result.map((item) => ({ ...item, label: item.name }));
      setEmployees(employees);
    });
  }, []);

  return (
    <SelectSection
      className={className}
      title="Tên nhân viên"
      placeholder="Chọn nhân viên"
      options={employees}
      setState={setEmployee}
      isDisabled={isDisabled}
    />
  );
}

export default EmployeeSelection;
