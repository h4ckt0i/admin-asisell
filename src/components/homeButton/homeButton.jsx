import clsx from "clsx";
import Button from "../button/button";
import Image from "../image/image";
import TextLogo from "~/assets/images/text-logo.png";

import styles from "./homeButton.module.scss";

function HomeButton({ className }) {
  return (
    <Button className={clsx(styles.btn, className)} to="/admin">
      <Image className={styles.logo} src={TextLogo} />
    </Button>
  );
}

export default HomeButton;
