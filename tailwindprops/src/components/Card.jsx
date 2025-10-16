import React from "react";

function Card({userName , buttonText="Follow"}) {
  return (
    <div className="flex flex-col items-center gap-6 p-7 md:flex-row rounded-2xl">
      <div>
        <img className="size-48 shadow-xl rounded-md" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAnZO-HbYIOIzEYS_uNiCS2YtyAn53nJeWbw&s" />
      </div>
      <div className="flex items-center">
        <span className="text-2xl font-medium">{userName}</span>
        {/* <span className="font-medium text-sky-500">The Anti-Patterns</span> */}
        <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
          <span>No. 4</span>
          <span>·</span>
          <span>2025</span>
        </span>
      </div><br/>
      <button className="px-4 py-2 text-black bg-white rounded">{buttonText}</button>
    </div>
  );
}

export default Card;
