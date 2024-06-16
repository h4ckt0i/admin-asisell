import { useState, useEffect } from "react";
import MainInfo from "../components/mainInfo/mainInfo";
import UploadImages from "~/components/uploadImages/uploadImages";
import AddressChoice from "~/components/addressChoice/addressChoice";

function EmployeeSection({ isDisabled, setEmployee, className }) {
  const [imgFiles, setImgFiles] = useState([]);
  const [mainInfo, setMainInfo] = useState({});
  const [address, setAddress] = useState("");

  useEffect(() => {
    setEmployee({
      imgFiles,
      ...mainInfo,
      address,
    });
  }, [mainInfo, address]);

  return (
    <div className={className}>
      <UploadImages
        textBtn="Tải ảnh đại diện"
        setImgFiles={setImgFiles}
        isDisabled={isDisabled}
      />
      <MainInfo setMainInfo={setMainInfo} isDisabled={isDisabled} />
      <AddressChoice
        title="Địa chỉ"
        setAddress={setAddress}
        isDisabled={isDisabled}
      />
    </div>
  );
}

export default EmployeeSection;
