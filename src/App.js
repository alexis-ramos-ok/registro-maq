import './App.css';
import ColumnaSecond from './ColumnaSecond/ColumnaSecond';
import ColumnaFirst from './components/ColumnaFirst/ColumnaFirst';

function App() {
  return (
    <div className="App">
      <div className="content-columns">
        <ColumnaFirst />
        <ColumnaSecond />
      </div>
    </div>
  );
}

export default App;