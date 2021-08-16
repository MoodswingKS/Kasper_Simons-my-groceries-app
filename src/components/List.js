import ListItem from './ListItem'

const List = ({items, moveItems}) => { 
    const listArray = items.map(item =>  
        <ListItem key={item.id} item={item} moveItem={moveItems} /> )
    return (
        <ul>
            {listArray}
        </ul>
    )
}

export default List