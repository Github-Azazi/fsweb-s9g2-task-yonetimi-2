import React from "react";
import { formatDistanceToNow, differenceInDays } from "date-fns";

const Task = ({ taskObj, onComplete }) => {
  const diff = differenceInDays(new Date(taskObj.deadline), new Date());
  const mathAbs = Math.abs(diff);
  const bgColor = diff < 3 ? "bg-red-100" : "bg-blue-100"
  
  return (
    <div className="task">
      <h3 className="font-bold text-purple-950 text-xl hover:text-purple-700">
        {taskObj.title}
        </h3>
      <div className="deadline">
        <span className={bgColor}>
          Son teslim: 
          {mathAbs} gün
          {diff > 0 ? " sonra" : " önce"}
        </span>
      </div>
      <p>{taskObj.description}</p>
      <div className="flex justify-between">
        <div className="flex flex-row">
          {taskObj.people.map((p) => (
            <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full mx-2" key={p}>
              <div className="flex flex-col">
                <div>
                <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                </div>
                <div>
                  {p}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="justify-items-end">
          {onComplete && (
            <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Task;
