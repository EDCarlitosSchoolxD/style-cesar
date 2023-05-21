import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import "./ListBox.css";
import { Link } from "react-router-dom";
export const ListBox = ({ children, className, name = "listBox" }) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleList() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="listbox">
      <button onClick={toggleList} className={`${className} listbox-button`}>
        {name}

        <AiOutlineDown />
      </button>

      {isOpen ? (
        <div className="listbox-open">
          <ul>{children}</ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
