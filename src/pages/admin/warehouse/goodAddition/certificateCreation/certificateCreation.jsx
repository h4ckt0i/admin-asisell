import { useState } from "react";
import { useDispatch } from "react-redux";
import Toast, { errorToast, successfulToast } from "~/components/toast/toast";
import InputSection from "~/components/section/inputSection/inputSection";
import LoadingBtn from "~/components/loadingBtn/loadingBtn";
import UploadImages from "~/components/uploadImages/uploadImages";
import { fetchApi } from "~/utils/common";
import * as certificateSlice from "~/store/common/slice/certificateSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function CertificateCreation() {
  const [name, setName] = useState("");
  const [imgFiles, setImgFiles] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const createBrand = () => {
    const data = new FormData();

    [...imgFiles].forEach((img) => data.append("img", img));
    data.append("name", name);

    const addProduct = () =>
      fetchApi(certificateSlice.addCertificate(data), dispatch);

    setIsLoading(true);
    setIsDisabled(true);

    addProduct().then((result) => {
      if (result) {
        successfulToast("Thêm chứng chỉ thành công");
      } else {
        errorToast("Thêm chứng chỉ không thành công");
      }
      setIsLoading(false);
      setIsDisabled(false);
    });
  };

  return (
    <div>
      <Toast />
      <div className={generalStyles.mainContent}>
        <UploadImages
          textBtn="Tải ảnh chứng chỉ"
          setImgFiles={setImgFiles}
          isDisabled={isDisabled}
        />
        <InputSection
          className={generalStyles.rightSideInputSectionTwo}
          title="Chứng chỉ"
          placeholder="Nhập tên chứng chỉ"
          value={name}
          setState={setName}
          isDisabled={isDisabled}
        />
        <div className={generalStyles.rightSideBtnContainer}>
          <LoadingBtn
            className={generalStyles.rightSideBtn}
            textBtn="Thêm chứng chỉ"
            isLoading={isLoading}
            onClick={createBrand}
          />
        </div>
      </div>
    </div>
  );
}

export default CertificateCreation;
