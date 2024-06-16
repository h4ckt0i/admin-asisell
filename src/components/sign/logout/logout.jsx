import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import LogOutIcon from "~/assets/icons/logOutIcon";
import IconButton from "~/components/iconButton/iconButton";

import generalStyles from "~/styles/generalStyle.module.scss";

function Logout({ className }) {
  const navigate = useNavigate();

  const logOut = () => {
    sessionStorage.removeItem("admin");
    navigate("/");
  };

  return (
    <>
      <IconButton
        className={clsx(generalStyles.bottomLeftSideBtn, className)}
        textBtn="Đăng xuất"
        onClick={logOut}
      >
        <LogOutIcon className={generalStyles.bottomLeftSideIcon} />
      </IconButton>
    </>
  );
}

export default Logout;
