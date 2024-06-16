import { useState, useEffect } from "react";
import InputSection from "~/components/section/inputSection/inputSection";

import generalStyles from "~/styles/generalStyle.module.scss";

function ContactSection({ setContact, isDisabled, className }) {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handlePhone = (value) => {
    if (value.length <= 10) {
      setPhone(value);
    }
  };

  useEffect(() => {
    setContact({
      contact: {
        person_name: name,
        position,
        phone,
        email,
      },
    });
  }, [name, position, phone, email]);

  return (
    <div className={className}>
      <div className={generalStyles.rightSideSubTitle}>Liên hệ</div>
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Người liên hệ"
        placeholder="Nhập tên người liên hệ"
        value={name}
        setState={setName}
        isDisabled={isDisabled}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Chức vụ"
        placeholder="Nhập chức vụ"
        value={position}
        setState={setPosition}
        isDisabled={isDisabled}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Số điện thoại"
        type="number"
        placeholder="Nhập số điện thoại"
        value={phone}
        setState={handlePhone}
        isDisabled={isDisabled}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Email"
        placeholder="Nhập email"
        value={email}
        setState={setEmail}
        isDisabled={isDisabled}
      />
    </div>
  );
}

export default ContactSection;
