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
        <input
          className="input-info"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Input Information"
        />
        <button className="add-button" type="submit">
          Add
        </button>
      </form>
    );
}

export default TodoForm;