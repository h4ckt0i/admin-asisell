import { useState, useEffect } from "react";
import Image from "~/components/image/image";
import IconButton from "~/components/iconButton/iconButton";
import Table from "~/components/table/tableComponent/tableComponent";
import { exportHeader, importHeader } from "./index";
import { formatNumber, convertCurrency, isNullField } from "~/utils/common";

import generalStyles from "~/styles/generalStyle.module.scss";

function ProductTable({ isImportedInvoice = true, list, className }) {
  const [header, setHeader] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(list);
  }, [list]);

  useEffect(() => {
    isImportedInvoice ? setHeader(importHeader) : setHeader(exportHeader);
  }, [list]);

  return (
    <Table
      className={className}
      header={header}
      body={products.map((product, index) => {
        const productInfo = product.product_id;

        return (
          <tr key={index}>
            <td>
              <IconButton
                className={generalStyles.productBtn}
                textBtn={productInfo.name}
              >
                <Image
                  className={generalStyles.productImg}
                  src={productInfo.imgs[0]}
                />
              </IconButton>
            </td>
            {isImportedInvoice ? (
              <>
                <td>{isNullField(formatNumber(product.quantity))}</td>
                <td>
                  {isNullField(convertCurrency(productInfo.imported_price))}
                </td>
              </>
            ) : (
              <>
                <td>{isNullField(formatNumber(product.quantity))}</td>
                <td>
                  {isNullField(convertCurrency(productInfo.exported_price))}
                </td>
              </>
            )}
          </tr>
        );
      })}
      list={products}
    />
  );
}

export default ProductTable;
