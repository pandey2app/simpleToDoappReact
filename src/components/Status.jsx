
import mybg from "../images/bg.jpg";

export default function Status(props) {  
  return (
    <div
      style={{
        backgroundImage: `url(${mybg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
      className="border-2 w-11/12 rounded-xl flex-wrap m-auto h-auto mb-5 flex justify-evenly text-center text-2xl font-serif px-1 py-2"
    >
      <div
        id="total-tasks"
        className=" md:w-6/12 w-full max-sm:border-b-4 md:border-r-4  border-red-600"
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
