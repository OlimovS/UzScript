import { UnControlled as CodeMirror } from "react-codemirror2";

import { EDITOR_LANGUAGE } from "../../utils/constants";

function UzScriptEditor({
  handleChangeEditorState,
  defaultValue = "// UzScriptda kod yozib boshlang\n",
  theme = "material",
  options = {},
  ...rest
}) {
  return (
    <div className="h-100">
      <CodeMirror
        {...rest}
        value={defaultValue}
        options={{
          mode: EDITOR_LANGUAGE,
          theme: theme,
          lineNumbers: true,
          ...options,
        }}
        onChange={handleChangeEditorState}
      />
    </div>
  );
}

export default UzScriptEditor;
