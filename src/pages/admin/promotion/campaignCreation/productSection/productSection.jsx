import { useState, useEffect } from "react";
import clsx from "clsx";
import InputSection from "~/components/section/inputSection/inputSection";
import ProductSelection from "../components/productSelection/productSelection";
import GiftSelection from "../components/giftSelection/giftSelection";
import TagIcon from "~/assets/icons/tagIcon";
import { formatNumber, convertCurrency } from "~/utils/common";

import styles from "./productSection.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function ProductSection({ setPromotionalProduct, isDisabled, className }) {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState();
  const [gifts, setGifts] = useState([]);
  const [promotionalPrice, setPromotionalPrice] = useState();

  useEffect(() => {
    const giftIdsList = gifts.map((gift) => gift._id);

    setPromotionalProduct({
      applicable_product: [
        {
          product: product._id,
          quantity: +quantity,
          promotional_price: +promotionalPrice,
          gifts: giftIdsList,
        },
      ],
    });
  }, [product, quantity, gifts, promotionalPrice]);

  return (
    <div className={clsx(styles.container, className)}>
      <div className={generalStyles.rightSideSubTitle}>Thông tin sản phẩm</div>
      <ProductSelection
        className={generalStyles.rightSideInputSectionTwo}
        setProduct={setProduct}
        isDisabled={isDisabled}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Số lượng K.Mãi"
        type="number"
        placeholder="Nhập số lượng"
        value={quantity}
        setState={setQuantity}
        isDisabled={isDisabled}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Số lượng tồn"
        value={formatNumber(
          product.quantity && product.quantity.remaining_quantity
        )}
        defaultDisabled={true}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Giá bán lẻ"
        value={convertCurrency(product.retail_price)}
        defaultDisabled={true}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Giá khuyến mãi"
        type="number"
        placeholder="Nhập giá khuyến mãi"
        value={promotionalPrice}
        setState={setPromotionalPrice}
        rightChildren={<TagIcon className={generalStyles.icon} />}
        isDisabled={isDisabled}
      />
      <div className={styles.promotion}>
        <span className={styles.title}>* Ưu đãi</span>
        <div className={styles.promotionInfo}>
          <GiftSelection
            className={generalStyles.rightSideInputSectionTwo}
            setChosenGifts={setGifts}
            isDisabled={isDisabled}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductSection;
