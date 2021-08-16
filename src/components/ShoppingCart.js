import List from "./List"

const ShoppingCart = ({listItems}) => {
    return (
        <div className="shopping">
            <List items={listItems} />
        </div>
    )
}

export default ShoppingCart