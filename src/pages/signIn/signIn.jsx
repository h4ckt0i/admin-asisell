import { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import InputSection from "~/components/section/inputSection/inputSection";
import LoadingBtn from "~/components/loadingBtn/loadingBtn";
import UserIcon from "~/assets/icons/userIcon";
import EyeIcon from "~/assets/icons/eyeIcon";
import EyeSlashIcon from "~/assets/icons/eyeSlashIcon";
import LockIcon from "~/assets/icons/lockIcon";
import { fetchApi, setDocumentTitle } from "~/utils/common";
import * as adminSlice from "~/store/common/slice/adminSlice";

import styles from "./signIn.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function SignIn() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isFalse, setIsFalse] = useState(false);
  const inputTypeText = "text";
  const inputTypePass = "password";
  const [passType, setPassType] = useState(inputTypePass);
  const [rightIcon, setRightIcon] = useState(
    <EyeIcon className={styles.icon} />
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isPermitted, setIsPermitted] = useState(false);

  const userNameRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    const getAdmin = () =>
 

    setIsLoading(true);
    setIsDisabled(true);

    if (userName && password) {
      getAdmin().then((result) => {
        const admin = result[0];

        if (admin) {
          if (admin) {
           
              navigate("/admin");
            } else {
              setIsPermitted(true);
            }
          } else {
            setIsFalse(true);
          }
        } else {
          setIsFalse(true);
        }
        setIsLoading(false);
        setIsDisabled(false);
      });
    } else {
      setIsFalse(true);
      setIsLoading(false);
      setIsDisabled(false);
    }
  };

  const handleShowPassword = () => {
    if (passType === inputTypeText) {
      setPassType(inputTypePass);
      setRightIcon(<EyeIcon className={styles.icon} />);
    } else {
      setPassType(inputTypeText);
      setRightIcon(<EyeSlashIcon className={styles.icon} />);
    }
  };

  useEffect(() => {
    setIsFalse(false);
  }, [userName, password]);

  useEffect(() => {
    setDocumentTitle("Đăng nhập");

    const logInBtn = document.querySelector(`.${styles.btn}`);

    const pressEnterKey = (element) => {
      element.addEventListener("keypress", (e) => {
        if (e.keyCode === 13) {
          e.preventDefault();
          logInBtn.click();
        }
      });
    };

    pressEnterKey(document.body);
    pressEnterKey(userNameRef.current);
    pressEnterKey(passwordRef.current);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.inputBody}>
          <InputSection
            className={clsx(
              generalStyles.rightSideInputSectionTwo,
              styles.inputSection
            )}
            ref={userNameRef}
            title="Tên đăng nhập"
            value={userName}
            placeholder="Nhập tên đăng nhập"
            setState={setUserName}
            isDisabled={isDisabled}
          >
            <UserIcon className={styles.icon} />
          </InputSection>
          <InputSection
            className={clsx(
              generalStyles.rightSideInputSectionTwo,
              styles.inputSection
            )}
            ref={passwordRef}
            title="Mật khẩu"
            type={passType}
            value={password}
            placeholder="Nhập mật khẩu"
            setState={setPassword}
            rightChildren={rightIcon}
            onClickRightIcon={handleShowPassword}
            isDisabled={isDisabled}
          >
            <LockIcon className={styles.icon} />
          </InputSection>
        </div>
        {isFalse && (
          <span className={generalStyles.canceled}>
            Tên đăng nhập hoặc mật khẩu không đúng!
          </span>
        )}
        {isPermitted && (
          <span className={generalStyles.canceled}>
            Tài khoản không đủ phân quyền để đăng nhập
          </span>
        )}
        <LoadingBtn
          className={clsx(generalStyles.rightSideBtn, styles.btn)}
          textBtn="Đăng nhập"
          isLoading={isLoading}
          onClick={handleLogin}
        />
      </div>
    </div>
  );
}

export default SignIn;
