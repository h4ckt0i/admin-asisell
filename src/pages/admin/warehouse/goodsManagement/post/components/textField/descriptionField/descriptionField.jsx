import TextFieldSection from "~/components/section/textFieldSection/textFieldSection";

function DescriptionField({
  description,
  setDescription,
  isDisabled,
  className,
}) {
  return (
    <TextFieldSection
      className={className}
      title="Mô tả"
      placeholder="Điền mô tả sản phẩm"
      value={description}
      setState={setDescription}
      isDisabled={isDisabled}
    />
  );
}

export default DescriptionField;
