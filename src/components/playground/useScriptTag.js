import { useEffect, useState } from "react";
import { CANVAS_ID } from "../../utils/constants";

const makeScriptCode = (code) => `
// Removing prev connections
document.getElementById('playgroundRunID').outerHTML = document.getElementById('playgroundRunID').outerHTML; 
paper.clear();
paper.remove();

// Setting up project
var canvas = document.getElementById('${CANVAS_ID}');
paper.setup(canvas);


// Actual code
${code}


`;

export default function useScriptTag() {
  const [code, setCode] = useState({ value: "", rerenderIndex: 0 });

  useEffect(() => {
    console.log("re-render");
    const script = document.createElement("script");
    const body = document.getElementsByTagName("body")[0];

    script.innerHTML = makeScriptCode(code.value);

    body.appendChild(script);

    return () => {
      body.removeChild(script);
    };
  }, [code]);

  const runcode = (val) => {
    setCode(val);
  };

  return runcode;
}
