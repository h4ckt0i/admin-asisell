import { useEffect } from "react";
import clsx from "clsx";
import Image from "../image/image";
import Logo from "~/assets/images/logo.png";

import styles from "./loading.module.scss";

function Loading({ className }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  });

  return (
    <div className={clsx(styles.container, className)}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src={Logo} />
      </div>
    </div>
  );
}

export default Loading;
