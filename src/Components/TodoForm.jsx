import { useState } from "react";

function TodoForm({ addTodo }) {
    const [text, setText] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        addTodo(text);
        setText("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Input Information"
            />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default TodoForm;