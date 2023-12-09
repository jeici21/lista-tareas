import { useState } from "react";

export default function Todo({ item, onUpdate, onDelete }) {
  const [isEdit, setIsEdit] = useState(false)

  const FormEdit = () => {
    const [newValue, setNewValue] = useState(item.title);

    const handleClickUpdateTodo = () => {
      onUpdate(item.id, newValue);
      setIsEdit(false);
    }

    return (
      <form className="todoUpdateForm" onSubmit={e => e.preventDefault()}>
        <input type="text" className="todoInput" onChange={e => setNewValue(e.target.value)} value={newValue} />
        <button className="button" onClick={handleClickUpdateTodo}>🆗Update</button>
      </form>
    )
  }
  const TodoElement = () => {
    return (
      <div className="todoInfo">
        <span className="todoTitle">{item.title}</span>
        <button className="buttonUpdate" onClick={() => setIsEdit(true)}>📝Edit</button>
        <button className="buttonDelete" onClick={e => onDelete(item.id)}>❎Delete</button>
      </div>
    )
  }

  return (
    <div className="todo">{isEdit ? <FormEdit /> : <TodoElement />}</div>
  );
};//obteniendo cada elemento del arreglo