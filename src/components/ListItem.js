const ListItem = (props) => {
    return (
        <li>
            <div
                onClick={() => props.addItemToMand()}
                className="listItem"
                key={props.id}>
                    
                {props.title}
            </div>
        </li>
    )
}

export default ListItem