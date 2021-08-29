import UzScriptEditor from "../../../../components/UzScriptEditor";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import { makeFuncArguments } from "../../../../utils/helpers/contentMakers";
import { useMemo, useState, useEffect } from "react";
import { checkQuestionAnswers } from "../../../../utils/helpers/contentCheckers";
import ShowCodeRunResponse from "./ShowCodeRunResponse";

function ChallengeWorkingDesk({ challenge }) {
  const defaultValue = useMemo(() => {
    return `// UzScriptda javobingizni shu yerga yozing! 

funksiya ${challenge?.solutionSection?.functionName} (${makeFuncArguments(
      challenge?.solutionSection?.inputConfig?.prefix,
      challenge?.solutionSection?.inputConfig?.count
    )}) {
  
}`;
  }, [challenge.id]);
  const [testRunStatus, SetTestRunStatus] = useState("pending");
  const [editorState, setEditorState] = useState(defaultValue);
  const [codeRunResponse, setCodeRunResponse] = useState({});

  const handleEditorStateChange = (value) => {
    setEditorState(value);
  };

  const handleCloseResponseShow = () => {
    SetTestRunStatus("pending");
  };

  const handleClickRunTests = () => {
    SetTestRunStatus("loading");
    setTimeout(() => {
      checkQuestionAnswers(editorState, challenge.solutionSection.tests)
        .then((res) => {
          setCodeRunResponse(res);
          SetTestRunStatus("done");
        })
        .catch((err) => {
          console.log(err);
          setCodeRunResponse(err);
          SetTestRunStatus("done");
        });
    }, 300);
  };

  console.log({ testRunStatus });
  return (
    <div className="challenge__scrollable__content d-flex flex-column order-2">
      <div className="h-sm-100-50px max-h-100 flex-grow-1">
        <UzScriptEditor
          defaultValue={defaultValue}
          theme="material"
          onStateChange={handleEditorStateChange}
          className="CodeMirror-h-sm-100"
          wrapClassName="CodeMirror-h-sm-100"
        />
      </div>

      <div className="challenge__bottom__navbar my-2 my-sm-0 ">
        <ShowCodeRunResponse
          response={codeRunResponse}
          status={testRunStatus}
          handleCloseResponseShow={handleCloseResponseShow}
        />
        <div className="d-flex align-items-center">
          <div>
            <AiOutlineUnorderedList size="30" />
          </div>
          <div className="ml-auto">
            <Button
              className="mr-3"
              variant="primary"
              size="sm"
              onClick={handleClickRunTests}
              disabled={testRunStatus == "loading"}
            >
              Vazifani topshirish
            </Button>
            {/* 
            // Aslida ikkita button bo'lishi kerak ammo hozirchaga bitta qoyib turamiz. Sabab javoblar front-end tomonda tekshiriliaypti.
            <Button
              className="mr-3"
              variant="outline-info"
              size="sm"
              onClick={handleClickRunTests}
              disabled={testRunStatus == "loading"}
            >
              Run tests
            </Button>
            <Button
              variant="primary"
              size="sm"
              disabled={testRunStatus == "loading"}
            >
              Submit Answer
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChallengeWorkingDesk;
