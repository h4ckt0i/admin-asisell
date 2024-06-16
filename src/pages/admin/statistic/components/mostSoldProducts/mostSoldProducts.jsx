import { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import ProgressChart from "~/components/chart/progressChart/progressChart";
import { fetchApi } from "~/utils/common";
import * as productSlice from "~/store/common/slice/productSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function MostSoldProducts({ className }) {
  const [mostSoldProducts, setMostSoldProducts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const getMostSoldProducts = () =>
      fetchApi(productSlice.getMostSoldProducts(), dispatch);

    getMostSoldProducts().then((result) => setMostSoldProducts(result));
  }, []);

  return (
    <div
      className={clsx(
        generalStyles.rightSideSection,
        generalStyles.progressContainer,
        className
      )}
    >
      <span className={generalStyles.rightSideSubTitle}>
        Sản phẩm bán nhiều nhất
      </span>
      {mostSoldProducts.map((item, index) => (
        <div className={generalStyles.progressBarContainer} key={index}>
          <div className={generalStyles.progressBar}>
            <div className={generalStyles.progressTitleContainer}>
              <span className={generalStyles.progressTitle}>{item.name}</span>
              <span className={generalStyles.percent}>{item.percentage}%</span>
            </div>
            <ProgressChart percent={item.percentage} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default MostSoldProducts;
