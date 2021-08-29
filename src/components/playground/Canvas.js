import { useEffect, useRef } from "react";
import { CANVAS_ID } from "../../utils/constants";
import useScriptTag from "./useScriptTag";

const Canvas = ({ uzScriptCode, rerenderIndex, ...rest }) => {
  const runCode = useScriptTag();
  const canvasRef = useRef(null);

  useEffect(() => {
    runCode({ value: `${uzScriptCode}`, rerenderIndex });
  }, [rerenderIndex]);

  return <canvas id={CANVAS_ID} ref={canvasRef} {...rest} />;
};

export default Canvas;
