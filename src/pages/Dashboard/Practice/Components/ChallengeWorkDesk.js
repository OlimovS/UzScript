import UzScriptEditor from "../../../../components/UzScriptEditor";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Button from "react-bootstrap/Button";

function ChallengeWorkingDesk() {
  const handleChangeEditorState = (editor, data, value) => {
    console.log({ value });
  };
  return (
    <div className="challenge__scrollable__content d-flex flex-column order-2">
      <div className="h-100-50px">
        <UzScriptEditor
          theme="material"
          handleChangeEditorState={handleChangeEditorState}
          className="CodeMirror-h-100"
          options={{ autofocus: true }}
        />
      </div>
      <div className="challenge__bottom__navbar d-flex align-items-center">
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
