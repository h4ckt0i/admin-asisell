import { useEffect } from "react";
import clsx from "clsx";
import ReactQuill from "react-quill";
import { editorModules, editorFormats, editorStyles } from "./index";

import styles from "./textFieldSection.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";
import "react-quill/dist/quill.snow.css";

function TextFieldSection({
  className,
  title,
  placeholder,
  value,
  setState,
  isDisabled,
}) {
  useEffect(() => {
    const toolbars = document.querySelectorAll(".ql-toolbar");
    const snows = document.querySelectorAll(".ql-container");

    toolbars.forEach(
      (item) =>
        (item.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    background-color: white;
    z-index: 2;
    `)
    );
    snows.forEach(
      (item) =>
        (item.style.cssText = `
    height: 100%;
    padding-top: 4rem;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    overflow: auto;
    `)
    );
  }, []);

  return (
    <div
      className={clsx(
        generalStyles.rightSideInputSection,
        styles.container,
        className
      )}
    >
      <span className={generalStyles.rightSideSubTitle}>{title}</span>
      <ReactQuill
        theme="snow"
        placeholder={placeholder}
        value={value}
        modules={editorModules}
        formats={editorFormats}
        style={editorStyles}
        onChange={(e) => setState(e)}
        readOnly={isDisabled}
      />
    </div>
  );
}

export default TextFieldSection;
