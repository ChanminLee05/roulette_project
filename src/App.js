import './App.css';
import MainPage from "./Components/MainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Noodle from "./Components/Noodle-based-food";
import Bread from "./Components/Bread-based-food";
import Meat from "./Components/Meat-based-food";
import Vegan from "./Components/Vegan-based-food";
import RecipePage from "./Components/RecipePage";

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route index element={<MainPage/>} />
              <Route path="/main" element={<MainPage/>} />
              <Route path="/meat" element={<Meat/>} />
              <Route path="/vegan" element={<Vegan/>} />
              <Route path="/bread" element={<Bread/>} />
              <Route path="/noodle" element={<Noodle/>} />
              <Route path="/recipe/:idMeal" element={<RecipePage />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
