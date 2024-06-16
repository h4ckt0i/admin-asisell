import { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import Loading from "~/components/loading/loading";
import Search from "~/components/search/search";
import CampaignInfo from "./components/campaignInfo/campaignInfo";
import { fetchApi, setDocumentTitle } from "~/utils/common";
import * as promotionSlice from "~/store/common/slice/promotionSlice";

import styles from "./campaigns.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function Campaigns() {
  const [campaigns, setCampaigns] = useState([]);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.promotion.loading);

  useEffect(() => {
    setDocumentTitle("Khuyến mãi - Admin");

    const getAll = () => fetchApi(promotionSlice.getAll(), dispatch);

    getAll().then((result) => setCampaigns(result));
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div
          className={clsx(generalStyles.rightSideContainer, styles.container)}
        >
          <span className={clsx(generalStyles.rightSideTitle)}>
            Danh sách chiến dịch - Khuyến mãi
          </span>
          <div className={styles.content}>
            {/* <Search placeholder="Tìm kiếm mã chương trình, tên CT" /> */}
            {campaigns.length !== 0 ? (
              <ul className={clsx(generalStyles.list, styles.list)}>
                {campaigns.map((campaign, index) => (
                  <CampaignInfo
                    className={styles.item}
                    campaign={campaign}
                    key={index}
                  />
                ))}
              </ul>
            ) : (
              <span>Hiện chưa có chiến dịch nào!</span>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Campaigns;
