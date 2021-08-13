import {Component} from "react" 
import ShoppingCart from "./ShoppingCart"
import GroceryList from "./GroceryList"
import AddAndEmpty from "./AddAndEmpty"

class Container extends Component {
    constructor() {
        super()
        this.state = {
            boodschappenItems: [
                { id: 1, title: "Red Bull" },
                { id: 2, title: "6 Pack Bier" },
                { id: 3, title: "Pizza" }
            ],
            mandItems: [],
            value: "",
            product: ""
        }
    }

    addItemToMand = (event) => {
        const boodschapArray = this.state.boodschappenItems
        const mandArray = this.state.mandItems

        const itemOverzetten = event.target
        const indexItem = boodschapArray.indexOf(itemOverzetten);
        const newBoodschap = boodschapArray.splice(indexItem, 1);

        const newMand = mandArray.push(indexItem);

        this.setState({ boodschappenItems: newBoodschap, mandItems: newMand })
    }

    handleChange = (event) => {
        event.preventDefault()
        const { name, value } = event.target
        this.setState({ [name] : value })
    }

    addNewItem = (event) => {
        if (this.state.product !== '') {

            const keyArray = this.state.boodschappenItems;
            const titleValue = this.state.product

            // if (keyArray.contains(titleValue)) {

            // }

            const newKey = keyArray.length + 1;
            // need to make sure no double keys?
            const newItem = { title: titleValue, id: newKey }
            keyArray.push(newItem)

            this.setState({ keyArray })
        }
        this.setState({ product: "" })
    }

    enterNewItem = (event) => {
        if (event.keyCode === 13) {
            this.addNewItem()
        }
    }

    emptyClicker = () => {
        this.setState({mandItems: []})
    }

    render() {
        return (
            <div>
                <div className="topButtons">
                    <AddAndEmpty 
                        emptyClicker={this.emptyClicker}
                        addNewItem={this.addNewItem}
                        enterNewItem={this.enterNewItem}
                        handleChange={this.handleChange}


                        name={this.product} />
                </div>
                <div className="container">
                    <GroceryList 
                        products={this.state.boodschappenItems}
                        onClick={this.addItemToMand} 
                        />
                    <ShoppingCart
                        products={this.state.mandItems}
                        />
                </div>
            </div>
        )
    }
}

export default Container