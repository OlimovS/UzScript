import uzScriptParser from "../../uzscript-engine/parser";
import { ERROR_OCCURED, TEST_FAILED, TEST_SUCCESS } from "../constants";
import { getFunctionCodeOnly } from "./contentMakers";

export const checkQuestionAnswers = (strUzScriptCode, tests) => {
  return new Promise((resolve, reject) => {
    const fnc = getFunctionCodeOnly(uzScriptParser(strUzScriptCode));

    try {
      console.log({ fnc });

      for (let i = 0; i < tests.length; i++) {
        const result = window.eval.call(window, `(${fnc})`)(...tests[i].inputs);
        if (result !== tests[i].output) {
          reject({ status: TEST_FAILED, index: i + 1, allCases: tests.length });
        } else {
          console.log({ result, answer: tests[i].output });
        }
      }

      resolve({ status: TEST_SUCCESS });
    } catch (error) {
      reject({ status: ERROR_OCCURED, message: error.message });
    }
  });
};
