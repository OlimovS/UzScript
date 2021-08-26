import { useState } from 'react';
import {UnControlled  as CodeMirror, Controlled as ViewCodeMirror} from 'react-codemirror2';
import './App.css';
import uzScriptParser from './uzscript-engine/parser';


// const MODE = "javascript";
const MODE = "javascript-copy";


const defaultValue = `// Salom dunyo dasturi


funksiya salomAyt() {
  qaytar "Salom dunyo";
}`;

function App() {
  const [editorState, setEditorState] = useState(defaultValue)

  const handleChangeEditorState = (editor, data, value) => {
    // console.log({editor, data, value})
    setEditorState(value);
  }
  return (
    <div className="App container-fluid">
      <h1>
        Hello
      </h1>
      <div className='row'>
        <div className='col-6'>
          <h2>UzScript</h2>
          <CodeMirror 
            value={defaultValue}
            options={{
              mode: MODE,
              theme: 'material',
              lineNumbers: true
            }}
            onChange={handleChangeEditorState}
          />
        </div>
        <div className='col-6'>
          <h2>Javascript Version</h2>
          <ViewCodeMirror 
            value={uzScriptParser(editorState)}
            options={{
              mode: 'javascript',
              theme: 'material',
              lineNumbers: true
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
