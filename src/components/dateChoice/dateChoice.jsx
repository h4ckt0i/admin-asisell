import { useState, useEffect } from "react";
import clsx from "clsx";
import Calendar from "react-calendar";
import Input from "~/components/input/input";
import IconButton from "~/components/iconButton/iconButton";
import { convertDate } from "~/utils/common";

import styles from "./dateChoice.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";
import "react-calendar/dist/Calendar.css";

function DateChoice({
  setDateTime,
  title,
  isDisabled,
  className,
  btnStyles,
  iconStyles,
  calendarStyles,
}) {
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const chooseDate = () => {
    showCalendar ? setShowCalendar(false) : setShowCalendar(true);
  };

  const closeCalendar = () => {
    showCalendar && setShowCalendar(false);
  };

  useEffect(() => {
    setDateTime(convertDate(date));
  }, [date]);

  return (
    <div
      className={clsx(
        generalStyles.rightSideInputSection,
        styles.container,
        className
      )}
    >
      <span className={generalStyles.rightSideSubTitle}>{title}</span>
      <Input
        className={clsx(styles.input, generalStyles.rightSideInput)}
        type="text"
        value={date ? convertDate(date) : ""}
        onChange={setDate}
        rightChildren={
          <div className={clsx(styles.icon, iconStyles)}>
            <i className="fa-solid fa-calendar-days"></i>
          </div>
        }
        isDisabled={isDisabled}
      />
      <IconButton
        className={clsx(styles.birthdayBtn, btnStyles)}
        onClick={chooseDate}
      ></IconButton>
      <Calendar
        className={clsx(
          generalStyles.rightSideInput,
          styles.calendar,
          !showCalendar ? styles.hideCalendar : null,
          calendarStyles
        )}
        value={date}
        onChange={setDate}
        onClickDay={closeCalendar}
      />
    </div>
  );
}

export default DateChoice;
