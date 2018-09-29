class GroceryListItem extends React.Component  {

    constructor(props)  {
        super(props);
    }

    render() {
        return(
            <li>{this.props.groceryItem}</li>
        );
    }
}

var GroceryList = (props) => {
    console.log(props);
    return (<ul>
        {props.groceryItems.map(groceryItem =>
            <GroceryListItem groceryItem={groceryItem} />
        )}
    </ul>
    )
}
var list = ['Cucumber', 'Fluffy Kale', 'A Singleton Strawberry'];
ReactDOM.render(<GroceryList groceryItems={list} /> , document.getElementById("app"));