import { useEffect, useState } from "react";
import { useWindowSize } from "rooks";
import Canvas from "../../components/playground/Canvas";
import UzScriptEditor from "../../components/UzScriptEditor";
import { PlaygroundToolbar, EditorToolbar } from "./MakeSomething/Toolbar";

const makePropsForCanvasPlayground = (innerWidth) => {
  let size;
  if (innerWidth > 768) {
    size = 450;
  } else {
    return { resize: "true" };
  }

  return { height: size, width: size };
};

// const defaultValue = "// UzScript-Play bilan dastur yasang!";
const defaultValue = `// UzScript-Play bilan dastur yasang!

var mushuk = new Mushuk('cat', {x: 0, y: 0});


var btn = document.getElementById('playgroundRunID'); 

btn.addEventListener('click', function() {
  mushuk.qadamTashla(30);      
  if(mushuk.chegaragaUrildimi)  {
    mushuk.burulOnTomonga()
  }               
 })

//  paper.view.onFrame = function(event) {
//   mushuk.qadamTashla(3);    

// }


`;

function MakeSomething(props) {
  const { innerWidth } = useWindowSize();
  const [editorState, setEditorState] = useState(defaultValue);
  const [rerenderIndex, setRerenderIndex] = useState(0);
  const [cvProps, setCvProps] = useState(
    makePropsForCanvasPlayground(innerWidth)
  );
  const handleEditorStateChange = (value) => {
    setEditorState(value);
  };

  const handleClickRunBtn = () => {
    setRerenderIndex((prev) => prev + 1);
  };

  useEffect(() => {
    setCvProps((prev) => {
      const curr = makePropsForCanvasPlayground(innerWidth);
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
        <div className="flex-grow-1 d-flex flex-column">
          <EditorToolbar handleClickRunBtn={handleClickRunBtn} />
          <div className="flex-grow-1">
            <UzScriptEditor
              onStateChange={handleEditorStateChange}
              defaultValue={defaultValue}
              className="CodeMirror-h-md-100"
              wrapClassName="CodeMirror-h-md-100"
            />
          </div>
        </div>
        <div>
          <PlaygroundToolbar />
          <div className="p-2 bg-info">
            <div className="bg-white">
              <Canvas
                {...cvProps}
                uzScriptCode={editorState}
                rerenderIndex={rerenderIndex}
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3>Images</h3>
        <img src="/static/cat.svg" />
      </div>
    </div>
  );
}

export default MakeSomething;
