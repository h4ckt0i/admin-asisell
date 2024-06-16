import { useState, useEffect } from "react";
import InputSection from "~/components/section/inputSection/inputSection";
import ProductSelection from "../components/productSelection/productSelection";
import SubWarehouseSelection from "~/components/subWarehouseSelection/subWarehouseSelection";

import generalStyles from "~/styles/generalStyle.module.scss";

function ProductSection({
  isDisabled,
  setTotal,
  setProductInfo,
  setExportedPriceProduct,
  className,
}) {
  const [quantity, setQuantity] = useState();
  const [exportedPrice, setExportedPrice] = useState();
  const [product, setProduct] = useState({});
  const [subCategory, setSubCategory] = useState({});
  const [subWarehouse, setSubWarehouse] = useState({});

  useEffect(() => {
    setExportedPriceProduct(exportedPrice);
    setSubCategory(product.sub_category);
    setTotal(+exportedPrice * +quantity);
    setProductInfo({
      product: { product_id: product._id, quantity: +quantity },
      sub_warehouse: subWarehouse,
    });
  }, [quantity, exportedPrice, product, subWarehouse]);

  return (
    <div className={className}>
      <div className={generalStyles.rightSideSubTitle}>Hàng hóa</div>
      <SubWarehouseSelection
        className={generalStyles.rightSideInputSectionTwo}
        title="Kho xuất hàng"
        setSubWarehouse={setSubWarehouse}
        isDisabled={isDisabled}
      />
      <ProductSelection
        className={generalStyles.rightSideInputSectionTwo}
        setProduct={setProduct}
        isDisabled={isDisabled}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Mã SKU"
        value={product.SKU || ""}
        setState={() => {}}
        defaultDisabled={true}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Danh mục"
        value={
          (subCategory && subCategory.category && subCategory.category.name) ||
          ""
        }
        setState={() => {}}
        defaultDisabled={true}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Phân loại"
        value={(subCategory && subCategory.name) || ""}
        setState={() => {}}
        defaultDisabled={true}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Giá xuất"
        type="number"
        placeholder="Nhập giá xuất"
        value={exportedPrice}
        setState={setExportedPrice}
        isDisabled={isDisabled}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Số lượng"
        type="number"
        placeholder="Nhập số lượng xuất"
        value={quantity}
        setState={setQuantity}
        isDisabled={isDisabled}
      />
    </div>
  );
}

export default ProductSection;
