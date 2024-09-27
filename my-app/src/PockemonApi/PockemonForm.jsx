import { Component } from "react";
import { toast } from "react-toastify";

class PockemonForm extends Component {
    state = { 
        pockemonName: '',
     }
     
     handleChange =(event) => {
        this.setState({pockemonName: event.target.value.toLowerCase()})
     }

     handleSubmit = (e) => {
        e.preventDefault()
        if(this.state.pockemonName.trim() === ''){
            toast.error('Enter pockemon name')
            return
        }

        this.props.onSubmit(this.state.pockemonName)
        this.setState({pockemonName: ''})
     }
     
    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type="text" name="pockemonName" value={this.state.pockemonName}/>
                <button type="submit">search</button>
            </form>
        );
    }
}
 
export default PockemonForm;