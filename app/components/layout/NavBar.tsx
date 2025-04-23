import { useState } from "react";

interface NavBarProps {
  onToggleChange: () => void;
}
export default function NavBar({ onToggleChange }: NavBarProps) {
  const [isStudent, setIsStudent] = useState(true);

  const handleToggle = () => {
    onToggleChange();
    setIsStudent(!isStudent);
  };

  return (
    <div className="grid grid-cols-3 py-4">
      <div className="">
        <img src="app/assets/eira-logo.svg" alt="EIRA Logo" className="h-12" />
      </div>
      <div className="flex justify-center">
        <div className="flex items-center space-x-2">
          {/* Tutor label */}
          <span
            className={`
            text-sm
            ${
              isStudent
                ? "text-gray-500 font-normal"
                : "text-blue-600 font-medium"
            }
          `}
          >
            Tutor
          </span>

          {/* Toggle pill */}
          <div
            onClick={handleToggle}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setIsStudent(!isStudent);
              }
            }}
            role="switch"
            aria-checked={isStudent}
            tabIndex={0}
            className={`
            relative 
            w-10 h-5 
            rounded-full 
            cursor-pointer 
            transition-colors
            ${isStudent ? "bg-blue-600" : "bg-blue-200"}
          `}
          >
            {/* Thumb */}
            <div
              className={`
              absolute 
              top-0.5 
              left-0.5 
              w-4 h-4 
              bg-white 
              rounded-full 
              transition-transform
              ${isStudent ? "translate-x-5" : "translate-x-0"}
            `}
            />
          </div>

          {/* Student label */}
          <span
            className={`
            text-sm
            ${
              isStudent
                ? "text-blue-600 font-medium"
                : "text-gray-500 font-normal"
            }
          `}
          >
            Student
          </span>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() =>
            window.open(
              "https://play.google.com/store/apps/details?id=com.anonymous.eiraapp&pli=1",
              "_blank"
            )
          }
          className="bg-white text-primary-600 text-base px-4 py-2 rounded-full border border-primary-200"
        >
          <span className="text-primary-600 text-base">Download App</span>
        </button>
      </div>
    </div>
  );
}
