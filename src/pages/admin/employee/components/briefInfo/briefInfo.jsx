import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import BlockSection from "~/components/block/blockSection/blockSection";
import { iconsList, blockList } from "./index";
import { fetchApi } from "~/utils/common";
import * as employeeSlice from "~/store/common/slice/employeeSlice";

function BriefInfo() {
  const [employeesInfoList, setEmployeesInfoList] = useState([]);
  const [totalEmployees, setTotalEmployees] = useState(0);
  const [totalManagers, setTotalManagers] = useState(0);
  const [totalStaff, setTotalStaff] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    const getTotalEmployees = () =>
      fetchApi(employeeSlice.getTotalEmployees(), dispatch);
    const getAllManagers = () =>
      fetchApi(employeeSlice.getAllManagers(), dispatch);
    const getAllStaff = () => fetchApi(employeeSlice.getAllStaff(), dispatch);

    getTotalEmployees().then((result) =>
      setTotalEmployees(result.total_employees)
    );
    getAllManagers().then((result) => setTotalManagers(result.total_employees));
    getAllStaff().then((result) => setTotalStaff(result.total_employees));
  }, []);

  useEffect(() => {
    const numbersList = [totalEmployees, totalManagers, totalStaff];

    const dataList = blockList.map((item, index) => ({
      ...item,
      number: numbersList[index],
    }));

    setEmployeesInfoList(dataList);
  }, [totalEmployees, totalManagers, totalStaff]);

  return <BlockSection list={employeesInfoList} iconsList={iconsList} />;
}

export default BriefInfo;
