import { useState, useEffect } from "react";
import clsx from "clsx";
import InputSection from "~/components/section/inputSection/inputSection";
import EmployeeSelection from "~/components/selection/employeeSelection/employeeSelection";
import { convertCurrency } from "~/utils/common";

import generalStyles from "~/styles/generalStyle.module.scss";

function EmployeeSection({ isDisabled, setEmployeeSalary, className }) {
  const [employee, setEmployee] = useState({});
  const [title, setTitle] = useState("");
  const [salary, setSalary] = useState();
  const [bonus, setBonus] = useState();
  const [salaryCut, setSalaryCut] = useState();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(+salary + +bonus - +salaryCut);

    setEmployeeSalary({
      employee: employee._id,
      salaryInfo: {
        title,
        fixed_salary: +salary,
        bonus: +bonus,
        salary_cut: +salaryCut,
        total: +total,
      },
    });
  }, [employee, title, salary, bonus, salaryCut, total]);

  return (
    <div className={className}>
      <EmployeeSelection
        className={generalStyles.rightSideInputSectionTwo}
        title="Nhân viên"
        placeholder="Chọn nhân viên"
        setEmployee={setEmployee}
        isDisabled={isDisabled}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Mã nhân viên"
        value={employee.code || ""}
        defaultDisabled={true}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Tiêu đề"
        placeholder="Nhập tiêu đề"
        value={title}
        setState={setTitle}
        isDisabled={isDisabled}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Lương"
        type="number"
        placeholder="Nhập lương"
        value={salary}
        setState={setSalary}
        isDisabled={isDisabled}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Thưởng"
        type="number"
        placeholder="Nhập thưởng"
        value={bonus}
        setState={setBonus}
        isDisabled={isDisabled}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Trừ"
        type="number"
        placeholder="Nhập khoảng bị trừ"
        value={salaryCut}
        setState={setSalaryCut}
        isDisabled={isDisabled}
      />
      <InputSection
        className={clsx(
          generalStyles.rightSideInputSectionTwo,
          generalStyles.total
        )}
        title="Tổng lương"
        value={convertCurrency(total)}
        setState={setSalaryCut}
        defaultDisabled={true}
      />
    </div>
  );
}

export default EmployeeSection;
