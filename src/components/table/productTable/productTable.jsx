import { useState, useEffect } from "react";
import Image from "~/components/image/image";
import TableSection from "../tableSection/tableSection";
import IconButton from "~/components/iconButton/iconButton";
import { headerTable } from "./index";
import {
  formatNumber,
  convertCurrency,
  sortListByIndex,
  isNullField,
} from "~/utils/common";

import generalStyles from "~/styles/generalStyle.module.scss";

function ProductTable({ list, isProduct = true, className }) {
  const [header, setHeader] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const giftHeader = headerTable.filter(
      (product, index) => index < headerTable.length - 1
    );

    sortListByIndex(list, setProducts);

    isProduct ? setHeader(headerTable) : setHeader(giftHeader);
  }, [list]);

  return (
    <TableSection
      className={className}
      headerTable={header}
      bodyTable={products.map((product, index) => {
        const quantity = product.quantity;
        const childCategory = product.sub_category;
        const parentCategory = childCategory && childCategory.category;
        const gifts = product.gifts;
        const giftNames = gifts.map((gift) => gift.name).join(", ");
        const supplier = product.supplier;

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
            <td>
              {isNullField(
                formatNumber(quantity && quantity.remaining_quantity)
              )}
            </td>
            <td className={generalStyles.successful}>
              {isNullField(supplier && supplier.name)}
            </td>
            {isProduct && <td>{isNullField(giftNames)}</td>}
          </tr>
        );
      })}
      listTable={products}
      emptyTitle="Hiện chưa có sản phẩm nào"
    />
  );
}

export default ProductTable;
