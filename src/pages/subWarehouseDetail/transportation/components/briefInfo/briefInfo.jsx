import { useState, useEffect } from "react";
import BlockSection from "~/components/block/blockSection/blockSection";
import { iconsList, blockList } from "./index";

function BriefInfo({ numbersList, className }) {
  const [ordersInfoList, setOrdersInfoList] = useState([]);

  useEffect(() => {
    const dataList = blockList.map((item, index) => ({
      ...item,
      number: numbersList[index],
    }));

    setOrdersInfoList(dataList);
  }, [numbersList]);

  return (
    <BlockSection
      className={className}
      list={ordersInfoList}
      iconsList={iconsList}
    />
  );
}

export default BriefInfo;
