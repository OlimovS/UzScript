import UzScriptEditor from "../../../../components/UzScriptEditor";
import { AiOutlineDown, AiOutlineUnorderedList } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import { makeFuncArguments } from "../../../../utils/helpers/contentMakers";
import { useMemo, useState, useEffect } from "react";
import { Accordion, CloseButton, useAccordionButton } from "react-bootstrap";
import { checkQuestionAnswers } from "../../../../utils/helpers/contentCheckers";
import { ERROR_OCCURED, TEST_FAILED } from "../../../../utils/constants";

function ChallengeWorkingDesk({ challenge }) {
  const defaultValue = useMemo(() => {
    return `// UzScriptda javobingizni shu yerga yozing! 

funksiya ${challenge?.solutionSection?.functionName} (${makeFuncArguments(
      challenge?.solutionSection?.inputConfig?.prefix,
      challenge?.solutionSection?.inputConfig?.count
    )}) {
  
}`;
  }, [challenge.id]);
  const [isTestRun, setIsTestRun] = useState("close");
  const [editorState, setEditorState] = useState(defaultValue);

  const handleChangeEditorState = (editor, data, value) => {
    setEditorState(value);
  };

  const handleEditorOnFocus = () => {
    // setIsTestRun(false);
  };

  const handleClickRunTests = () => {
    setIsTestRun("running");
    checkQuestionAnswers(editorState, challenge.solutionSection.tests)
      .then((res) => {
        console.log("Success");
      })
      .catch((err) => {
        if (err.status === ERROR_OCCURED) {
          console.log("Error OCcured while doing", err.message);
        } else if (err.status === TEST_FAILED) {
          console.log("Test failed in ", err.index, err.allCases);
        }
      });
  };

  console.log({ isTestRun });
  return (
    <div className="challenge__scrollable__content d-flex flex-column order-2">
      <div className="h-sm-100-50px max-h-100 flex-grow-1">
        <UzScriptEditor
          defaultValue={defaultValue}
          theme="material"
          handleChangeEditorState={handleChangeEditorState}
          // onFocus={handleEditorOnFocus}
          className="CodeMirror-h-sm-100"
          wrapClassName="CodeMirror-h-sm-100"
        />
      </div>

      <div className="challenge__bottom__navbar my-2 my-sm-0 ">
        {/* <div className={isTestRun ? "d-block" : "d-none"}>
          <div className="d-flex justify-content-end">
            <AiOutlineDown size="25" />
          </div>
          <div>
            <h1>lorem ipsum</h1>
          </div>
        </div> */}
        <div className="d-flex align-items-center">
          <div>
            <AiOutlineUnorderedList size="30" />
          </div>
          <div className="ml-auto">
            <Button
              className="mr-3"
              variant="outline-info"
              size="sm"
              onClick={handleClickRunTests}
            >
              Run tests
            </Button>
            <Button variant="primary" size="sm">
              Submit Answer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChallengeWorkingDesk;
