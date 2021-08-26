import { Resizable } from "re-resizable";
import { CardColumns } from "react-bootstrap";

function ChallengeSolvingBoard(props) {
  return (
    <div className="challenge__solving__board d-flex justify-content-center">
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
        <div className="challenge__scrollable__content p-1">
          <div>
            {Array(20)
              .fill(1)
              .map((el, idx) => (
                <p key={idx}>
                  lorem ipsum Given a string s, find the length of the longest
                  substring without repeating characters.
                </p>
              ))}
          </div>
        </div>
      </Resizable>
      <div className="challenge__middle__touch__resizer d-flex justify-content-center align-items-center">
        <div>
          <p className="m-0 p-0">.</p>
          <p className="m-0 p-0">.</p>
          <p className="m-0 p-0">.</p>
        </div>
      </div>
      <div className="challenge__scrollable__content p-1 w-100">
        <h1>hello</h1>
        <div>
          {Array(20)
            .fill(1)
            .map((el, idx) => (
              <p key={idx}>
                lorem ipsum Given a string s, find the length of the longest
                substring without repeating characters.
              </p>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ChallengeSolvingBoard;
