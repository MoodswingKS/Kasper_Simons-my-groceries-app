const ListItem = ({item, moveItem}) => {
    return (
        <li className="listItem">
            <div
                key={item.id}
                item={item.item}
                onClick={moveItem}
                value={item.title}>
                {item.title} {item.amount}
            </div>
        </li>
    )
}

export default ListItem