import React from 'react'
import ListItem from './ListItem'

const List = (props) => {
     
    const listArray = props.data.map(item => { 
        return <ListItem key={item.id} title={item.title} /> })

    return (
        <ul>
            {listArray}
        </ul>
    )

}

export default List