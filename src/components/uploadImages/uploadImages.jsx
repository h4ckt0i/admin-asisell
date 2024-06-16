import { useState, useRef } from "react";
import clsx from "clsx";
import Input from "~/components/input/input";
import Image from "~/components/image/image";
import IconButton from "~/components/iconButton/iconButton";
import UploadImageIcon from "~/assets/icons/uploadImageIcon";
import { handleFile } from "~/utils/common";

import styles from "./uploadImages.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function UploadImages({
  subText,
  textBtn,
  isMultiple,
  setImgFiles,
  isDisabled,
  className,
}) {
  const [uploadedImgs, setUploadedImgs] = useState([]);

  const uploadImgRef = useRef();

  return (
    <div className={clsx(styles.container, className)}>
      <div className={styles.header}>
        <span className={generalStyles.rightSideSubTitle}>Đăng ảnh</span>
        {subText && <span className={styles.subText}>{subText}</span>}
      </div>
      <IconButton
        className={styles.chooseImgBtn}
        textBtn={textBtn}
        onClick={() => uploadImgRef.current.click()}
      >
        <UploadImageIcon className={styles.chooseImgIcon} />
      </IconButton>
      {uploadedImgs.length !== 0 && (
        <ul className={clsx(generalStyles.list, styles.imgsList)}>
          {uploadedImgs.map((img, index) => (
            <Image className={styles.imgItem} src={img} key={index} />
          ))}
        </ul>
      )}
      <Input
        className={styles.uploadImgInput}
        type="file"
        accept="image/png,image/jpg,image/jpeg"
        multiple={isMultiple}
        ref={uploadImgRef}
        onChange={(e) => handleFile(e, setUploadedImgs, setImgFiles)}
        isDisabled={isDisabled}
      />
    </div>
  );
}

export default UploadImages;
