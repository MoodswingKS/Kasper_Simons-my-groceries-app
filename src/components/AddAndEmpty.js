const AddAndEmpty = (props) => {
    return(
        <div className="topBar">
            <div className="addBtn">
                <textarea 
                    placeholder="Wat heb ik nodig?"
                    name="product"
                    value={props.text}
                    onChange={props.handleChange}
                    onKeyDown={props.enterNewItem}
                ></textarea>
                <button onClick={props.addNewItem}>
                    +
                </button>
            </div>
            <button onClick={props.emptyClicker} className="emptyBtn">
                Mandje leegmaken
            </button>
        </div>
    )
}

export default AddAndEmpty
