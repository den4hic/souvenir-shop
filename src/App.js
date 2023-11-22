import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Help from "./pages/Help";
import Contacts from "./pages/Contacts";

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
              <Route
                  path="/contacts"
                  element={<Contacts color1='blue' color2='blue' />}
              />
              <Route
                  path="/contacts/map"
                  element={<Contacts color1='facebook' color2='teal' />}
              />
              <Route
                  path="/contacts/social"
                  element={<Contacts color1='teal' color2='facebook' />}
              />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
