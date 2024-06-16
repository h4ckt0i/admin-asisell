import { useEffect, useState } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import Toast, { errorToast, successfulToast } from "~/components/toast/toast";
import LoadingBtn from "~/components/loadingBtn/loadingBtn";
import CampaignSection from "./campaignSection/campaignSection";
import ProductSection from "./productSection/productSection";
import CodeSection from "./codeSection/codeSection";
import { fetchApi, setDocumentTitle } from "~/utils/common";
import * as promotionSlice from "~/store/common/slice/promotionSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function CampaignCreation() {
  const [campaign, setCampaign] = useState({});
  const [promotionalProduct, setPromotionalProduct] = useState({});
  const [promotionalCode, setPromotionalCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const dispatch = useDispatch();

  const addNewPromotion = () => {
    const data = {
      ...campaign,
      ...promotionalProduct,
      promotional_code: promotionalCode,
    };

    const addPromotion = () =>
      fetchApi(promotionSlice.addPromotion(data), dispatch);

    setIsLoading(true);
    setIsDisabled(true);

    addPromotion().then((result) => {
      result
        ? successfulToast("Thêm chiến dịch thành công")
        : errorToast("Thêm chiến dịch không thành công");

      setIsLoading(false);
      setIsDisabled(false);
    });
  };

  useEffect(() => {
    setDocumentTitle("Khuyến mãi - Admin");
  }, []);

  return (
    <div className={generalStyles.rightSideContainer}>
      <span className={clsx(generalStyles.rightSideTitle)}>
        Thêm chiến dịch - Khuyến mãi
      </span>
      <Toast />
      <div>
        <CampaignSection
          className={generalStyles.additionSection}
          setCampaign={setCampaign}
          isDisabled={isDisabled}
        />
        <ProductSection
          className={generalStyles.additionSection}
          setPromotionalProduct={setPromotionalProduct}
          isDisabled={isDisabled}
        />
        <CodeSection
          setPromotionalCode={setPromotionalCode}
          isDisabled={isDisabled}
        />
        <div className={generalStyles.rightSideBtnContainer}>
          <LoadingBtn
            className={generalStyles.rightSideBtn}
            textBtn="Thêm chiến dịch khuyến mãi"
            isLoading={isLoading}
            onClick={addNewPromotion}
          />
        </div>
      </div>
    </div>
  );
}

export default CampaignCreation;
