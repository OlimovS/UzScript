import { UzScriptToJavascriptValues } from "../../uzscript-engine/constants";
import {
  getEarlyComment,
  hasComment,
  hasMultiLineEnd,
  LANG_COMMENTS,
} from "../../uzscript-engine/parser";

export const makeFuncArguments = (pref, count) => {
  console.log({ pref, count });
  return Array(count)
    .fill(1)
    .map((el, idx) => `${pref}${idx + 1}`)
    .join(", ");
};

export function getFunctionCodeOnly(uzscript) {
  const codeArray = uzscript.split("\n");

  let isMultilineCommentGoing = false;

  const handleOneLineCode = (lineCode) => {
    if (isMultilineCommentGoing) {
      if (hasMultiLineEnd(lineCode)) {
        isMultilineCommentGoing = false;
      }
      return "";
    }

    if (hasComment(lineCode)) {
      const comment = getEarlyComment(lineCode);
      const separetedIndex = lineCode.indexOf(comment);

      const pureCode = lineCode.substring(0, separetedIndex);
      // const commentCode = lineCode.substring(separetedIndex + 2);

      if (comment === LANG_COMMENTS[0]) {
        isMultilineCommentGoing = true;
      }

      return pureCode;
    }

    return lineCode;
  };

  return codeArray
    .map(handleOneLineCode)
    .filter((el) => !!el)
    .join(" ");
}

export const convertJSKeywordsToUzScript = (jsCode) => {
  debugger;
  const handleOneKeyword = (word) => {
    for (let key in UzScriptToJavascriptValues) {
      const regexWithQuot = new RegExp(
        ` '${UzScriptToJavascriptValues[key]}' `
      );
      console.log(regexWithQuot);
      const regex = new RegExp(` ${UzScriptToJavascriptValues[key]} `);
      if (regexWithQuot.test(word)) {
        return word.replace(regexWithQuot, ` '${key}' `);
      } else if (regex.test(word)) {
        return word.replace(regex, ` ${key} `);
      }
    }

    return word;
  };
  return jsCode.split(" ").map(handleOneKeyword).join(" ");
};
