import { useState, useEffect } from "react";

function App() {
  const [todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const addToList = () => {
    if (newTodo !== "") {
      setTodo([...todo, newTodo]);
      setNewTodo('');
    }
  };

  const deleteTodo = (ind) => {
    const updatedTodo = todo.filter((elm, id) => ind !== id);
    setTodo(updatedTodo);
  };

  const editTodo = (todo, ind) => {
    setIsEditing(true);
    setCurrentTodo({ text: todo, index: ind });
    setNewTodo(todo);
  };

  const updateTodo = () => {
    const updatedTodos = todo.map((item, index) => 
      index === currentTodo.index ? newTodo : item
    );
    setTodo(updatedTodos);
    setIsEditing(false);
    setNewTodo('');
    setCurrentTodo({});
  };

  return (
    <>
      <div className="container">
        <div className="main">
          <h1>To Do List</h1>
          <div className="add-section">
            <input 
              type="text" 
              value={newTodo} 
              onChange={(e) => setNewTodo(e.target.value)} 
              placeholder="Enter Your Task" 
            />
            {isEditing ? (
              <button id="update" onClick={updateTodo}>Update</button>
            ) : (
              <button id="addlist" onClick={addToList}>Add</button>
            )}
          </div>
          <ul className="show-data">
            {todo.map((todo, ind) => (
              <li key={ind}>
                {todo}
                <div>
                  <button className="edit" onClick={() => editTodo(todo, ind)}>Edit</button>
                  <button className="del" onClick={() => deleteTodo(ind)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
