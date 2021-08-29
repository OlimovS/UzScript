import { Resizable } from "re-resizable";
import ChallengeWorkingDesk from "./Components/ChallengeWorkDesk";
import ChallengeQuestDesk from "./Components/ChallengeQuestDesk";
import MiddleResizerColumn from "../../../components/MiddleResizerColumn";
import { useParams } from "react-router-dom";
import { useMemo } from "react";
import { challenges } from "../../../utils/data/challenges";
import { useWindowSize } from "../../../utils/hooks";

function ChallengeSolvingBoard(props) {
  const { innerWidth } = useWindowSize();
  const { taskID } = useParams();
  const currentChallenge = useMemo(() => {
    return challenges.find((ch) => ch.id == taskID);
  }, [taskID]);

  window.challenges = challenges;
  window.taskID = taskID;
  console.log({ currentChallenge });
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
          <ChallengeWorkingDesk challenge={currentChallenge} />
        </Resizable>
      ) : (
        <ChallengeWorkingDesk challenge={currentChallenge} />
      )}
      <MiddleResizerColumn />
      <ChallengeQuestDesk challenge={currentChallenge} />
    </div>
  );
}

export default ChallengeSolvingBoard;
