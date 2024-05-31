import React, { useEffect, useState } from "react";

export default function Input(props) {
  let [todo, setTodo] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (props.editData.key === -1) {
        props.addTodo(todo);
    }else{
        props.updateTodo(props.editData.key, todo);
    }
    setTodo("");
  };
  const inputChange = (e) => {
    setTodo(e.target.value);
  };

  useEffect(() => {
    setTodo(props.editData.data);
    document.querySelector('input').focus();
  }, [props.editData.data, props.editData.key]);

  return (
    <div className="w-11/12 h-auto mx-auto">
      <form
        onSubmit={submit}
        noValidate
        className="flex justify-between mb-5  flex-wrap"
      >
        <input
          type="text"
          placeholder="Enter To Do..."
          value={todo}
          onChange={inputChange}
          className="md:w-10/12 w-full h-12 focus:border-2 hover:border-violet-700 border-2 m-1 px-3 py-1 focus:outline-none focus:border-green-700  text-3xl font-semibold rounded-md"
        />

        <button className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-3xl m-1 px-4 h-12 text-center font-semibold text-red-700 font-serif  py-1 rounded-md hover:text-white">
          {props.editData.key === -1 ? "Add" : "Update"}
        </button>
      </form>
    </div>
  );
}
