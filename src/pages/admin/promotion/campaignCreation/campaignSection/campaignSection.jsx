import { useState, useEffect } from "react";
import DateChoice from "~/components/dateChoice/dateChoice";
import AddressChoice from "~/components/addressChoice/addressChoice";
import InputSection from "~/components/section/inputSection/inputSection";
import TimeChoice from "~/components/timeChoice/timeChoice";
import ThreeStarsIcon from "~/assets/icons/threeStarsIcon";
import FlagIcon from "~/assets/icons/flagIcon";

import generalStyles from "~/styles/generalStyle.module.scss";

function CampaignSection({ setCampaign, isDisabled, className }) {
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [applicableUser, setApplicableUser] = useState("");
  const [applicableTime, setApplicableTime] = useState({});
  const [applicableLocation, setApplicableLocation] = useState("");
  const [applicableCondition, setApplicableCondition] = useState("");

  useEffect(() => {
    setCampaign({
      name,
      applicable_date: {
        start: startDate,
        end: endDate,
      },
      applicable_location: applicableLocation,
      applicable_user: applicableUser,
      applicable_time: {
        start: applicableTime.start || "",
        end: applicableTime.end || "",
      },
      applicable_condition: applicableCondition,
    });
  }, [
    name,
    startDate,
    endDate,
    applicableLocation,
    applicableUser,
    applicableTime,
    applicableCondition,
  ]);

  return (
    <div className={className}>
      <div className={generalStyles.rightSideSubTitle}>Khuyến mãi</div>
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Chương trình"
        placeholder="Nhập tên chương trình"
        value={name}
        setState={setName}
        isDisabled={isDisabled}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Đối tượng áp dụng"
        placeholder="Nhập đối tượng"
        value={applicableUser}
        setState={setApplicableUser}
        rightChildren={<FlagIcon className={generalStyles.icon} />}
        isDisabled={isDisabled}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Điều kiện áp dụng"
        placeholder="Nhập điều kiện"
        value={applicableCondition}
        setState={setApplicableCondition}
        rightChildren={<ThreeStarsIcon className={generalStyles.icon} />}
        isDisabled={isDisabled}
      />
      <DateChoice
        className={generalStyles.rightSideInputSectionTwo}
        calendarStyles={generalStyles.rightSideCalendar}
        title="Thời gian triển khai"
        setDateTime={setStartDate}
        isDisabled={isDisabled}
      />
      <DateChoice
        className={generalStyles.rightSideInputSectionTwo}
        calendarStyles={generalStyles.rightSideCalendar}
        title="Thời gian kết thúc"
        setDateTime={setEndDate}
        isDisabled={isDisabled}
      />
      <TimeChoice
        className={generalStyles.rightSideInputSectionTwo}
        title="Khung giờ áp dụng"
        setChosenTime={setApplicableTime}
        isDisabled={isDisabled}
      />
      <AddressChoice
        className={generalStyles.addressSection}
        title="Địa điểm áp dụng"
        setAddress={setApplicableLocation}
        isDisabled={isDisabled}
      />
    </div>
  );
}

export default CampaignSection;
