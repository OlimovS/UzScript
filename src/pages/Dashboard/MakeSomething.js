import { useEffect, useState } from "react";
import Canvas from "../../components/playground/Canvas";
import UzScriptEditor, {
  ViewOnlyCodeMirror,
} from "../../components/UzScriptEditor";
import { playgroundExamples } from "../../utils/data/playgroundExamples";
import { useWindowSize } from "../../utils/hooks";
import { uzScriptPlayParser } from "../../uzscript-engine/playground-engine";
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

function MakeSomething(props) {
  const { innerWidth } = useWindowSize();
  const [defaultEditorState, setDefaultEditorState] = useState(
    playgroundExamples[0].code
  );
  const [editorState, setEditorState] = useState(defaultEditorState);
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

  const handleChangeDefaultEditorState = (id) => {
    setDefaultEditorState(playgroundExamples.find((el) => el.id === id).code);
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
        <div className="overflow-auto flex-grow-1">
          <EditorToolbar
            handleClickRunBtn={handleClickRunBtn}
            handleChangeExample={handleChangeDefaultEditorState}
          />
          <div className="flex-grow-1">
            <UzScriptEditor
              onStateChange={handleEditorStateChange}
              defaultValue={defaultEditorState}
              className="CodeMirror-h-md-100"
              wrapClassName="CodeMirror-h-md-100"
            />
          </div>
        </div>
        <div className="flex-shrink-0">
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

      <div className="d-none">
        {/* <ViewOnlyCodeMirror code={uzScriptPlayParser(editorState)} /> */}
        <img src="/static/cat.svg" />
      </div>
    </div>
  );
}

export default MakeSomething;
