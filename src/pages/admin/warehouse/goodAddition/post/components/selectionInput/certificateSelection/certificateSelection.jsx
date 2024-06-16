import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import SelectSection from "~/components/section/selectSection/selectSection";
import { fetchApi } from "~/utils/common";
import * as certificateSlice from "~/store/common/slice/certificateSlice";

function CertificateSection({ isDisabled, setCertificate }) {
  const [certificates, setCertificates] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const getAllCertificates = () =>
      fetchApi(certificateSlice.getAll(), dispatch);

    getAllCertificates().then((result) => {
      const certificates = result.map((item) => ({
        ...item,
        label: item.name,
      }));
      setCertificates(certificates);
    });
  }, []);

  return (
    <SelectSection
      title="Chứng chỉ"
      placeholder="Chọn chứng chỉ cho quà tặng"
      options={certificates}
      isMulti={true}
      setState={setCertificate}
      isDisabled={isDisabled}
    />
  );
}

export default CertificateSection;
