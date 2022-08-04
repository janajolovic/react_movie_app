import './App.css';
import {Routes, Route} from "react-router-dom"
import MainContainer from './components/MainContainer';
import { MovieProvider } from "./MovieContext";

function App() {
  return (
    <div className="app">
      <MovieProvider>
        <Routes>
          <Route path="/" element={<MainContainer />}></Route>
        </Routes>
      </MovieProvider>
    </div>
  );
}

export default App;
