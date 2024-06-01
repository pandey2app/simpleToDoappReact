

export default function Status(props) {
  return (
    <div
      className="border-2 w-11/12 text-white rounded-xl flex-wrap m-auto h-auto mb-5 flex justify-evenly shadow-[0_0px_30px_-15px_rgba(255,255,255,1)] text-center text-2xl font-serif font-bold px-1 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
    >
      <div
        id="total-tasks"
        className=" md:w-6/12 w-full max-sm:border-b-4 md:border-r-4 border-green-600"
      >
        <h3>Total tasks : {props.total}</h3>
      </div>
      <div
        id="completed-tasks"
        className=" md:w-6/12 w-full "
      >
        <h3>Done tasks : {props.Dtotal}</h3>
      </div>
    </div>
  );
}
