export default function List(props) {
  return (
    <ul className="m-auto min-md:text-3xl text-2xl md:text-start w-11/12 flex flex-wrap gap-2 overflow-hidden h-auto overflow-y-auto mb-4">
      {props.todos.length > 0 ? (
        props.todos.map((todo, key) => (
          <li
            key={key}
            className="w-full flex justify-evenly flex-nowrap bg-violet-300 font-serif rounded-lg px-2 py-1"
          >
            <div className="w-8/12 md:w-9/12 px-2 overflow-y-auto">{todo}</div>
            <div className=" flex justify-center items-center w-10 me-5">
              <input type="checkbox"
              onChange={props.countDone}
               className="checked:shadow-lg h-6 w-6"/>
            </div>
            <div className="w-4/12 flex justify-evenly items-center flex-wrap md:w-3/12">
              <button
                className="w-11/12 md:w-5/12 bg-yellow-500 hover:bg-yellow-600 text-lg  m-1 px-2 h-8 text-center text-white-700 font-serif  py-1 rounded-md hover:text-zinc-50"
                onClick={() => props.editTodo(key, todo)}
                disabled={props.editData.key === -1 ? false : true}
              >
                {"Edit"}
              </button>
              <button
                className="w-11/12 md:w-5/12 bg-red-500 hover:bg-red-600 text-lg m-1 px-2 h-8 text-center text-white-700 font-serif  py-1 rounded-md hover:text-zinc-50"
                onClick={() => props.deleteTodo(todo)}
                disabled={props.editData.key === -1 ? false : true}
              >
                {"Delete"}
              </button>
            </div>
          </li>
        ))
      ) : (
        <li className="w-full flex justify-between flex-wrap bg-violet-300 font-serif rounded-lg px-2 py-1">
          <div className="w-8/12 md:w-9/12 px-2">{"no todo as of now..."}</div>
        </li>
      )}
    </ul>
  );
}
