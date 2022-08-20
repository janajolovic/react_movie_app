import './App.css';
import {Routes, Route} from "react-router-dom"
import MainContainer from './components/MainContainer';
import { MovieProvider } from "./MovieContext";
import Details from './components/Details';
import Login from './components/Login';

function App() {
  return (
    <div className="app">
      <MovieProvider>
        <Routes>
          <Route path="/" element={<MainContainer />}></Route>
          <Route path="/movie/:movieId" element={<Details />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </MovieProvider>
    </div>
  );
}

export default App;
