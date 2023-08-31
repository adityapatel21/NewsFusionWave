import React, { useState } from "react";
import "./Dropdown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

export default function Dropdown({ options, value, setValue }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {value}
        <FontAwesomeIcon icon={isActive ? faCaretUp : faCaretDown} />
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setValue(option);
                setIsActive(false);
              }}
              className="dropdown-item"
              key={option}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
