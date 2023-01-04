import { useState } from "react";

export default function TodoApp() {
    const [title, setTitle] = useState("Hola");
    const [todos, setTodos] = useState([]);
    const handleChange = (event) => {
        const value = event.target.value;
        setTitle(value);
    }//guardando valor cada vez que se escribe en el input
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        };
        setTodos([...todos, newTodo]);
    }//guardando el nuevo registro

    return (
        <div className="todoContainer">
            <form className="todoCreateForm" onSubmit={handleSubmit}>
                <input onChange={handleChange} className="todoInput" value={title} />
                <input onClick={handleSubmit} type="submit" className="buttonCreate" value="Create todo" />
            </form>
            <div className="todosContainer">
                {
                    todos.map(item => (
                        <div key={item.id}>{item.title}</div>
                    ))//mostrando cada elemento del arreglo
                }
            </div>
        </div>
    );
}