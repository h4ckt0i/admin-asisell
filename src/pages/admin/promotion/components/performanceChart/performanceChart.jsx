import { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import ProgressChart from "~/components/chart/progressChart/progressChart";
import { fetchApi } from "~/utils/common";
import * as promotionSlice from "~/store/common/slice/promotionSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function PerformanceChart({ className }) {
  const [mostEffectivePromotion, setMostEffectivePromotion] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const getMostEffectivePromotion = () =>
      fetchApi(promotionSlice.getMostEffectivePromotion(), dispatch);

    getMostEffectivePromotion().then((result) =>
      setMostEffectivePromotion(result)
    );
  }, []);

  return (
    <div
      className={clsx(
        generalStyles.rightSideSection,
        generalStyles.progressContainer,
        className
      )}
    >
      <span className={generalStyles.rightSideSubTitle}>
        Hiệu suất chương trình
      </span>
      {mostEffectivePromotion.map((item, index) => (
        <div className={generalStyles.progressBarContainer} key={index}>
          <div className={generalStyles.progressBar}>
            <div className={generalStyles.progressTitleContainer}>
              <span className={generalStyles.progressTitle}>{item.name}</span>
              <span className={generalStyles.percent}>{item.percentage}%</span>
            </div>
            <ProgressChart percent={item.percentage} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default PerformanceChart;
