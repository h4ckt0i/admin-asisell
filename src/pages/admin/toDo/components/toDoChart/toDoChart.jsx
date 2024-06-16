import { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import ProgressChart from "~/components/chart/progressChart/progressChart";
import { fetchApi, sortListByDate } from "~/utils/common";
import * as toDoSlice from "~/store/common/slice/toDoSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function ToDoChart({ className }) {
  const [toDoes, setToDoes] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const getAll = () => fetchApi(toDoSlice.getAll(), dispatch);

    getAll().then((result) => {
      const newToDoes = result.filter((toDo, index) => index < 5);

      sortListByDate(newToDoes, setToDoes);
    });
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
        Tiến độ công việc gần đây
      </span>
      {toDoes.map((item, index) => (
        <div className={generalStyles.progressBarContainer} key={index}>
          <div className={generalStyles.progressBar}>
            <div className={generalStyles.progressTitleContainer}>
              <span className={generalStyles.progressTitle}>{item.name}</span>
              <span className={generalStyles.percent}>{item.process}%</span>
            </div>
            <ProgressChart percent={item.percentage} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ToDoChart;
