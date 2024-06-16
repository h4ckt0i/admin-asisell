import { useState } from "react";
import { useDispatch } from "react-redux";
import Toast, { errorToast, successfulToast } from "~/components/toast/toast";
import InputSection from "~/components/section/inputSection/inputSection";
import LoadingBtn from "~/components/loadingBtn/loadingBtn";
import UploadImages from "~/components/uploadImages/uploadImages";
import { fetchApi } from "~/utils/common";
import * as categorySlice from "~/store/common/slice/categorySlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function Category() {
  const [name, setName] = useState("");
  const [imgFiles, setImgFiles] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const createCategory = () => {
    const data = new FormData();

    [...imgFiles].forEach((img) => data.append("img", img));
    data.append("name", name);

    const addProduct = () =>
      fetchApi(categorySlice.addCategory(data), dispatch);

    setIsLoading(true);
    setIsDisabled(true);

    addProduct().then((result) => {
      if (result) {
        successfulToast("Thêm danh mục chính thành công");
      } else {
        errorToast("Thêm danh mục chính không thành công");
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
          textBtn="Tải ảnh danh mục"
          setImgFiles={setImgFiles}
          isDisabled={isDisabled}
        />
        <InputSection
          className={generalStyles.rightSideInputSectionTwo}
          title="Tên danh mục chính"
          placeholder="Nhập tên danh mục chính"
          value={name}
          setState={setName}
          isDisabled={isDisabled}
        />
        <div className={generalStyles.rightSideBtnContainer}>
          <LoadingBtn
            className={generalStyles.rightSideBtn}
            textBtn="Tạo danh mục chính"
            isLoading={isLoading}
            onClick={createCategory}
          />
        </div>
      </div>
    </div>
  );
}

export default Category;
