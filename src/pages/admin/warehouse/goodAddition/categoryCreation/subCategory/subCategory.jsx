import { useState } from "react";
import { useDispatch } from "react-redux";
import Toast, { errorToast, successfulToast } from "~/components/toast/toast";
import InputSection from "~/components/section/inputSection/inputSection";
import LoadingBtn from "~/components/loadingBtn/loadingBtn";
import UploadImages from "~/components/uploadImages/uploadImages";
import CategorySelection from "./components/categorySelection/categorySelection";
import { fetchApi } from "~/utils/common";
import * as subCategorySlice from "~/store/common/slice/subCategorySlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function SubCategory() {
  const [name, setName] = useState("");
  const [imgFiles, setImgFiles] = useState([]);
  const [category, setCategory] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const createSubCategory = () => {
    const data = new FormData();

    [...imgFiles].forEach((img) => data.append("img", img));
    data.append("name", name);
    data.append("category", category._id);

    const addProduct = () =>
      fetchApi(subCategorySlice.addSubCategory(data), dispatch);

    setIsLoading(true);
    setIsDisabled(true);

    addProduct().then((result) => {
      if (result) {
        successfulToast("Thêm danh mục con thành công");
      } else {
        errorToast("Thêm danh mục con không thành công");
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
          title="Danh mục con"
          placeholder="Nhập tên danh mục con"
          value={name}
          setState={setName}
          isDisabled={isDisabled}
        />
        <CategorySelection
          className={generalStyles.rightSideInputSectionTwo}
          setCategory={setCategory}
          isDisabled={isDisabled}
        />
        <div className={generalStyles.rightSideBtnContainer}>
          <LoadingBtn
            className={generalStyles.rightSideBtn}
            textBtn="Thêm danh mục con"
            isLoading={isLoading}
            onClick={createSubCategory}
          />
        </div>
      </div>
    </div>
  );
}

export default SubCategory;
