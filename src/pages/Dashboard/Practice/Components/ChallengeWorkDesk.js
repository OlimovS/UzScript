import UzScriptEditor from "../../../../components/UzScriptEditor";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import { useMemo } from "react";
import { makeFuncArguments } from "../../../../utils/helpers/contentMakers";

function ChallengeWorkingDesk({ challenge }) {
  const handleChangeEditorState = (editor, data, value) => {
    console.log({ value });
  };

  const defaultValue = useMemo(() => {
    return `
funksiya ${challenge?.solutionSection?.functionName} (${makeFuncArguments(
      challenge?.solutionSection?.inputConfig?.prefix,
      challenge?.solutionSection?.inputConfig?.count
    )}) {
  
}`;
  }, [challenge.id]);
  return (
    <div className="challenge__scrollable__content d-flex flex-column order-2">
      <div className="h-sm-100-50px">
        <UzScriptEditor
          defaultValue={defaultValue}
          theme="material"
          handleChangeEditorState={handleChangeEditorState}
          className="CodeMirror-h-sm-100"
          wrapClassName="CodeMirror-h-sm-100"
        />
      </div>
      <div className="challenge__bottom__navbar  my-2 my-sm-0 d-flex align-items-center">
        <div>
          <AiOutlineUnorderedList size="30" />
        </div>
        <div className="ml-auto">
          <Button className="mr-3" variant="outline-info" size="sm">
            Run tests
          </Button>
          <Button variant="primary" size="sm">
            Submit Answer
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ChallengeWorkingDesk;
