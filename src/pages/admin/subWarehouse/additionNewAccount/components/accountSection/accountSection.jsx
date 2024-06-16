import { useState, useEffect } from "react";
import clsx from "clsx";
import InputSection from "~/components/section/inputSection/inputSection";
import EyeIcon from "~/assets/icons/eyeIcon";
import EyeSlashIcon from "~/assets/icons/eyeSlashIcon";

import generalStyles from "~/styles/generalStyle.module.scss";

function AccountSection({ setNewAccount, setIsFalse, isDisabled, className }) {
  const inputTypeText = "text";
  const inputTypePass = "password";
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passType, setPassType] = useState(inputTypePass);
  const [rightIcon, setRightIcon] = useState(<EyeIcon />);

  const handleShowPassword = () => {
    if (passType === inputTypeText) {
      setPassType(inputTypePass);
      setRightIcon(<EyeIcon />);
    } else {
      setPassType(inputTypeText);
      setRightIcon(<EyeSlashIcon />);
    }
  };

  useEffect(() => {
    setIsFalse(false);

    setNewAccount({
      user_name: userName,
      name,
      password,
    });
  }, [userName, name, password]);

  return (
    <div className={className}>
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Tên người dùng"
        placeholder="Nhập tên người dùng"
        value={name}
        setState={setName}
        isDisabled={isDisabled}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Tên đăng nhập"
        placeholder="Nhập tên đăng nhập"
        value={userName}
        setState={setUserName}
        isDisabled={isDisabled}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Mật khẩu"
        placeholder="Nhập mật khẩu"
        type={passType}
        value={password}
        setState={setPassword}
        rightChildren={rightIcon}
        onClickRightIcon={handleShowPassword}
        isDisabled={isDisabled}
      />
    </div>
  );
}

export default AccountSection;
