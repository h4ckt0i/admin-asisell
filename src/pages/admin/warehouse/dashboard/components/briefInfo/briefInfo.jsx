import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import BlockSection from "~/components/block/blockSection/blockSection";
import { iconsList, blockList } from "./index";
import { fetchApi } from "~/utils/common";
import * as productSlice from "~/store/common/slice/productSlice";

function BriefInfo() {
  const [productsInfoList, setProductsInfoList] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalGifts, setTotalGifts] = useState(0);
  const [totalNewProducts, setTotalNewProducts] = useState(0);
  const [totalNewGifts, setTotalNewGifts] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    const getTotalProducts = () =>
      fetchApi(productSlice.getTotalProducts(), dispatch);
    const getTotalGifts = () =>
      fetchApi(productSlice.getTotalGifts(), dispatch);
    const getTotalNewProducts = () =>
      fetchApi(productSlice.getTotalNewProducts(), dispatch);
    const getTotalNewGifts = () =>
      fetchApi(productSlice.getTotalNewGifts(), dispatch);

    getTotalProducts().then((result) =>
      setTotalProducts(result.total_products)
    );
    getTotalGifts().then((result) => setTotalGifts(result.total_gifts));
    getTotalNewProducts().then((result) =>
      setTotalNewProducts(result.total_new_products)
    );
    getTotalNewGifts().then((result) =>
      setTotalNewGifts(result.total_new_products)
    );
  }, []);

  useEffect(() => {
    const numbersList = [
      totalProducts,
      totalNewProducts,
      totalGifts,
      totalNewGifts,
    ];

    const dataList = blockList.map((item, index) => ({
      ...item,
      number: numbersList[index],
    }));

    setProductsInfoList(dataList);
  }, [totalProducts, totalGifts, totalNewProducts, totalNewGifts]);

  return <BlockSection list={productsInfoList} iconsList={iconsList} />;
}

export default BriefInfo;
