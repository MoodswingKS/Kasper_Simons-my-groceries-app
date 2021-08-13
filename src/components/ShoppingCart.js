import List from "./List"

// move buttons for empty and completed to another grid or even component?

const ShoppingCart = (props) => {

    return (
        <div className="shopping">
            <List data={props.data} />
        </div>
    )

}

export default ShoppingCart