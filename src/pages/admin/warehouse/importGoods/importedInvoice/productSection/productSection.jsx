import { useState, useEffect } from "react";
import InputSection from "~/components/section/inputSection/inputSection";
import ProductSelection from "../components/productSelection/productSelection";
import EmployeeSelection from "~/components/selection/employeeSelection/employeeSelection";
import { convertCurrency } from "~/utils/common";

import generalStyles from "~/styles/generalStyle.module.scss";

function ProductSection({ isDisabled, setTotal, setProductInfo, className }) {
  const [quantity, setQuantity] = useState();
  const [product, setProduct] = useState({});
  const [subCategory, setSubCategory] = useState({});
  const [creator, setCreator] = useState({});

  useEffect(() => {
    setSubCategory(product.sub_category);
    setTotal(product.imported_price ? product.imported_price * +quantity : 0);
    setProductInfo({
      product: {
        product_id: product._id,
        quantity: +quantity,
        creator,
      },
    });
  }, [quantity, product, creator]);

  return (
    <div className={className}>
      <div className={generalStyles.rightSideSubTitle}>Hàng hóa</div>
      <EmployeeSelection
        className={generalStyles.rightSideInputSectionTwo}
        title="Người tạo phiếu"
        placeholder="Chọn người tạo phiếu"
        setEmployee={setCreator}
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
        title="Nhà cung cấp"
        value={(product.supplier && product.supplier.name) || ""}
        defaultDisabled={true}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Giá nhập"
        value={convertCurrency(product.imported_price)}
        defaultDisabled={true}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Số lượng nhập"
        type="number"
        placeholder="Nhập số lượng nhập"
        value={quantity}
        setState={setQuantity}
        isDisabled={isDisabled}
      />
    </div>
  );
}

export default ProductSection;
