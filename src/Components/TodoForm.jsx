import { useState } from "react";
import "./TodoForm.css";

function TodoForm({ addTodo }) {
    const [text, setText] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        addTodo(text);
        setText("");
    }
    return (
      <form onSubmit={handleSubmit}>
        <h1 className="head-task">Add Task</h1>
        <textarea
          className="input-info"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Input Task(s)..."
        />
        <button className="add-button" type="submit">
          Add
        </button>
      </form>
    );
}

export default TodoForm;