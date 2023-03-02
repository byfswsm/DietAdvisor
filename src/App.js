import { useState } from 'react';
import './App.css';
import NutritionInfo from './components/NutritionInfo';
import SearchBar from './components/SearchBar';
import ItemList from './components/ItemList';
import SetGoal from './components/SetGoal';
import nutrients from './data/menu';
import Slider from './components/Slider'
import 'bootstrap/dist/css/bootstrap.min.css';
import Autocomplete from "./AutoComplete";
import { autoCompleteData } from "./data.js";
import BottomMenu from './components/BottomMenu.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginLogout from './components/LoginLogout';



function App() {
  const [macros, setMacros] = useState({
      "Calories": 0,
      "Protein (g)": 0,
      "Total Carbohydrates (g)": 0,
      "Sugar (g)": 0,
      "Total Fat (g)": 0,


  });

  const [goals, setGoals] = useState({
    "Calories": 0,
    "Protein (g)": 0,
    "Total Carbohydrates (g)": 0,
    "Sugar (g)": 0,
    "Total Fat (g)": 0,
});
  const [foodItems, setFoodItems] = useState({});
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <div>
              <SearchBar macros={macros} foodItems={foodItems} setFoodItems={setFoodItems} setMacros={setMacros} />
              <SetGoal goals={goals} setGoals={setGoals}/>
              <NutritionInfo nutrients={macros} goal={goals} />
              <ItemList macros={macros} foodItems={foodItems} setFoodItems={setFoodItems} setMacros={setMacros}/>
            </div>} />
            <Route path="/authenticate" element={<LoginLogout goals={goals} />} />
        </Routes>
        <BottomMenu />
      </BrowserRouter>
    </div>
  );
}

export default App;

