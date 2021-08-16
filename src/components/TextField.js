import {Component} from "react"

class TextField extends Component {
    constructor() {
        super()
        this.state = { textInput: "" }
    }

    render() {
    const textValue = event => {
        this.setState({ textInput: event.target.value })
    }

    const onSubmit = e => {
        e.preventDefault()
        if (this.state.textField !== "") {
            this.props.onSubmit(this.state.textInput)
            this.setState({ textInput: "" })
        }    
    }

        return (
            <form onSubmit={onSubmit}>
                <input
                    placeholder="Wat wil je toevoegen?"
                    type="text"
                    onChange={textValue}
                    value={this.state.textInput}
                ></input>
                <button type="submit">+</button>
            </form> 
        )
    }
}

export default TextField