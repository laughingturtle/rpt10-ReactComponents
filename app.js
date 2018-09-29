class GroceryListItem extends React.Component  {

    constructor(props)  {
        super(props);

        this.state = {
            done: false
          };
    }

    onListItemClick() {
        this.setState({
          done: !this.state.done
        });
      }
    onListItemHover() {
        this.setState({
          fun: !this.state.fun
        });
      }

    render() {
        var style = {
            textDecoration: this.state.done ? 'line-through' : 'none',
            fontWeight: this.state.fun ? 'bold' : 'normal'
        };
        return(
         //   <li>{this.props.groceryItem}</li>
            <li style={style} onClick={this.onListItemClick.bind(this)} onMouseOver={this.onListItemHover.bind(this)} onMouseOut={this.onListItemHover.bind(this)}>{this.props.groceryItem}</li>
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