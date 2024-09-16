import { Component } from "react";

class LoginForm extends Component {
    state = { 
        email: '',
        password: '',
        isChecekd: false,
     } 

     handleChange = ({target}) => {
        this.setState({
            [target.name]: target.value,
        })
     }

     handleSubmit = e => {
        e.preventDefault();
        this.props.createUser({
            email: this.state.email,
            password: this.state.password,
        }
    )
    this.setState({
        email: '',
        password: '',
    })
    this.props.closeModal()
     }

     handleCheck = ({target : {checked}}) => {
        this.setState({
            isChecekd: checked
        })
     }
    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input onChange={this.handleChange} name="email" value={this.state.email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input onChange={this.handleChange} name="password" value={this.state.password} type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input onChange={this.handleCheck} checked={this.state.isChecekd} type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button disabled={!this.state.isChecekd} type="submit" className="btn btn-primary">Submit</button>
</form>
        );
    }
}
 
export default LoginForm;