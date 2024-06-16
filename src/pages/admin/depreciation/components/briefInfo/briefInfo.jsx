import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import BlockSection from "~/components/block/blockSection/blockSection";
import { iconsList, blockList } from "./index";
import { fetchApi } from "~/utils/common";
import * as depreciationSlice from "~/store/common/slice/depreciationSlice";

function BriefInfo({ className }) {
  const [depreciationsInfoList, setDepreciationsInfoList] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [totalMonthlyCost, setTotalMonthlyCost] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalCompletedProducts, setTotalCompletedProducts] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    const getTotalDepreciationCost = () =>
      fetchApi(depreciationSlice.getTotalDepreciationCost(), dispatch);
    const getTotalMonthlyDepreciationCost = () =>
      fetchApi(depreciationSlice.getTotalMonthlyDepreciationCost(), dispatch);
    const getTotalProducts = () =>
      fetchApi(depreciationSlice.getTotalProducts(), dispatch);
    const getTotalCompletedProducts = () =>
      fetchApi(depreciationSlice.getTotalCompletedProducts(), dispatch);

    getTotalDepreciationCost().then((result) =>
      setTotalCost(result.total_depreciations_cost)
    );
    getTotalMonthlyDepreciationCost().then((result) =>
      setTotalMonthlyCost(result.total_depreciations_cost)
    );
    getTotalProducts().then((result) =>
      setTotalProducts(result.total_depreciated_quantity)
    );
    getTotalCompletedProducts().then((result) =>
      setTotalCompletedProducts(result.total_depreciated_quantity)
    );
  }, []);

  useEffect(() => {
    const numbersList = [
      totalCost,
      totalMonthlyCost,
      totalProducts,
      totalCompletedProducts,
    ];

    const dataList = blockList.map((item, index) => ({
      ...item,
      number: numbersList[index],
    }));

    setDepreciationsInfoList(dataList);
  }, [totalCost, totalMonthlyCost, totalProducts, totalCompletedProducts]);

  return (
    <BlockSection
      className={className}
      list={depreciationsInfoList}
      iconsList={iconsList}
    />
  );
}

export default BriefInfo;
