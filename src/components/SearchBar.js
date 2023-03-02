import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import nutrients from '../data/menu.jsx';
import foods from "../data/data_lunch.json";


const updateMacros = (item, portions, macros) => {
    const newMacros = {};
    Object.assign(newMacros, macros);

    if(isNaN(portions))
        return newMacros;

    Object.entries(macros).forEach( 
        ([macro, amount]) => {
            newMacros[macro] = amount + portions * item[macro];
        }
    );

    return newMacros;
};

const updateFoodItems = (item, portions, foodItems, setFoodItems) => {
    const newFoodItems = {...foodItems};
    newFoodItems[item] = foodItems[item] ? foodItems[item] + parseInt(portions) : parseInt(portions);

    setFoodItems(newFoodItems);

    console.log(newFoodItems);
}

const SearchBar = ({ macros, foodItems, setMacros, setFoodItems }) => {
    const [food,setFood] = useState(Object.keys(foods)[0]); 
    const [portions, setPortions] = useState(0);

    return (
        <div>
            <div class = "container">
                <div class = "row">
                    <Form.Select onChange ={(e)=> setFood(e.target.value)} style={{width:"50%"}}>
                        {Object.keys(foods).map((item) => (<option key={item} value={item}>{item}</option>))}
                    </Form.Select>
                    <Form.Control type="search" placeholder="Enter portions (number)" onChange={(e) => setPortions(e.target.value)} style={{width:"50%"}} />
                </div>
                
            </div>
            <Button variant="primary" onClick={() => {setMacros(updateMacros(foods[food], portions, macros)); updateFoodItems(food, portions, foodItems, setFoodItems);}}>Add</Button>
        </div>
    )

};

export default SearchBar;

