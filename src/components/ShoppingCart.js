import List from "./List"

// move buttons for empty and completed to another grid or even component?

const ShoppingCart = (products) => {

    return (
        <div className="shopping">
            <List products={products} />
        </div>
    )

}

export default ShoppingCart