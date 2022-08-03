import './App.css';
import {Routes, Route} from "react-router-dom"
import MainContainer from './components/MainContainer';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainContainer />}></Route>
      </Routes>
    </div>
  );
}

export default App;
