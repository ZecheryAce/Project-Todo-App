import { useState } from "react";
import TodoItem from "../Components/TodoItem";
import TodoForm from "../Components/TodoForm";

function Todos() {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("all");

    function addTodo(text) {
        setTodos([
            ...todos,
            {id: Date.now(), text, completed: false}
        ]);
    }

    function toggleTodo(id) {
        setTodos(
            todos.map(todo =>
                todo.id === id
                ? {...todo, completed: !todo.completed}
                : todo
            )
        );
    }

    function deleteTodos(id) {
        setTodos(
            todos.filter(todo => todo.id !== id)
        );
    }

    const filteredTodos = todos.filter(todo => {
        if (filter === "completed") return todo.completed;
        if (filter === "incomplete") return !todo.completed;
        return true;
    })

    return (
        <div className="container">
            <div className="w-50">
                <TodoForm addTodo={addTodo}/>
            </div>
            <div className="w-50">
                <h2>Todo List</h2>
                <div>
                    <button onClick={() => setFilter("all")}>All</button>
                    <button onClick={() => setFilter("completed")}>Completed</button>
                    <button onClick={() => setFilter("incomplete")}>Incomplete</button>
                </div>

                {filteredTodos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />
                ))}
            </div>
        </div>
    );
}

export default Todos;