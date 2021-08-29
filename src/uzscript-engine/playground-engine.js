import { UzScriptToJavascriptValues } from "./constants";
import uzScriptParser from "./parser";

const playgroundKeywords = {
  hodisaTinglovchiQosh: "addEventListener",
  bosish: "click",
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
