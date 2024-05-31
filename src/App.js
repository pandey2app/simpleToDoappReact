import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import Input from './components/Input';
import List from './components/List';
import Status from './components/Status';

function addToLocalStorage(todos) {
  localStorage.setItem('todos', JSON.stringify(todos))
}
function getFromLocalStorage(todos) {
  return JSON.parse(localStorage.getItem('todos'))
}
function App() {
  let [todos, setTodos] = useState(getFromLocalStorage()?? [])
  console.log(todos);
  let [editData, setEditData] = useState({
    key: -1,
    data: ''
  })
  const addTodo = (todo) => {
    if (todo) {
      if (todos.includes(todo)) {
        toast.error(`Task ${todo} is already added...`)
        return;
      }
      setTodos([...todos, todo]);
      // addToLocalStorage([...todos, todo]);
      toast.success(`Task ${todo} is added successfully...`)
    } else {
      toast.error(`Please Enter any task...`)
    }
  }

  const deleteTodo = (todo) => {
    setTodos(todos.filter(item => item !== todo))
    // addToLocalStorage(todos.filter(item => item !== todo))
    toast.success(`Task ${todo} deleted successfully...`)
  }
  const editTodo = (key, data) => {
    setEditData({
      key,
      data
    });
  }
  const updateTodo = (key, data) => {
    todos.splice(key, 1, data)
    setTodos([...todos])
    toast.success(`Task updated successfully...`)
    setEditData({
      key: -1,
      data: ''
    });
  }
  useEffect(() =>{
    addToLocalStorage(todos)
  },[todos])
  return (
    <div className="w-100 bg-gray-500 h-screen pt-3 ">
      <Input addTodo={addTodo} editData={editData} updateTodo={updateTodo} />
      <Status />
      <List todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} editTodo={editTodo} editData={editData} />
      <Toaster />
    </div>
  );
}

export default App;
