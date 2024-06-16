import { useState, useEffect } from "react";
import clsx from "clsx";
import Tippy from "@tippyjs/react/headless";
import Image from "../image/image";
import IconButton from "../iconButton/iconButton";
import Login from "../sign/login/login";
import Logout from "../sign/logout/logout";
import LogoText from "~/assets/images/logo-text.png";

import styles from "./header.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const renderProfile = (attrs) => (
    <div
      tabIndex="-1"
      {...attrs}
      className={clsx(generalStyles.section, styles.menuContainer)}
    >
      <IconButton
        className={styles.profileBtn}
        // href="/profile"
        textBtn="Trang cá nhân"
      >
        <i className="fa-solid fa-user"></i>
      </IconButton>
      <Logout className={styles.profileBtn} />
    </div>
  );

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, []);

  return (
    <div className={styles.container}>
      <div className={generalStyles.body}>
        <div className={clsx(generalStyles.content, styles.content)}>
          <IconButton className={styles.home} to="/" alt="Asisell">
            <Image className={styles.homeImg} src={LogoText} />
          </IconButton>
          <div className={styles.loginContainer}>
            <Tippy
              interactive
              placement="bottom"
              trigger={isLoggedIn ? "click" : ""}
              render={renderProfile}
            >
              <div>
                <Login className={styles.loginBtn} />
              </div>
            </Tippy>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
