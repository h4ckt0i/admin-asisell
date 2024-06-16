import InputSection from "~/components/section/inputSection/inputSection";

function RetailPriceInput({
  retailPrice,
  setRetailPrice,
  isDisabled,
  className,
}) {
  return (
    <InputSection
      className={className}
      title="Giá bán lẻ (Đ)"
      type="number"
      placeholder="Nhập giá bán lẻ của sản phẩm"
      value={retailPrice}
      setState={setRetailPrice}
      isDisabled={isDisabled}
    />
  );
}

export default RetailPriceInput;
