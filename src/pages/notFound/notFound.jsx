import clsx from "clsx";
import Button from "~/components/button/button";
import Image from "~/components/image/image";
import IconButton from "~/components/iconButton/iconButton";
import NotFoundImg from "~/assets/images/not-found.png";
import { social } from "./index";

import styles from "./notFound.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function NotFound() {
  return (
    <div className={styles.container}>
      <div className={clsx(generalStyles.body, styles.contentContainer)}>
        <Image className={styles.img} src={NotFoundImg} />
        <div className={styles.content}>
          <span className={styles.title}>404 Whoops!</span>
          <span className={styles.subTitle}>không tìm thấy trang</span>
          <Button className={styles.homeBtn} to="/" textBtn="Về nhà thôi" />
        </div>
        <ul className={styles.list}>
          {social.map((item) => {
            let Icon = item.icon;
            return (
              <IconButton
                className={styles.item}
                href={item.link}
                key={item.id}
                target="_blank"
                rel="noreferrer"
              >
                <Icon className={styles.linkIcon} />
              </IconButton>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default NotFound;
