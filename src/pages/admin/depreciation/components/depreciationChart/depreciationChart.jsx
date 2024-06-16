import { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import ProgressChart from "~/components/chart/progressChart/progressChart";
import { fetchApi } from "~/utils/common";
import * as depreciationSlice from "~/store/common/slice/depreciationSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function DepreciationChart({ className }) {
  const [mostDepreciations, setMostDepreciations] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const getMostDepreciations = () =>
      fetchApi(depreciationSlice.getMostDepreciations(), dispatch);

    getMostDepreciations().then((result) => setMostDepreciations(result));
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
        Danh mục chi phí khấu hao
      </span>
      {mostDepreciations.map((item, index) => (
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

export default DepreciationChart;
