import {UnControlled  as CodeMirror} from 'react-codemirror2';
import './App.css';


function App() {
  // const [editorState, setEditorState] = useState('console.log("Hello World");')
  return (
    <div className="App">
      <h1>
        Hello
      </h1>
      <CodeMirror 
         value={`//Hello


function sayHello() {
  return "Hello world";
}`}
         options={{
          mode: 'javascript',
          theme: 'material',
          lineNumbers: true
        }}
        onChange={(editor, data, value) => {
          console.log({editor, data, value})
        }}
      
      />
    </div>
  );
}

export default App;
