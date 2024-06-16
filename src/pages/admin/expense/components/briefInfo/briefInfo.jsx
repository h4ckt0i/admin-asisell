import { useState, useEffect } from "react";
import BlockSection from "~/components/block/blockSection/blockSection";
import { iconsList, blockList } from "./index";

function BriefInfo({ expenseInfoList, className }) {
  const [expenseInfo, setExpenseInfo] = useState([]);

  useEffect(() => {}, []);

  useEffect(() => {
    const numbersList = expenseInfoList;

    const dataList = blockList.map((item, index) => ({
      ...item,
      number: numbersList[index],
    }));

    setExpenseInfo(dataList);
  }, [expenseInfoList]);

  return (
    <BlockSection
      className={className}
      list={expenseInfo}
      iconsList={iconsList}
    />
  );
}

export default BriefInfo;
