import { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import Loading from "~/components/loading/loading";
import Detail from "~/components/detail/detail";
import DepreciationTable from "./components/depreciationTable/depreciationTable";
import {
  convertCurrency,
  fetchApi,
  formatNumber,
  formatTypeNumber,
  getIdFromPathName,
  setDocumentTitle,
} from "~/utils/common";
import * as depreciationSlice from "~/store/common/slice/depreciationSlice";

import styles from "./depreciationDetail.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function DepreciationDetail() {
  const [depreciation, setDepreciation] = useState({});
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState({});

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.depreciation.loading);

  useEffect(() => {
    setDocumentTitle("Chi tiết khấu hao");

    const depreciationId = getIdFromPathName();

    const getDepreciation = () =>
      fetchApi(depreciationSlice.getDepreciationById(depreciationId), dispatch);

    getDepreciation().then((result) => setDepreciation(result[0]));
  }, []);

  useEffect(() => {
    if (depreciation.product) {
      setProduct(depreciation.product);
      setQuantity(depreciation.product.quantity);
    }
  }, [depreciation]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Detail title="Chi tiết khấu hao">
          <div className={styles.mainInfo}>
            <div className={clsx(styles.textSection, styles.code)}>
              <span className={styles.textTitle}>Mã khấu hao</span>
              <span className={generalStyles.detailTitle}>123</span>
            </div>
            <div className={styles.textSection}>
              <span className={styles.textTitle}>Tên sản phẩm</span>
              <span className={generalStyles.detailTitle}>
                {product.name || ""}
              </span>
            </div>
            <div className={styles.textSection}>
              <span className={styles.textTitle}>Mã SKU</span>
              <span className={generalStyles.detailTitle}>{product.SKU}</span>
            </div>
            <div className={styles.textSection}>
              <span className={styles.textTitle}>Số lượng hàng nhập</span>
              <span
                className={clsx(
                  generalStyles.successful,
                  generalStyles.detailTitle
                )}
              >
                {formatNumber(quantity.imported_quantity)}
              </span>
            </div>
            <div className={styles.textSection}>
              <span className={styles.textTitle}>Giá nhập</span>
              <span className={generalStyles.detailTitle}>
                {convertCurrency(product.imported_price)}
              </span>
            </div>
            <div className={styles.textSection}>
              <span className={styles.textTitle}>Tổng tiền nhập hàng</span>
              <span className={generalStyles.detailTitle}>
                {convertCurrency(
                  quantity.imported_quantity * product.imported_price
                )}
              </span>
            </div>
            <div className={styles.textSection}>
              <span className={styles.textTitle}>Số lượng hàng tồn</span>
              <span className={generalStyles.detailTitle}>
                {formatNumber(quantity.remaining_quantity)}
              </span>
            </div>
            <div className={styles.textSection}>
              <span className={styles.textTitle}>Tổng tiền hàng tồn</span>
              <span
                className={clsx(
                  generalStyles.canceled,
                  generalStyles.detailTitle
                )}
              >
                {convertCurrency(
                  formatTypeNumber(
                    quantity.remaining_quantity * product.imported_price
                  )
                )}
              </span>
            </div>
          </div>
          <div className={generalStyles.detailSection}>
            <span className={generalStyles.detailTitle}>Danh mục khấu hao</span>
            <DepreciationTable list={[depreciation]} />
          </div>
        </Detail>
      )}
    </>
  );
}

export default DepreciationDetail;
