import { useState } from "react";
import Todo from "./todo";

export default function TodoApp() {
  const [title, setTitle] = useState("Hola");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title !== "") {//validando campos vacíos
      const newTodo = {
        id: crypto.randomUUID(),
        title: title,
        completed: false
      };
      
      setTodos([...todos, newTodo]);
      setTitle("");
    } else {
      alert("Inserte un registro válido");
    }
  };//guardando el nuevo registro

  const handleUpdate = (id, value) => {
    const temp = [...todos];
    const item = temp.find(item => item.id === id);
    item.title = value;
    setTodos(temp);
  };//actualizando registro

  const handleDelete = (id) => {
    const temp = todos.filter(item => item.id !== id);
    setTodos(temp);
  };//eliminando registro

  return (
    <div className="todoContainer">
      <h1>Lista de tareas</h1>
      <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input onChange={e => setTitle(e.target.value)} className="todoInput" value={title} />
        <input onClick={handleSubmit} type="submit" className="buttonCreate" value="✅Create todo" />
      </form>
      <div className="todosContainer">
        {todos.map(item => (
          <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}