import { useState, useEffect } from "react";
import InputSection from "~/components/section/inputSection/inputSection";
import ProductSelection from "../components/productSelection/productSelection";
import EmployeeSelection from "~/components/selection/employeeSelection/employeeSelection";
import SubWarehouseSelection from "~/components/selection/subWarehouseSelection/subWarehouseSelection";

import generalStyles from "~/styles/generalStyle.module.scss";

function ProductSection({ isDisabled, setProductInfo, className }) {
  const [quantity, setQuantity] = useState();
  const [product, setProduct] = useState({});
  const [subCategory, setSubCategory] = useState({});
  const [subWarehouse, setSubWarehouse] = useState({});
  const [creator, setCreator] = useState({});

  useEffect(() => {
    setSubCategory(product.sub_category);
    setProductInfo({
      product: { product_id: product._id, quantity: +quantity },
      sub_warehouse: subWarehouse,
      creator,
    });
  }, [quantity, product, subWarehouse, creator]);

  return (
    <div className={className}>
      <div className={generalStyles.rightSideSubTitle}>Hàng hóa</div>
      <EmployeeSelection
        className={generalStyles.rightSideInputSectionTwo}
        title="Người tạo đơn"
        placeholder="Chọn người tạo đơn"
        setEmployee={setCreator}
        isDisabled={isDisabled}
      />
      <SubWarehouseSelection
        className={generalStyles.rightSideInputSectionTwo}
        title="Kho nhận hàng"
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
        defaultDisabled={true}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Danh mục"
        value={
          (subCategory && subCategory.category && subCategory.category.name) ||
          ""
        }
        defaultDisabled={true}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Phân loại"
        value={(subCategory && subCategory.name) || ""}
        defaultDisabled={true}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Số lượng xuất"
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
