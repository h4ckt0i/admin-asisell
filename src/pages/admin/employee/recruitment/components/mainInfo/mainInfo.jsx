import { useState, useEffect } from "react";
import clsx from "clsx";
import InputSection from "~/components/section/inputSection/inputSection";
import DateChoice from "~/components/dateChoice/dateChoice";
import GenderChoice from "../genderChoice/genderChoice";
import PositionSelection from "../selection/positionSelection/positionSelection";
import WorkFormSelection from "../selection/workFormSelection/workFormSelection";
import SubWarehouseSelection from "~/components/selection/subWarehouseSelection/subWarehouseSelection";
import { genders } from "../genderChoice/index";

import styles from "./mainInfo.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function MainInfo({ setMainInfo, isDisabled, className }) {
  const [name, setName] = useState("");
  const [identityId, setIdentityId] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [birthday, setBirthday] = useState("");
  const [workingDate, setWorkingDate] = useState("");
  const [position, setPosition] = useState({});
  const [workForm, setWorkForm] = useState({});
  const [subWarehouse, setSubWarehouse] = useState({});
  const [gender, setGender] = useState(genders[0].name);

  const handlePhone = (value) => {
    if (value.length <= 10) {
      setPhone(value);
    }
  };

  useEffect(() => {
    setMainInfo({
      name,
      identity_id: identityId,
      phone,
      email,
      birthday,
      gender,
      position,
      department,
      working_date: workingDate,
      work_form: workForm,
      sub_warehouse: subWarehouse,
    });
  }, [
    name,
    identityId,
    phone,
    email,
    birthday,
    gender,
    position,
    department,
    workingDate,
    workForm,
    subWarehouse,
  ]);

  return (
    <div className={clsx(styles.container, className)}>
      <div className={generalStyles.rightSideDoubleInputSection}>
        <InputSection
          className={generalStyles.rightSideInputSection}
          title="Nhân viên"
          placeholder="Nhập tên nhân viên"
          value={name}
          setState={setName}
          isDisabled={isDisabled}
        />
        <InputSection
          className={generalStyles.rightSideInputSection}
          title="CMND/CCCD"
          placeholder="Nhập CMND/CCCD"
          value={identityId}
          setState={setIdentityId}
          isDisabled={isDisabled}
        />
      </div>
      <div className={generalStyles.rightSideDoubleInputSection}>
        <InputSection
          className={generalStyles.rightSideInputSection}
          title="Số điện thoại"
          type="number"
          placeholder="Nhập số điện thoại"
          value={phone}
          setState={handlePhone}
          isDisabled={isDisabled}
        />
        <InputSection
          className={generalStyles.rightSideInputSection}
          title="Email"
          placeholder="Nhập email"
          value={email}
          setState={setEmail}
          isDisabled={isDisabled}
        />
      </div>
      <div className={generalStyles.rightSideDoubleInputSection}>
        <PositionSelection setPosition={setPosition} isDisabled={isDisabled} />
        <InputSection
          className={generalStyles.rightSideInputSection}
          title="Phòng ban"
          placeholder="Nhập phòng ban"
          value={department}
          setState={setDepartment}
          isDisabled={isDisabled}
        />
      </div>
      <div className={generalStyles.rightSideDoubleInputSection}>
        <WorkFormSelection setWorkForm={setWorkForm} isDisabled={isDisabled} />
        <DateChoice
          className={styles.dateChoice}
          title="Ngày bắt đầu làm việc"
          setDateTime={setWorkingDate}
          isDisabled={isDisabled}
        />
      </div>
      <div className={generalStyles.rightSideDoubleInputSection}>
        <DateChoice
          className={styles.dateChoice}
          title="Ngày sinh"
          setDateTime={setBirthday}
          isDisabled={isDisabled}
        />
        <GenderChoice
          className={generalStyles.rightSideInputSection}
          setGender={setGender}
          isDisabled={isDisabled}
        />
      </div>
      <SubWarehouseSelection
        title="Nhân viên thuộc kho"
        setSubWarehouse={setSubWarehouse}
        isDisabled={isDisabled}
      />
    </div>
  );
}

export default MainInfo;
