import './App.css';
import {Routes, Route} from "react-router-dom"
import MainContainer from './components/MainContainer';
import { MovieProvider } from "./MovieContext";
import Details from './components/Details';

function App() {
  return (
    <div className="app">
      <MovieProvider>
        <Routes>
          <Route path="/" element={<MainContainer />}></Route>
          <Route path="/movie/:movieId" element={<Details />}></Route>
        </Routes>
      </MovieProvider>
    </div>
  );
}

export default App;
