import './App.css';
import MainPage from "./Components/MainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Noodle from "./Components/Noodle-based-food";
import Bread from "./Components/Bread-based-food";
import Rice from "./Components/Rice-based-food";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route index element={<MainPage/>} />
              <Route path="/main" element={<MainPage/>} />
              <Route path="/rice" element={<Rice/>} />
              <Route path="/noodle" element={<Noodle/>} />
              <Route path="/bread" element={<Bread/>} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
