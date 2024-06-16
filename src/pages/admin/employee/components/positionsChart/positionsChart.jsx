import { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import ProgressChart from "~/components/chart/progressChart/progressChart";
import { fetchApi } from "~/utils/common";
import * as employeeSlice from "~/store/common/slice/employeeSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function PositionsChart({ className }) {
  const [mostPositions, setMostPositions] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const getMostPosition = () =>
      fetchApi(employeeSlice.getMostPosition(), dispatch);

    getMostPosition().then((result) => setMostPositions(result));
  }, []);

  return (
    <div
      className={clsx(
        generalStyles.rightSideSection,
        generalStyles.progressContainer,
        className
      )}
    >
      <span className={generalStyles.rightSideSubTitle}>Vị trí công việc</span>
      {mostPositions.map((item, index) => (
        <div className={generalStyles.progressBarContainer} key={index}>
          <div className={generalStyles.progressBar}>
            <div className={generalStyles.progressTitleContainer}>
              <span className={generalStyles.progressTitle}>
                {item.position}
              </span>
              <span className={generalStyles.percent}>{item.percentage}%</span>
            </div>
            <ProgressChart percent={item.percentage} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default PositionsChart;
