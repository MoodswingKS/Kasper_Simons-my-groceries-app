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
                { id: 2, title: "Bier" },
                { id: 3, title: "Pizza" }
            ],
            mandItems: [],
            count: 100
        }
    }

    idCounter = () => {
        const newCount = this.state.count+1
        this.setState({ count: newCount })
    }
    
    addNewItemToMandje = item => {
        this.idCounter()
        const newId = this.state.count
        const newItem = {id: newId, title: item, amount: 1}
        this.setState(prevState => {
            const newMandje = prevState.mandItems.concat(newItem)
            return { mandItems: newMandje }
        })
    }

    addAmount = selectItem => {
        const mandArray = this.state.mandItems
        const newMandArray = mandArray.map(duplicateItem => {
            if (selectItem === duplicateItem.title) {
                duplicateItem.amount++
            }
            return duplicateItem
        })
        this.setState({ mandItems: newMandArray })
    }

    render() {
        const emptyClicker = () => {
            this.setState({mandItems: []})
        }
    
        const addNewItem = item => {
            this.idCounter()
            const newId = this.state.count
            const newItem = { id: newId, title: item }            
            this.setState({ boodschappenItems: this.state.boodschappenItems.concat(newItem) })
        }

        const moveItem = event => {
            const selectItem = event.target.getAttribute("value")
            const currentMandje = this.state.mandItems
            const checkDuplicateItem = currentMandje.filter(
                mandItem => mandItem.title === selectItem
                )    
            if (checkDuplicateItem.length === 0) {
                this.addNewItemToMandje(selectItem)
            } else {
                this.addAmount(selectItem)
            }
        }

        return (
            <div>
                <div className="topButtons">
                    <AddAndEmpty 
                        emptyClicker={emptyClicker}
                        addNewItem={addNewItem}
                    />
                </div>
                <div className="container">
                    <GroceryList 
                        listItems={this.state.boodschappenItems}
                        moveItem={moveItem}
                        />
                    <ShoppingCart
                        listItems={this.state.mandItems}
                        />
                </div>
            </div>
        )
    }
}

export default Container