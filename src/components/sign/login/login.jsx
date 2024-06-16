import clsx from "clsx";
import Image from "~/components/image/image";
import IconButton from "~/components/iconButton/iconButton";
import UserIcon from "~/assets/icons/userIcon";
import { getLocalAdmin } from "~/utils/common";

import styles from "./login.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function Login({ className, profileBtnStyles }) {
  const localAdmin = getLocalAdmin();

  return (
    <div className={clsx(styles.container, className)}>
      <IconButton
        className={clsx(
          generalStyles.bottomLeftSideBtn,
          styles.profile,
          profileBtnStyles
        )}
        textBtn={localAdmin.name}
      >
        {localAdmin.avatar ? (
          <Image
            className={clsx(styles.icon, styles.avatar)}
            src={localAdmin.avatar}
          />
        ) : (
          <UserIcon className={generalStyles.bottomLeftSideIcon} />
        )}
      </IconButton>
    </div>
  );
}

export default Login;
