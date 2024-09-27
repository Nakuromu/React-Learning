import { Component } from "react";

class SearchBar extends Component {
    state = { 
        searcQuery: ''
     }

     handleChange = event => {
        this.setState({searcQuery : event.target.value.toLowerCase()})
     }
     
     handleSubmit = (e)=>{
        e.preventDefault()
        if(this.state.searcQuery.trim() === ''){
            alert('Enter name')
        }

        this.props.onSubmit(this.state.searcQuery)

        this.setState({searcQuery: ''})
     }
    render() { 
        return (
            <header className="searchbar">
                <form className="form" onSubmit={this.handleSubmit}>
                    <button type="submit" className="button">
                        <span className="button-label">Search</span>
                    </button>

                    <input
                    className="input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    name="searchQuery"
                    value={this.state.searcQuery}
                    onChange={this.handleChange}
                    />
                </form>
            </header>
        );
    }
}
 
export default SearchBar;