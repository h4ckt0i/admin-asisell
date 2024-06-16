import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import SelectSection from "~/components/section/selectSection/selectSection";
import { fetchApi, formatOptionSelection } from "~/utils/common";
import * as partnerSlice from "~/store/common/slice/partnerSlice";

function PartnerSelection({ isDisabled, setPartner, className }) {
  const [partners, setPartners] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const getAllPartners = () => fetchApi(partnerSlice.getAll(), dispatch);

    getAllPartners().then((result) => {
      const partners = formatOptionSelection(result);
      setPartners(partners);
    });
  }, []);

  return (
    <SelectSection
      className={className}
      title="Đối tác"
      placeholder="Chọn đối tác"
      options={partners}
      setState={setPartner}
      isDisabled={isDisabled}
    />
  );
}

export default PartnerSelection;
