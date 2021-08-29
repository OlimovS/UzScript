import { AiFillCaretRight, AiFillFlag } from "react-icons/ai";

export function PlaygroundToolbar(props) {
  return (
    <div>
      <div className="d-flex justify-content-center py-1 px-3">
        <div
          className="cursor__pointer p-1 run__icon__div"
          id="playgroundRunID"
        >
          <AiFillFlag size="30" color="#05a805" />
        </div>
      </div>
    </div>
  );
}

export function EditorToolbar({ handleClickRunBtn }) {
  return (
    <div className="d-flex py-1 px-3">
      <div
        className="cursor__pointer p-1 run__icon__div ml-auto"
        onClick={handleClickRunBtn}
      >
        <AiFillCaretRight size="30" color="#05a805" />
      </div>
    </div>
  );
}
