import Canvas from "../../components/playground/Canvas";
import UzScriptEditor from "../../components/UzScriptEditor";

function MakeSomething(props) {
  const handleEditorStateChange = () => {};

  return (
    <div>
      <h1>MakeSomething</h1>
      <UzScriptEditor onStateChange={handleEditorStateChange} />
      <Canvas />
    </div>
  );
}

export default MakeSomething;
