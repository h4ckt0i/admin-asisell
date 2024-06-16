import { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import Toast, { errorToast, successfulToast } from "~/components/toast/toast";
import LoadingBtn from "~/components/loadingBtn/loadingBtn";
import UploadImages from "~/components/uploadImages/uploadImages";
import NameInput from "../components/input/nameInput/nameInput";
import SkuCodeInput from "../components/input/skuCodeInput/skuCodeInput";
import ImportedPriceInput from "../components/input/importedPriceInput/importedPriceInput";
import RetailPriceInput from "../components/input/retailPriceInput/retailPriceInput";
import UnitInput from "../components/input/unitInput/unitInput";
import MassInput from "../components/input/massInput/massInput";
import BrandSelection from "../components/selectionInput/brandSelection/brandSelection";
import CertificateSection from "../components/selectionInput/certificateSelection/certificateSelection";
import SubCategorySelection from "../components/selectionInput/subCategorySelection/subCategorySelection";
import { fetchApi } from "~/utils/common";
import * as productSlice from "~/store/common/slice/productSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function PostGift() {
  const [name, setName] = useState("");
  const [skuCode, setSkuCode] = useState("");
  const [unit, setUnit] = useState("");
  const [mass, setMass] = useState();
  const [retailPrice, setRetailPrice] = useState();
  const [importedPrice, setImportedPrice] = useState();
  const [certificates, setCertificates] = useState([]);
  const [brand, setBrand] = useState({});
  const [subCategory, setSubCategory] = useState({});
  const [imgFiles, setImgFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const dispatch = useDispatch();

  const createGift = () => {
    const data = new FormData();

    [...imgFiles].forEach((img) => data.append("imgs", img));

    certificates !== 0 &&
      certificates.forEach((certificate) =>
        data.append("certificates", certificate._id)
      );
    data.append("name", name);
    data.append("SKU", skuCode);
    data.append("retail_price", +retailPrice || 0);
    data.append("imported_price", +importedPrice || 0);
    data.append("unit", unit);
    data.append("mass", +mass || 0);
    brand._id && data.append("brand", brand._id);
    subCategory._id && data.append("sub_category", subCategory._id);
    data.append("is_gift", "true");

    const addProduct = () => fetchApi(productSlice.addProduct(data), dispatch);

    setIsLoading(true);
    setIsDisabled(true);

    addProduct().then((result) => {
      if (result) {
        successfulToast("Thêm quà tặng thành công");
      } else {
        errorToast("Thêm quà tặng không thành công");
      }
      setIsLoading(false);
      setIsDisabled(false);
    });
  };

  useEffect(() => {
    document.title = "Đăng quà tặng - Admin | Asisell";
  }, []);

  return (
    <div>
      <Toast />
      <div>
        <UploadImages
          subText="(tối thiểu 3 hình và số lượng là số lẻ)"
          textBtn="Tải ảnh quà tặng"
          isMultiple={true}
          setImgFiles={setImgFiles}
          isDisabled={isDisabled}
        />
        <div className={generalStyles.rightSideDoubleInputSection}>
          <NameInput value={name} setName={setName} isDisabled={isDisabled} />
          <SkuCodeInput
            skuCode={skuCode}
            setSkuCode={setSkuCode}
            isDisabled={isDisabled}
          />
        </div>
        <div className={generalStyles.rightSideDoubleInputSection}>
          <ImportedPriceInput
            importedPrice={importedPrice}
            setImportedPrice={setImportedPrice}
            isDisabled={isDisabled}
          />
          <RetailPriceInput
            retailPrice={retailPrice}
            setRetailPrice={setRetailPrice}
            isDisabled={isDisabled}
          />
        </div>
        <div className={generalStyles.rightSideDoubleInputSection}>
          <UnitInput unit={unit} setUnit={setUnit} isDisabled={isDisabled} />
          <MassInput mass={mass} setMass={setMass} isDisabled={isDisabled} />
        </div>
        <div className={clsx(generalStyles.rightSideDoubleInputSection)}>
          <BrandSelection setBrand={setBrand} isDisabled={isDisabled} />
          <SubCategorySelection
            setSubCategory={setSubCategory}
            isDisabled={isDisabled}
          />
        </div>
        <div className={clsx(generalStyles.rightSideDoubleInputSection)}>
          <CertificateSection
            setCertificate={setCertificates}
            isDisabled={isDisabled}
          />
        </div>

        <div className={generalStyles.rightSideBtnContainer}>
          <LoadingBtn
            className={generalStyles.rightSideBtn}
            textBtn="Đăng quà tặng"
            isLoading={isLoading}
            onClick={createGift}
          />
        </div>
      </div>
    </div>
  );
}

export default PostGift;
