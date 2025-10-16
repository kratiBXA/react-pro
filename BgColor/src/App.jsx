import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");

  return (
    <>
      <div
        className="h-screen w-full duration-200"
        style={{ backgroundColor: color }}
      ></div>
      <div className="fixed flex flex-wrap justify-center px-4 inset-x-0 bottom-14 gap-4 ">
        <div className="fixed flex flex-wrap justify-center gap-4 rounded-md bg-white/80 backdrop-blur-md p-4 bottom-12">
          <button
            className="bg-blue-500 text-white rounded-md p-2"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="bg-green-500 text-white rounded-md p-2"
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="bg-red-500 text-white rounded-md p-2"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="bg-black text-white rounded-md p-2"
            onClick={() => setColor("black")}
          >
            Black
          </button>
          <button
            className="bg-yellow-500 text-white rounded-md p-2"
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button
            className="bg-grey-800 text-white rounded-md p-2"
            onClick={() => setColor("grey")}
          >
            Grey
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
