import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Loading from "~/components/loading/loading";
import BlockSection from "~/components/block/blockSection/blockSection";
import { iconsList, blockList } from "./index";

function BriefInfo({ expenseInfoList, className }) {
  const [expenseInfo, setExpenseInfo] = useState([]);

  const loading = useSelector((state) => state.expense.loading);

  useEffect(() => {
    const numbersList = expenseInfoList;

    const dataList = blockList.map((item, index) => ({
      ...item,
      number: numbersList[index],
    }));

    setExpenseInfo(dataList);
  }, [expenseInfoList]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <BlockSection
          className={className}
          list={expenseInfo}
          iconsList={iconsList}
        />
      )}
    </>
  );
}

export default BriefInfo;
