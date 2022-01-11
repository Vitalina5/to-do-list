import './App.css';
import notebook from './notebook.jpg';
import pens from './pens.jpg';
import { List } from './List';

function App() {
  return (
    <div className='app'>
      <div className='container'>
      <img src={pens} width="250px" height="200px" alt="pens" />
      </div>
      <div className='container'>
      <h1>To-do-list</h1>
      </div>
      <List />
      <div className='container'>
      <img src={notebook} width="240px" height="250px" alt="notebook" />
      </div>
    </div>
   
  );
}

export default App;
