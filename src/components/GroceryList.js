import List from "./List"

const GroceryList = (products, addItemToMand) => {

return (
    <div className="grocery">
        <List products={products}
            addItemToMand={addItemToMand}
         />
    </div>
    )

}

export default GroceryList