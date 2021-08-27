import { UzScriptToJavascriptValues } from "./constants";

export const LANG_COMMENTS = ["/*", "//"];

// LANG_COMMENTS
export const isMultilineCommentEarly = (code) =>
  code.indexOf("/*") > code.indexOf("//");
export const hasComment = (code) =>
  LANG_COMMENTS.some((comment) => code.includes(comment));
export const hasMultiLineEnd = (code) => code.includes("*/");
export const getEarlyComment = (code) => {
  if (isMultilineCommentEarly(code)) {
    return LANG_COMMENTS[0];
  }

  return LANG_COMMENTS[1];
};

export default function uzScriptParser(uzscript) {
  const codeArray = uzscript.split("\n");

  let isMultilineCommentGoing = false;

  const convertUzScriptToJS = (code) => {
    for (const uzScriptKey in UzScriptToJavascriptValues) {
      if (code.includes(uzScriptKey)) {
        const altJSValue = UzScriptToJavascriptValues[uzScriptKey];
        const regex = new RegExp(uzScriptKey, "g");
        code = code.replace(regex, altJSValue);
      }
    }

    return code;
  };

  const handleOneLineCode = (lineCode) => {
    if (isMultilineCommentGoing) {
      if (hasMultiLineEnd(lineCode)) {
        isMultilineCommentGoing = false;
      }
      return lineCode;
    }

    if (hasComment(lineCode)) {
      const comment = getEarlyComment(lineCode);
      const separetedIndex = lineCode.indexOf(comment);

      const pureCode = lineCode.substring(0, separetedIndex);
      const commentCode = lineCode.substring(separetedIndex + 2);

      if (comment === LANG_COMMENTS[0]) {
        isMultilineCommentGoing = true;
      }

      return String.prototype.concat(
        convertUzScriptToJS(pureCode),
        comment,
        commentCode
      );
    }

    return convertUzScriptToJS(lineCode);
  };

  return codeArray.map(handleOneLineCode).join("\n");
}
