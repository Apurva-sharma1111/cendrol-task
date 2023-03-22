
import './App.css';
import Question1 from './components/Question1';
import Question2 from './components/Question2';
import Question3 from './components/Question3';

function App() {
  return (
    <div className="App">
      <div className='q1'>
        <Question1 />
      </div>
    <hr/>
      <div className='q2'>
        <Question2 />
      </div>
    <hr/>
    <div className='q3'>
        <Question3 />
      </div>
    </div>
  );
}

export default App;
