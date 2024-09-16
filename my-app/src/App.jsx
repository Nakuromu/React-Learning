//import Counter from "./Counter/Counter";
// import TodoList from "./TodoList/TodoList";
// import Modal from "./Modal/Modal";
// import Header from "./Header/Header";
// import LoginForm from "./LoginForm/LoginForm";
// import Feedback from "./Feedback-App/Feedback";
import { Component } from "react";
import Contacts from "./Contacts/Contacts";

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

  render(){
    return (
      <div className="App">
        {/* <Header showModal={this.showModal}/>
        <Modal><LoginForm createUser={this.createUser} closeModal={this.closeModal}/></Modal>
        <TodoList/> */}
        {/* <Feedback/> */}
        <Contacts/>
      </div>
    )
  }
}

export default App;
