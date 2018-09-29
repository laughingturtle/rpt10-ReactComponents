var GroceryList = () => (
    <div>
        <h2>My Grocery List</h2>
        <Cucumbers />
        <Kale />
    </div>
);

var Cucumbers = () => (
    <li>Cucumbers</li>
);

var Kale = () => (
    <li>Kale</li>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));