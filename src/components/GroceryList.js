import List from "./List"

const GroceryList = ({listItems, moveItem}) => {
return (
    <div className="grocery">
        <List items={listItems} moveItems={moveItem} />
    </div>
    )
}

export default GroceryList