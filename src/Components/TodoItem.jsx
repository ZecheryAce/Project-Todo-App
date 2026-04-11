function TodoItem({ todo, toggleTodo, deleteTodo }) {
    return (
        <div className="card">
            <span
                onClick={() => toggleTodo(todo.id)}
                style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                    cursor: "pointer"
                }}
            >
                {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>
                Delete
            </button>
        </div>
    );
}

export default TodoItem;