//import Counter from "./Counter/Counter";
// import TodoList from "./TodoList/TodoList";
// import Modal from "./Modal/Modal";
// import Header from "./Header/Header";
// import LoginForm from "./LoginForm/LoginForm";
import Feedback from "./Feedback-App/Feedback";
// import Contacts from "./Contacts/Contacts";
import { Component } from "react";
// import PockemonForm from "./PockemonApi/PockemonForm";
// import { ToastContainer} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import PockemonInfo from "./PockemonApi/PockemonInfo";

class App extends Component{
  // state={
  //   isShow: false
  // }

  // showModal = () => {
  //   this.setState({isShow: true})
  // }

  // closeModal = () => {
  //   this.setState({isShow: false})
  // }

  // createUser = (data) => {
  //  const newUser = {
  //   ...data,
  //   id:nanoid()
  //  }
  //  console.log(newUser)
  // }

  state = {
    pockemonName: ''
  }

  handleFormSubmit = pockemonName => {
    this.setState({pockemonName})
  }

  render(){
    return (
      <div className="App">
        {/* <PockemonForm onSubmit = {this.handleFormSubmit}/>
        <ToastContainer autoClose={3000}/>
        <PockemonInfo pockemonName={this.state.pockemonName}/> */}
        {/* <Header showModal={this.showModal}/>
        <Modal><LoginForm createUser={this.createUser} closeModal={this.closeModal}/></Modal>
        <TodoList/> */}
        <Feedback/>
        {/* <Contacts/> */}
      </div>
    )
  }
}

export default App;
