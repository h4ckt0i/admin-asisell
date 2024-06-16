import { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import ProgressChart from "~/components/chart/progressChart/progressChart";
import Loading from "~/components/loading/loading";
import { fetchApi } from "~/utils/common";
import * as productSlice from "~/store/common/slice/productSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function MostImportedProducts({ className }) {
  const [mostImportedProducts, setMostImportedProducts] = useState([]);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.product.loading);

  useEffect(() => {
    const getMostImportedProducts = () =>
      fetchApi(productSlice.getMostImportedProducts(), dispatch);

    getMostImportedProducts().then((result) => setMostImportedProducts(result));
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div
          className={clsx(
            generalStyles.rightSideSection,
            generalStyles.progressContainer,
            className
          )}
        >
          <span className={generalStyles.rightSideSubTitle}>
            Sản phẩm nhập nhiều nhất
          </span>
          {mostImportedProducts.map((item, index) => (
            <div className={generalStyles.progressBarContainer} key={index}>
              <div className={generalStyles.progressBar}>
                <div className={generalStyles.progressTitleContainer}>
                  <span className={generalStyles.progressTitle}>
                    {item.name}
                  </span>
                  <span className={generalStyles.percent}>
                    {item.percentage}%
                  </span>
                </div>
                <ProgressChart percent={item.percentage} />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default MostImportedProducts;
