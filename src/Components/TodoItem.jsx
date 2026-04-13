import "./TodoItem.css";

function TodoItem({ todo, toggleTodo, deleteTodo }) {
    return (
        <div className="card-list">
            <span 
                onClick={() => toggleTodo(todo.id)}
                className={todo.completed ? "completed" : ""}
            >
                {todo.text}
            </span>
            <button className="btn-delete" onClick={() => deleteTodo(todo.id)}>
                Delete
            </button>
        </div>
    );
}

export default TodoItem;