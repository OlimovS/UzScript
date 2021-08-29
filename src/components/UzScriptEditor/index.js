import {
  UnControlled as CodeMirror,
  Controlled as ViewCodeMirror,
} from "react-codemirror2";
import PropTypes from "prop-types";

import { EDITOR_LANGUAGE } from "../../utils/constants";

function UzScriptEditor({
  onStateChange,
  defaultValue = "// UzScriptda kod yozib boshlang\n",
  theme = "material",
  options = {},
  wrapClassName = "",
  wrapStyle = {},
  ...rest
}) {
  const handleEditorStateChange = (editor, data, value) => {
    onStateChange(value, data, editor);
  };
  return (
    <div className={wrapClassName} style={wrapStyle}>
      <CodeMirror
        {...rest}
        value={defaultValue}
        options={{
          mode: EDITOR_LANGUAGE,
          theme: theme,
          lineNumbers: true,
          ...options,
        }}
        onChange={handleEditorStateChange}
      />
    </div>
  );
}

export default UzScriptEditor;

export const ViewOnlyCodeMirror = ({
  code,
  mode = "javascript",
  theme = "material",
}) => (
  <ViewCodeMirror
    value={code}
    options={{
      mode: mode,
      theme: theme,
      lineNumbers: true,
      readOnly: "nocursor",
    }}
  />
);
