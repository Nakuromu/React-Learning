import { Component } from "react";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";

class TodoList extends Component {
    state = {
        name: '',
        todolist: [],
        filter: '',
    };

    

    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { name, todolist } = this.state;
        if (name !== '') {
            this.setState({
                todolist: [
                    ...todolist,
                    {
                        name: name,
                        id: nanoid(),
                        completed: false,
                    },
                ],
                name: '',
            });
        }
    };

    handleCheckCompleted = (id) => {
        this.setState((prevState) => ({
            todolist: prevState.todolist.map((todo) =>
                id === todo.id ? { ...todo, completed: !todo.completed } : todo
            ),
        }));
    };

    handleDeleteItem = (id) => {
        this.setState((prevState) => ({
            todolist: prevState.todolist.filter((todo) => todo.id !== id),
        }));
    };

    render() {
        const { name, filter, todolist } = this.state;

        const filteredTodos = todolist.filter((todo) =>
            todo.name ? todo.name.toLowerCase().includes(filter.toLowerCase().trim()) : false
        );

        return (
            <form onSubmit={this.handleSubmit}>
                <h1>To-Do List</h1>

                <input
                    onChange={this.handleChange}
                    value={name}
                    type="text"
                    name="name"
                    placeholder="Enter your to-do"
                />
                <button type="submit">Add to-do</button>

                <h2>Your To-Do's</h2>

                <input
                    value={filter}
                    onChange={this.handleChange}
                    type="text"
                    name="filter"
                    placeholder="Search to-do"
                />

                <ul style={{ listStyle: "none" }}>
                    {filteredTodos.map((todo) => (
                        <li key={todo.id}>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => this.handleCheckCompleted(todo.id)}
                            />
                                <Link to={todo.id}>{todo.name}</Link>
                            <button onClick={() => this.handleDeleteItem(todo.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </form>
        );
    }
}

export default TodoList;
