const editorModules = {
  toolbar: [
    //   [{ header: [1, 2, 3, 4, 5, 6] }],
    // [{ size: ["small", false, "large", "huge"] }],
    ["bold", "italic", "underline"],
    // ["image", "link"],
    //   ["blockquote"],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ list: "ordered" }, { list: "bullet" }],
    // [{ script: "sub" }, { script: "super" }],
    // [{ color: [] }, { background: [] }],
    // [{ align: [] }],
  ],
};

const editorFormats = [
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "color",
  "background",
  "script",
  "header",
  "blockquote",
  "code-block",
  "indent",
  "list",
  "direction",
  "align",
  "link",
  "image",
  "video",
  "formula",
];

const editorStyles = {
  position: "relative",
  height: "30rem",
  background: "#fff",
  borderRadius: "1rem",
  overflow: "hidden",
};

export { editorModules, editorFormats, editorStyles };
