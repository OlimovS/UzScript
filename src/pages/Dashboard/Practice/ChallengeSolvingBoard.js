import { Resizable } from "re-resizable";
import { CardColumns } from "react-bootstrap";
import UzScriptEditor from "../../../components/UzScriptEditor";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import { useWindowSize } from "rooks";
import ChallengeWorkingDesk from "./Components/ChallengeWorkDesk";
import ChallengeQuestDesk from "./Components/ChallengeQuestDesk";
import MiddleResizerColumn from "../../../components/MiddleResizerColumn";

function ChallengeSolvingBoard(props) {
  const { innerWidth, innerHeight, outerHeight, outerWidth } = useWindowSize();

  const handleChangeEditorState = (editor, data, value) => {
    console.log({ value });
  };
  return (
    <div className="challenge__solving__board d-flex justify-content-center flex-column flex-sm-row">
      {innerWidth >= 576 ? (
        <Resizable
          defaultSize={{
            width: "50%",
            height: "100%",
          }}
          minWidth={200}
          maxWidth="80%"
          maxHeight="100%"
          className="challenge__resizable"
          enable={{
            top: false,
            right: true,
            bottom: false,
            left: false,
            topRight: false,
            bottomRight: false,
            bottomLeft: false,
            topLeft: false,
          }}
        >
          <ChallengeWorkingDesk />
        </Resizable>
      ) : (
        <ChallengeWorkingDesk />
      )}
      <MiddleResizerColumn />
      <ChallengeQuestDesk />
    </div>
  );
}

export default ChallengeSolvingBoard;
