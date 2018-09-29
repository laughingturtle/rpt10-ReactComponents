var GroceryListItem = (props) => (
    <ul>
        <li>{props.groceryItems[0]}</li>
        <li>{props.groceryItems[1]}</li>
        <li>{props.groceryItems[2]}</li>
    </ul>
);

var GroceryList = () => (
    <div>
        <h2>My Grocery List</h2>
        <GroceryListItem groceryItems={['Cucumber', 'Fluffy Kale', 'A Singleton Strawberry']}/>
    </div>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));