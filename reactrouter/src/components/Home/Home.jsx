import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="flex flex-col lg:flex-row items-center gap-10 sm:mx-16 mx-2 py-16">
        <div className="flex-1 text-center lg:text-left space-y-8 px-4">
          <h2 className="text-3xl font-bold sm:text-5xl">
            Download Now
            <span className="block text-xl sm:text-4xl mt-2">Lorem Ipsum</span>
          </h2>

          <Link
            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
            to="/"
          >
            <svg
              fill="white"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
            </svg>
            &nbsp; Download now
          </Link>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            className="w-72 sm:w-96 object-contain"
            src="https://png.pngtree.com/png-clipart/20230913/original/pngtree-gaming-clipart-cartoon-boy-playing-video-games-on-computer-vector-png-image_11062134.png"
            alt="image1"
          />
        </div>
      </aside>

      <div className="grid place-items-center sm:mt-20">
        <img
          className="sm:w-96 w-48"
          src="https://tse1.mm.bing.net/th/id/OIP.iS8ljakM3fnC3EciHQNQbQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="image2"
        />
      </div>

      <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
        Lorem Ipsum Yojo
      </h1>
    </div>
  );
}
