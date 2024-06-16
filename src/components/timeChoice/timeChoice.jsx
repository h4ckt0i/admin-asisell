import { useState, useEffect } from "react";
import clsx from "clsx";
import dayjs from "dayjs";
import { TimePicker } from "antd";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { formatNumberLessThanTen } from "~/utils/common";

import styles from "./timeChoice.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function TimeChoice({
  rangeTime = true,
  title,
  setChosenTime,
  isDisabled,
  className,
}) {
  dayjs.extend(customParseFormat);

  const [time, setTime] = useState({});

  const handleTime = (value) => {
    const time = new Date(value.$d);

    return `${formatNumberLessThanTen(
      time.getHours()
    )}:${formatNumberLessThanTen(time.getMinutes())}:${formatNumberLessThanTen(
      time.getSeconds()
    )}`;
  };

  useEffect(() => {
    const ChosenTime = rangeTime
      ? {
          start: time.start,
          end: time.end,
        }
      : time;

    setChosenTime(ChosenTime);
  }, [time]);

  return (
    <div
      className={clsx(
        generalStyles.rightSideInputSection,
        styles.container,
        className
      )}
    >
      <span className={clsx(generalStyles.rightSideSubTitle, styles.title)}>
        {title}
      </span>
      {rangeTime ? (
        <TimePicker.RangePicker
          className={styles.timePicker}
          placeholder={["Bắt đầu", "Kết thúc"]}
          onChange={(e) =>
            setTime({
              start: handleTime(e[0]),
              end: handleTime(e[1]),
            })
          }
          disabled={isDisabled}
        />
      ) : (
        <TimePicker
          className={styles.timePicker}
          placeholder="Chọn thời gian"
          onChange={(e) => setChosenTime(handleTime(e))}
          disabled={isDisabled}
        />
      )}
    </div>
  );
}

export default TimeChoice;
