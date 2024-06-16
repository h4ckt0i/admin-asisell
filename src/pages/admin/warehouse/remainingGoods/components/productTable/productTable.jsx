import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Image from "~/components/image/image";
import TableSection from "~/components/table/tableSection/tableSection";
import IconButton from "~/components/iconButton/iconButton";
import { headerTable } from "./index";
import {
  formatNumber,
  convertCurrency,
  sortListByIndex,
  fetchApi,
  isNullField,
} from "~/utils/common";
import * as productSlice from "~/store/common/slice/productSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function ProductTable({ isProduct = true, className }) {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const getAllProducts = () =>
      fetchApi(productSlice.getAllProducts(), dispatch);
    const getAllGifts = () => fetchApi(productSlice.getAllGifts(), dispatch);

    isProduct
      ? getAllProducts().then((result) => {
          sortListByIndex(result, setProducts);
        })
      : getAllGifts().then((result) => {
          sortListByIndex(result, setProducts);
        });
  }, []);

  return (
    <TableSection
      className={className}
      headerTable={headerTable}
      bodyTable={products.map((product, index) => {
        const quantity = product.quantity;
        const childCategory = product.sub_category;
        const parentCategory = childCategory && childCategory.category;

        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>
              <IconButton
                className={generalStyles.productBtn}
                textBtn={product.name}
              >
                <Image
                  className={generalStyles.productImg}
                  src={product.imgs[0]}
                />
              </IconButton>
            </td>
            <td>{isNullField(parentCategory && parentCategory.name)}</td>
            <td>{isNullField(product.SKU)}</td>
            <td>{isNullField(childCategory && childCategory.name)}</td>
            <td>{isNullField(convertCurrency(product.imported_price))}</td>
            <td>{isNullField(convertCurrency(product.retail_price))}</td>
            <td className={generalStyles.successful}>
              {isNullField(
                formatNumber(quantity && quantity.imported_quantity)
              )}
            </td>
            <td className={generalStyles.canceled}>
              {isNullField(
                formatNumber(quantity && quantity.exported_quantity)
              )}
            </td>
            <td>
              {" "}
              {isNullField(
                formatNumber(quantity && quantity.remaining_quantity)
              )}
            </td>
          </tr>
        );
      })}
      listTable={products}
      emptyTitle="Hiện chưa có sản phẩm nào"
    />
  );
}

export default ProductTable;
