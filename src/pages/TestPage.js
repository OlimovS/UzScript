import { useEffect, useRef, useState } from "react";
import {
  UnControlled as CodeMirror,
  Controlled as ViewCodeMirror,
} from "react-codemirror2";
import ShowJSCodeRunResult from "../components/ShowJSCodeRunResult";
import uzScriptParser from "../uzscript-engine/parser";

// const MODE = "javascript";
const MODE = "javascript-copy";

const defaultValue = `// UzScriptda kod yozib boshlang\n`;

function TestPage() {
  const [editorState, setEditorState] = useState(defaultValue);
  const [jsViewState, setJSViewState] = useState(uzScriptParser(defaultValue));

  const handleChangeEditorState = (editor, data, value) => {
    // console.log({editor, data, value})
    setEditorState(value);
    setJSViewState(uzScriptParser(value));
  };

  return (
    <div className="TestPage container-fluid">
      <h1>Hello</h1>
      <div className="row">
        <div className="col-6">
          <h2>UzScript</h2>
          <CodeMirror
            value={defaultValue}
            options={{
              mode: MODE,
              theme: "material",
              lineNumbers: true,
            }}
            onChange={handleChangeEditorState}
          />
        </div>
        <div className="col-6">
          <h2>Javascript Version</h2>
          <ViewCodeMirror
            value={jsViewState}
            options={{
              mode: "javascript",
              theme: "material",
              lineNumbers: true,
              readOnly: "nocursor",
            }}
          />
        </div>
      </div>
      <ShowJSCodeRunResult jsCode={jsViewState} />
    </div>
  );
}

export default TestPage;
