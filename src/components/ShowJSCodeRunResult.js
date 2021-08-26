import { useRef, useState } from "react";

function ekrangaYozishFunksiyasi(text) {

    const screen = document.getElementById('js-run-result');
    const ptag = document.createElement('p');
    ptag.textContent = text;
  
    screen.append(ptag);
  }
  
export default function ShowJSCodeRunResult({jsCode}) {
    const resultScreenRef = useRef(null);
    const [jsRunResult, setJSRunResult] = useState('');
    const [jsRunError, setJSRunError] = useState(null);


    const runBtnhandler = () => {
        resultScreenRef.current.textContent = '';
        try{
          const codeResult = eval(jsCode);
          setJSRunResult(codeResult);
    
        } catch(err) {
          console.log('setJSRunError ', err.message, err.lineNumber);
        }
    
      };
    
    return (
        <div>
        <div>
          <button onClick={runBtnhandler}>Run Code</button>
        </div>
        <div id='js-run-result' ref={resultScreenRef}>
        </div>
      </div>
    )
}