import uzScriptParser from "../../uzscript-engine/parser";
import { ERROR_OCCURED, TEST_FAILED, TEST_SUCCESS } from "../constants";
import {
  convertJSKeywordsToUzScript,
  getFunctionCodeOnly,
} from "./contentMakers";

export const checkQuestionAnswers = (strUzScriptCode, tests) => {
  return new Promise((resolve, reject) => {
    const fnc = getFunctionCodeOnly(uzScriptParser(strUzScriptCode));

    var timerId = null;
    try {
      timerId = setTimeout(() => {
        clearTimeout(timerId);
        throw new Error("Vaqt chegarasidan oshib ketdi.");
      }, 3000);
      for (let i = 0; i < tests.length; i++) {
        const currTest = tests[i];
        const result = window.eval.call(window, `(${fnc})`)(...currTest.inputs);
        if (result !== currTest.output) {
          reject({
            status: TEST_FAILED,
            index: i + 1,
            allCases: tests.length,
            inputs: [...currTest.inputs],
            output: currTest.output,
            yourOutput: result,
          });
        }
      }
      clearTimeout(timerId);

      resolve({ status: TEST_SUCCESS });
    } catch (error) {
      clearTimeout(timerId);

      reject({
        status: ERROR_OCCURED,
        message: convertJSKeywordsToUzScript(error.message),
        name: error.name,
      });
    }
  });
};
