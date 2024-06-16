import { useState, useEffect } from "react";
import clsx from "clsx";
import IconButton from "../iconButton/iconButton";

import styles from "./scrollToTopButton.module.scss";

function ScrollToTopButton({ element }) {
  const [visible, setVisible] = useState(false);
  const [htmlElement, setHtmlElement] = useState();

  const toggleVisible = (e) => {
    const scrolled = htmlElement.scrollTop;

    if (scrolled > 500) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    const htmlElement = document.querySelector(`.${element}`);

    htmlElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setHtmlElement(document.querySelector(`.${element}`));

    if (htmlElement) {
      htmlElement.addEventListener("scroll", toggleVisible);

      return () => htmlElement.removeEventListener("scroll", toggleVisible);
    }
  }, [htmlElement]);

  return (
    <div
      className={clsx(styles.container, !visible ? styles.hideContainer : null)}
    >
      <IconButton
        className={clsx(styles.btn, !visible ? styles.hideBtn : null)}
        onClick={scrollToTop}
      >
        <i className="fa-solid fa-circle-up"></i>
      </IconButton>
    </div>
  );
}

export default ScrollToTopButton;
