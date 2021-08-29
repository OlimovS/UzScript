export function PlaygroundToolbar(props) {
  return (
    <div>
      <button id="playgroundRunID">Run</button>
    </div>
  );
}

export function EditorToolbar({ handleClickRunBtn }) {
  return (
    <div>
      <button onClick={handleClickRunBtn}>Run</button>
    </div>
  );
}
