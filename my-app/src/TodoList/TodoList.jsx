import { Component } from "react";
import Todo from "./Todo";
import todo from '../data.json'

class TodoList extends Component{
    state = {
        todolist: todo,
    }

    handleCheckCompleted = (id) => {
        this.setState((prevState) => ({todolist: prevState.todolist.map((todo) => 
            id === todo.id ? {...todo, completed: !todo.completed} : todo
        )}))
    }

    handleDeleteItem = (id) => {
        this.setState((prev) => ({todolist: prev.todolist.filter((todo) => todo.id != id)}))
    }

    render(){
        return(
        <>
            <h1>My To-Do list</h1>
            <ul>
            {this.state.todolist.map((todo) => (
            <Todo key={todo.id} todo={todo} handleCheckCompleted={this.handleCheckCompleted} handleDeleteItem={this.handleDeleteItem}/>
        ))}
            </ul>
            </>
        )
    }
}

export default TodoList