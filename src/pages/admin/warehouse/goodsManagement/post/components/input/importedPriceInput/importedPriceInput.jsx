import InputSection from "~/components/section/inputSection/inputSection";

function ImportedPriceInput({
  importedPrice,
  setImportedPrice,
  isDisabled,
  className,
}) {
  return (
    <InputSection
      className={className}
      title="Giá nhập (Đ)"
      type="number"
      placeholder="Nhập giá nhập của sản phẩm"
      value={importedPrice}
      setState={setImportedPrice}
      isDisabled={isDisabled}
    />
  );
}

export default ImportedPriceInput;
