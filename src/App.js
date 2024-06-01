import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import Input from './components/Input';
import List from './components/List';
import Status from './components/Status';
import Header from './components/Header';

function addToLocalStorage(todos) {
  localStorage.setItem('todos', JSON.stringify(todos))
}
function getFromLocalStorage(todos) {
  return JSON.parse(localStorage.getItem('todos'))
}
function App() {
  let [todos, setTodos] = useState(getFromLocalStorage() ?? [])
  let [editData, setEditData] = useState({
    key: -1,
    data: ''
  })
  const [DTotal, setDTotal] = useState(0);
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
    if (data) {
      todos.splice(key, 1, data)
      setTodos([...todos])
      toast.success(`Task updated successfully...`)
      setEditData({
        key: -1,
        data: ''
      });
    }else{
      todos.splice(key, 1)
      setTodos([...todos])
      setEditData({
        key: -1,
        data: ''
      });
      toast.success(`Task deleted successfully...`)
    }
  }

  const countDone = (e) => {
    todos.forEach(() => {
      if (e.target.checked) {
        setDTotal(DTotal + 1)
      } else {
        setDTotal(DTotal - 1)
      }
    })


  };

  useEffect(() => {
    addToLocalStorage(todos)
  }, [todos])
  return (
    <div className="w-100 bg-gray-500 h-screen overflow-y-auto ">
      <Header />
      <Input addTodo={addTodo} editData={editData} updateTodo={updateTodo} />
      <Status total={todos.length} Dtotal={DTotal} />
      <List todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} editTodo={editTodo} editData={editData} countDone={countDone} />
      <Toaster />
    </div>
  );
}

export default App;
