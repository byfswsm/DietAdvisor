import { ListGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import foods from "../data/data_lunch.json";

const addFoodPortions = (macros,food,foodItems,setFoodItems,setMacros) => {
    const newFoodItems = {...foodItems};
    newFoodItems[food] = foodItems[food] ? foodItems[food] + 1 : 0;

    setFoodItems(newFoodItems);
    const newMacros = {}
    Object.entries(macros).forEach(
        ([macro,amount]) => {
            newMacros[macro] = amount+ foods[food][macro];
        }
    );
    setMacros(newMacros);
    console.log(newFoodItems);
}

const subtractFoodPortions = (macros,food,foodItems,setFoodItems,setMacros) => {
    const newFoodItems = {...foodItems};
    newFoodItems[food] = foodItems[food] - 1 ;
    if(newFoodItems[food]===0){
        delete newFoodItems[food];
    }
    const newMacros = {}
    Object.entries(macros).forEach(
        ([macro,amount]) => {
            newMacros[macro] = amount- foods[food][macro];
        }
    );
    setFoodItems(newFoodItems);
    setMacros(newMacros);
    console.log(newFoodItems);
}

const ItemList = ({macros,foodItems,setFoodItems,setMacros}) => {
    return(
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Food Eaten Today</Accordion.Header>
                <Accordion.Body>
                    <ListGroup>
                        {
                            Object.entries(foodItems).map(
                                ([food, quantity]) => (
                                    <ListGroup.Item  key={food}>
                                        {food} : {quantity}
                                        <br/>
                                        <Button variant="primary" onClick={()=> {addFoodPortions(macros,food,foodItems,setFoodItems,setMacros)}}>+</Button>
                                        <Button variant="primary" onClick={()=> {subtractFoodPortions(macros,food,foodItems,setFoodItems,setMacros)}}>-</Button>
                                    </ListGroup.Item>
                                    
                                )
                            )
                        }
                    </ListGroup>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
};

export default ItemList;