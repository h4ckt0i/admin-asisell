import { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import ProgressChart from "~/components/chart/progressChart/progressChart";
import Loading from "~/components/loading/loading";
import { fetchApi } from "~/utils/common";
import * as productSlice from "~/store/subWarehouseDetail/slice/productSlice";

import styles from "./mostImportedProducts.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function MostImportedProducts({ subWarehouseInfo, className }) {
  const [mostImportedProducts, setMostImportedProducts] = useState([]);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.product.loading);

  useEffect(() => {
    const getMostImportedProducts = () =>
      fetchApi(
        productSlice.getMostImportedProducts(subWarehouseInfo._id),
        dispatch
      );

    if (subWarehouseInfo._id) {
      getMostImportedProducts().then((result) =>
        setMostImportedProducts(result)
      );
    }
  }, [subWarehouseInfo]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div
          className={clsx(
            generalStyles.rightSideSection,
            styles.progressContainer,
            className
          )}
        >
          <span className={generalStyles.rightSideSubTitle}>
            Sản phẩm nhập nhiều nhất
          </span>
          {mostImportedProducts.map((item, index) => (
            <div className={styles.progressBarContainer} key={index}>
              <div className={styles.progressBar}>
                <div className={styles.progressTitleContainer}>
                  <span className={styles.progressTitle}>{item.name}</span>
                  <span className={styles.percent}>{item.percentage}%</span>
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
