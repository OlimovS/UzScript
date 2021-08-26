import { UzScriptToJavascriptValues } from "./constants";

const comments = ["/*", "//"];

// Comments
const isMultilineCommentEarly = (code) =>
  code.indexOf("/*") > code.indexOf("//");
const hasComment = (code) => comments.some((comment) => code.includes(comment));
const hasMultiLineEnd = (code) => code.includes("*/");
const getEarlyComment = (code) => {
  if (isMultilineCommentEarly(code)) {
    return comments[0];
  }

  return comments[1];
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

      if (comment === comments[0]) {
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
