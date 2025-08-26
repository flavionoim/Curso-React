import { useState } from "react";
import "./TodoApp.css";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
      };

      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setInputValue("");
    }
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app-container">
      <h1 className="title">Lista de Tarefas</h1>

      {/* Form para Criar Tarefas */}
      <form onSubmit={handleSubmit} className="form-container">
        <input
          className="input-field"
          type="text"
          placeholder="Adicione Uma Tarefa"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="add-button">
          Adicionar
        </button>
      </form>

      {/* Lista de Tarefas */}
      {todos.length === 0 ? (
        <p className="empty">Não Há Tarefas</p>
      ) : (
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              {todo.text}
              <button
                className="delete-button"
                onClick={() => handleDelete(todo.id)}
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoApp;
