import React from 'react'
import ListItem from './ListItem'

const List = ({products}, addItemToMand) => {
     
    const listArray = products.map(item => { 
        return <ListItem key={item.id} title={item.title} addItemToMand={addItemToMand} /> })

    return (
        <ul>
            {listArray}
        </ul>
    )

}

export default List