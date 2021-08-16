import TextField from "./TextField"

const AddAndEmpty = ({addNewItem, emptyClicker}) => {
    return(
        <div className="topBar">
            <div className="addBtn">
                <TextField onSubmit={addNewItem} />
            </div>
            <button onClick={emptyClicker} className="emptyBtn">
                Mandje leegmaken
            </button>
        </div>
    )
}

export default AddAndEmpty
