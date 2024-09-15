//import Counter from "./Counter/Counter";
import TodoList from "./TodoList/TodoList";
import Modal from "./Modal/Modal";
import Header from "./Header/Header";
import { Component } from "react";

class App extends Component{
  state={
    isShow: false
  }

  showModal = () => {
    this.setState({isShow: true})
  }

  closeModal = () => {
    this.setState({isShow: false})
  }

  render(){
    return (
      <div className="App">
        <Header showModal={this.showModal}/>
        <Modal>Some</Modal>
        <TodoList/>
      </div>
    )
  }
}

export default App;
