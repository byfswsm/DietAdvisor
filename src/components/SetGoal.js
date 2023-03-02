import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import nutrient from "../data/nutrients.json";

const SearchBar = ({ goals, setGoals }) => {
    const [goal, setGoal] = useState(Object.keys(goals)[0]); 
    const [value, setValue] = useState(0);

    return (
        <div>
            <div class = "container">
                <div class = "row">
                    <Form.Select onChange ={(e)=> setGoal(e.target.value)} style={{width:"50%"}}>
                        {Object.keys(nutrient).map((item) => (<option key={item} value={item}>{item}</option>))}
                    </Form.Select>
                    <Form.Control type="search" placeholder="Enter goal (number)" onChange={(e) => setValue(e.target.value)} style={{width:"50%"}} />
                </div>
                
            </div>
            <Button variant="primary" onClick={() => {setGoals({...goals, [goal]: value})}}>Add</Button>
        </div>
    )

};


export default SearchBar;