import { useState } from "react";

interface ToggleButtonProps {
  isToggleVisible: boolean;
  onToggleChange: () => void;
}

export default function ToggleButton({
  isToggleVisible,
  onToggleChange,
}: ToggleButtonProps) {
  const [isStudent, setIsStudent] = useState(false);

  const handleToggle = () => {
    setIsStudent(!isStudent);
    onToggleChange();
  };

  return (
    <section className="flex md:hidden sm:hidden xs:flex flex-col items-center justify-center pb-20">
      <div className="flex justify-center">
        {isToggleVisible && (
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
        )}
      </div>
    </section>
  );
}
