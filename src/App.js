import './App.css';
import Header from "./components/Header";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Help from "./pages/Help";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route
                  path="/"
                  element={<Home/>}
              />
              <Route
                  path="/about"
                  element={<About/>}
              />
              <Route
                  path="/help"
                  element={<Help/>}
              />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
