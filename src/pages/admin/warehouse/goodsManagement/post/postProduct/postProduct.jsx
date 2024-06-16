import { useState, useEffect } from "react";
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
import ExpiryInput from "../components/input/expiryInput/expiryInput";
import WarrantyInput from "../components/input/warrantyInput/warrantyInput";
import GiftSelection from "../components/selectionInput/giftSelection/giftSelection";
import BrandSelection from "../components/selectionInput/brandSelection/brandSelection";
import CertificateSection from "../components/selectionInput/certificateSelection/certificateSelection";
import SubCategorySelection from "../components/selectionInput/subCategorySelection/subCategorySelection";
import DescriptionField from "../components/textField/descriptionField/descriptionField";
import UsageField from "../components/textField/usageField/usageField";
import PreservationField from "../components/textField/preservationField/preservationField";
import { fetchApi } from "~/utils/common";
import * as productSlice from "~/store/common/slice/productSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function PostProduct() {
  const [name, setName] = useState("");
  const [skuCode, setSkuCode] = useState("");
  const [description, setDescription] = useState("");
  const [using, setUsing] = useState("");
  const [preservation, setPreservation] = useState("");
  const [unit, setUnit] = useState("");
  const [mass, setMass] = useState();
  const [retailPrice, setRetailPrice] = useState();
  const [importedPrice, setImportedPrice] = useState();
  const [warranty, setWarranty] = useState();
  const [expiry, setExpiry] = useState();
  const [certificates, setCertificates] = useState([]);
  const [gifts, setGifts] = useState([]);
  const [brand, setBrand] = useState({});
  const [subCategory, setSubCategory] = useState({});
  const [imgFiles, setImgFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const dispatch = useDispatch();

  const createProduct = () => {
    const data = new FormData();

    [...imgFiles].forEach((img) => data.append("imgs", img));
    certificates !== 0 &&
      certificates.forEach((certificate) =>
        data.append("certificates", certificate._id)
      );
    gifts !== 0 && gifts.forEach((gift) => data.append("gifts", gift._id));
    data.append("name", name);
    data.append("SKU", skuCode);
    data.append("description", description);
    data.append("using", using);
    data.append("preservation", preservation);
    data.append("retail_price", +retailPrice || 0);
    data.append("imported_price", +importedPrice || 0);
    data.append("unit", unit);
    data.append("mass", +mass || 0);
    data.append("warranty", +warranty || 0);
    data.append("expiry", +expiry || 0);
    brand._id && data.append("brand", brand._id);
    subCategory._id && data.append("sub_category", subCategory._id);
    data.append("is_gift", "false");

    const addProduct = () => fetchApi(productSlice.addProduct(data), dispatch);

    setIsLoading(true);
    setIsDisabled(true);

    addProduct().then((result) => {
      if (result) {
        successfulToast("Thêm sản phẩm thành công");
      } else {
        errorToast("Thêm sản phẩm không thành công");
      }
      setIsLoading(false);
      setIsDisabled(false);
    });
  };

  useEffect(() => {
    document.title = "Đăng sản phẩm - Admin | Asisell";
  }, []);

  return (
    <div>
      <Toast />
      <div>
        <UploadImages
          subText="(tối thiểu 3 hình và số lượng là số lẻ)"
          textBtn="Tải ảnh sản phẩm"
          isMultiple={true}
          setImgFiles={setImgFiles}
          isDisabled={isDisabled}
        />
        <div className={generalStyles.rightSideDoubleInputSection}>
          <NameInput name={name} setName={setName} isDisabled={isDisabled} />
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
        <div className={generalStyles.rightSideDoubleInputSection}>
          <ExpiryInput
            expiry={expiry}
            setExpiry={setExpiry}
            isDisabled={isDisabled}
          />
          <WarrantyInput
            warranty={warranty}
            setWarranty={setWarranty}
            isDisabled={isDisabled}
          />
        </div>
        <div className={generalStyles.rightSideDoubleInputSection}>
          <BrandSelection setBrand={setBrand} isDisabled={isDisabled} />
          <SubCategorySelection
            setSubCategory={setSubCategory}
            isDisabled={isDisabled}
          />
        </div>
        <div className={generalStyles.rightSideDoubleInputSection}>
          <CertificateSection
            setCertificate={setCertificates}
            isDisabled={isDisabled}
          />
          <GiftSelection isDisabled={isDisabled} setGift={setGifts} />
        </div>
        <DescriptionField
          description={description}
          setDescription={setDescription}
          isDisabled={isDisabled}
        />
        <UsageField using={using} setUsing={setUsing} isDisabled={isDisabled} />
        <PreservationField
          preservation={preservation}
          setPreservation={setPreservation}
          isDisabled={isDisabled}
        />
        <div className={generalStyles.rightSideBtnContainer}>
          <LoadingBtn
            className={generalStyles.rightSideBtn}
            textBtn="Đăng sản phẩm"
            isLoading={isLoading}
            onClick={createProduct}
          />
        </div>
      </div>
    </div>
  );
}

export default PostProduct;
