const Todo = ({todo, handleCheckCompleted, handleDeleteItem}) => {
    return (
        <li>
            <input type="checkbox" checked={todo.completed}
             onChange={() => handleCheckCompleted(todo.id)}/>
            {todo.title}
            <button onClick= {() => handleDeleteItem(todo.id)}>Delete</button>
        </li>
    )
}

export default Todo