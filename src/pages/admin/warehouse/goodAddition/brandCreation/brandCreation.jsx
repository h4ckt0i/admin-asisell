import { useState } from "react";
import { useDispatch } from "react-redux";
import Toast, { errorToast, successfulToast } from "~/components/toast/toast";
import InputSection from "~/components/section/inputSection/inputSection";
import LoadingBtn from "~/components/loadingBtn/loadingBtn";
import { fetchApi } from "~/utils/common";
import * as brandSlice from "~/store/common/slice/brandSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function BrandCreation() {
  const [name, setName] = useState("");
  const [origin, setOrigin] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const createBrand = () => {
    const data = new FormData();

    data.append("name", name);
    data.append("origin", origin);

    const addProduct = () => fetchApi(brandSlice.addBrand(data), dispatch);

    setIsLoading(true);
    setIsDisabled(true);

    addProduct().then((result) => {
      if (result) {
        successfulToast("Thêm thương hiệu thành công");
      } else {
        errorToast("Thêm thương hiệu không thành công");
      }
      setIsLoading(false);
      setIsDisabled(false);
    });
  };

  return (
    <div>
      <Toast />
      <div className={generalStyles.mainContent}>
        <InputSection
          className={generalStyles.rightSideInputSectionTwo}
          title="Thương hiệu"
          placeholder="Nhập tên thương hiệu"
          value={name}
          setState={setName}
          isDisabled={isDisabled}
        />
        <InputSection
          className={generalStyles.rightSideInputSectionTwo}
          title="Xuất xứ thương hiệu"
          placeholder="Nhập nơi xuất xứ thương hiệu"
          value={origin}
          setState={setOrigin}
          isDisabled={isDisabled}
        />
        <div className={generalStyles.rightSideBtnContainer}>
          <LoadingBtn
            className={generalStyles.rightSideBtn}
            textBtn="Thêm thương hiệu"
            isLoading={isLoading}
            onClick={createBrand}
          />
        </div>
      </div>
    </div>
  );
}

export default BrandCreation;
