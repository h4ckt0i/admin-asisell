import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import SelectSection from "~/components/section/selectSection/selectSection";
import { fetchApi, formatOptionSelection } from "~/utils/common";
import * as employeeSlice from "~/store/common/slice/employeeSlice";

function HandlerSelection({
  title,
  placeholder,
  setHandler,
  isDisabled,
  className,
}) {
  const [employees, setEmployees] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const getAll = () => fetchApi(employeeSlice.getAll(), dispatch);

    getAll().then((result) => {
      const employees = formatOptionSelection(result);
      setEmployees(employees);
    });
  }, []);

  return (
    <SelectSection
      className={className}
      title={title}
      placeholder={placeholder}
      options={employees}
      setState={setHandler}
      isDisabled={isDisabled}
    />
  );
}

export default HandlerSelection;
