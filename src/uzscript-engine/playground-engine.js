import { UzScriptToJavascriptValues } from "./constants";
import uzScriptParser from "./parser";

const playgroundKeywords = {
  hodisaTinglovchiQosh: "addEventListener",
  bosish: "click",
  oyingoh: "paper.view",
  bolganda: "on",
  animatsiya: "frame",
  aylan: "rotate",
  "sichqoncha-bos": "mousedown",
  "sichqoncha-kotar": "mouseup",
  "sichqoncha-yurish": "mousemove",
  "sichqoncha-sudrash": "mousedrag",
};

const uzScriptOverrides = {
  deylik: "var",
};

export const AllKeywordsUzScriptPlay = {
  ...UzScriptToJavascriptValues,
  ...playgroundKeywords,
  ...uzScriptOverrides,
};

export const uzScriptPlayParser = (code) =>
  uzScriptParser(code, AllKeywordsUzScriptPlay);
