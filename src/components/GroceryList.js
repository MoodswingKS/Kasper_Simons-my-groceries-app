import List from "./List"

const GroceryList = (props, addItemToMand) => {

return (
    <div className="grocery">
        <List data={props.data}
            addItemToMand={addItemToMand}
         />
    </div>
    )

}

export default GroceryList