import React from "react";
import "./Header.css";

function Header({ onScroll }) {
  return (
    <div className="header-sect">
      <h2 className="header-title">ynoir space</h2>
      <ul className="list-header">
        <li>project.</li>
        <li>about.</li>
        <li>contact.</li>
      </ul>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <div>
        <button onClick={onScroll}>
          <img src="arrow-down.svg" alt="arrow-down" className="arrow-nav" />
        </button>
      </div>
    </div>
  );
}

export default Header;
