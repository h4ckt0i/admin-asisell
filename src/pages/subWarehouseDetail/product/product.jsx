import { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import Loading from "~/components/loading/loading";
import BriefInfo from "../dashboard/components/briefInfo/briefInfo";
import ProductTable from "~/components/table/productTable/productTable";
import { fetchApi } from "~/utils/common";
import * as productSlice from "~/store/subWarehouseDetail/slice/productSlice";

import styles from "./product.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function Product({ subWarehouse }) {
  const [products, setProducts] = useState([]);
  const [gifts, setGifts] = useState([]);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.product.loading);

  useEffect(() => {
    const getAllProducts = () =>
      fetchApi(productSlice.getAllProducts(), dispatch);
    const getAllGifts = () => fetchApi(productSlice.getAllGifts(), dispatch);

    getAllProducts().then((result) => setProducts(result));
    getAllGifts().then((result) => setGifts(result));
  }, []);

  return (
    <>
      {false ? (
        <Loading />
      ) : (
        <div className={styles.container}>
          <div className={styles.content}>
            <BriefInfo subWarehouseInfo={subWarehouse} />
            <div className={styles.productSection}>
              <span className={clsx(generalStyles.rightSideSubTitle)}>
                Sản phẩm
              </span>
              <ProductTable list={products} />
            </div>
            <div className={styles.productSection}>
              <span className={clsx(generalStyles.rightSideSubTitle)}>
                Quà tặng
              </span>
              <ProductTable list={gifts} isProduct={false} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
