import { UnControlled as CodeMirror } from "react-codemirror2";

import { EDITOR_LANGUAGE } from "../../utils/constants";

function UzScriptEditor({
  handleChangeEditorState,
  defaultValue,
  theme = "material",
}) {
  return (
    <div>
      <CodeMirror
        value={defaultValue}
        options={{
          mode: EDITOR_LANGUAGE,
          theme: theme,
          lineNumbers: true,
        }}
        onChange={handleChangeEditorState}
      />
    </div>
  );
}

export default UzScriptEditor;
