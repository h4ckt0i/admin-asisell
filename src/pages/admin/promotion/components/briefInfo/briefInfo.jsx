import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import BlockSection from "~/components/block/blockSection/blockSection";
import { iconsList, blockList } from "./index";
import { fetchApi } from "~/utils/common";
import * as promotionSlice from "~/store/common/slice/promotionSlice";

function BriefInfo() {
  const [promotionInfoList, setPromotionInfoList] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [totalProfit, setTotalProfit] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    const getTotalRevenue = () =>
      fetchApi(promotionSlice.getTotalRevenue(), dispatch);
    const getTotalProfit = () =>
      fetchApi(promotionSlice.getTotalProfit(), dispatch);
    const getTotalProduct = () =>
      fetchApi(promotionSlice.getTotalProducts(), dispatch);

    getTotalRevenue().then((result) => setTotalRevenue(result.total_revenue));
    getTotalProfit().then((result) => setTotalProfit(result.total_profit));
    getTotalProduct().then((result) =>
      setTotalProducts(result.total_product_quantity)
    );
  }, []);

  useEffect(() => {
    const numbersList = [totalRevenue, totalProfit, totalProducts];

    const dataList = blockList.map((item, index) => ({
      ...item,
      number: numbersList[index],
    }));

    setPromotionInfoList(dataList);
  }, [totalRevenue, totalProfit, totalProducts]);

  return <BlockSection list={promotionInfoList} iconsList={iconsList} />;
}

export default BriefInfo;
