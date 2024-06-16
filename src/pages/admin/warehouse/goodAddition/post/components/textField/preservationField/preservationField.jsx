import TextFieldSection from "~/components/section/textFieldSection/textFieldSection";

function PreservationField({
  preservation,
  setPreservation,
  isDisabled,
  className,
}) {
  return (
    <TextFieldSection
      className={className}
      title="Cách bảo quản"
      placeholder="Điền cách bảo quản sản phẩm"
      value={preservation}
      setState={setPreservation}
      isDisabled={isDisabled}
    />
  );
}

export default PreservationField;
