import "./Todo.css";
import { useState } from "react";
export default function Todo() {
    let [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    function updateTodos(){
          if (input.trim() === "") return;
    setTodos([...todos, input]);
    setInput("");
    }
    function handleChange(event){
        setInput(event.target.value);
    }
    function deleteTodo(index){
        const newTodos = todos.filter((todo, i) => i !== index);
        setTodos(newTodos);
    }
    return(
        <div className="todo">
            <h2> My todo list!</h2>
            <input  value={input} onChange={handleChange} placholder="Add a new todo"></input>
            <button onClick={updateTodos}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li className="todo-item" key={index}>{todo} <button onClick={() => deleteTodo(index)}> Done! </button></li>
                ))}
            </ul>
        </div>
    )
}
