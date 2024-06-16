import { useState, useEffect } from "react";
import Image from "~/components/image/image";
import IconButton from "~/components/iconButton/iconButton";
import Table from "~/components/table/tableComponent/tableComponent";
import { headerTable } from "./index";
import { formatNumber, convertCurrency, isNullField } from "~/utils/common";

import generalStyles from "~/styles/generalStyle.module.scss";

function ProductTable({ list, className }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(list);
  }, [list]);

  return (
    <Table
      className={className}
      header={headerTable}
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
            <td>{isNullField(formatNumber(product.quantity))}</td>
          </tr>
        );
      })}
      list={products}
    />
  );
}

export default ProductTable;
