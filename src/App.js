import './App.css';
import { Todo } from './components/Todo';
import MirageServer from './mirage'

// sir daniyal said this server can also be declared inside index.js
MirageServer()

function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
