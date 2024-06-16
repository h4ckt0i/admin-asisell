import { useState, forwardRef } from "react";
import clsx from "clsx";
import NoImage from "~/assets/images/no-image.png";

import styles from "./image.module.scss";

const Image = forwardRef(
  (
    { src, alt = "", className, fallback: customFallback = NoImage, ...props },
    ref
  ) => {
    const [fallback, setFallback] = useState("");

    const handleError = () => {
      setFallback(customFallback);
    };

    return (
      <img
        className={clsx(styles.container, className)}
        ref={ref}
        src={fallback || src}
        alt={alt}
        {...props}
        onError={handleError}
      />
    );
  }
);

export default Image;
