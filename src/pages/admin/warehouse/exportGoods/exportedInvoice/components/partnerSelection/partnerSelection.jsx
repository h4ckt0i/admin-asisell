import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import SelectSection from "~/components/section/selectSection/selectSection";
import { fetchApi } from "~/utils/common";
import * as partnerSlice from "~/store/common/slice/partnerSlice";

function PartnerSelection({ isDisabled, setPartner, className }) {
  const [partners, setPartners] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const getAllPartners = () => fetchApi(partnerSlice.getAll(), dispatch);

    getAllPartners().then((result) => {
      const partners = result.map((item) => ({ ...item, label: item.name }));
      setPartners(partners);
    });
  }, []);

  return (
    <SelectSection
      className={className}
      title="Tên đối tác"
      placeholder="Chọn đối tác"
      options={partners}
      setState={setPartner}
      isDisabled={isDisabled}
    />
  );
}

export default PartnerSelection;
