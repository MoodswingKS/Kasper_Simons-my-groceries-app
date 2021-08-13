const ListItem = (products, addItemToMand) => {
    return (
        <li>
            <div
                onClick={addItemToMand}
                className="listItem"
                key={products.id}>
                    
                {products.title}
            </div>
        </li>
    )
}

export default ListItem