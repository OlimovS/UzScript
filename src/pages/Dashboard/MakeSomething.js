import { useEffect, useState } from "react";
import { useWindowSize } from "rooks";
import Canvas from "../../components/playground/Canvas";
import UzScriptEditor from "../../components/UzScriptEditor";

const makePropsForCv = (innerWidth) => {
  let size;
  if (innerWidth > 768) {
    size = 450;
  } else {
    return { resize: "true" };
  }

  return { height: size, width: size };
};

function MakeSomething(props) {
  const { innerHeight, innerWidth } = useWindowSize();
  const [cvProps, setCvProps] = useState(makePropsForCv(innerWidth));
  const handleEditorStateChange = () => {};

  useEffect(() => {
    setCvProps((prev) => {
      const curr = makePropsForCv(innerWidth);
      if (prev.hasOwnProperty("width") && curr.hasOwnProperty("resize")) {
        window.location.reload();
      } else if (
        prev.hasOwnProperty("resize") &&
        curr.hasOwnProperty("width")
      ) {
        window.location.reload();
      }
      return curr;
    });
  }, [innerWidth]);

  return (
    <div>
      <div className="d-md-flex">
        <div className="flex-grow-1">
          <UzScriptEditor
            onStateChange={handleEditorStateChange}
            className="CodeMirror-h-md-100"
            wrapClassName="CodeMirror-h-md-100"
          />
        </div>
        <div className="p-2 bg-info">
          <div className="bg-white">
            <Canvas {...cvProps} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MakeSomething;
