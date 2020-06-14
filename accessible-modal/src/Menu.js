import React, { useState } from "react";

const Menu = ({ header, menuItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div role="menubar" aria-haspopup="true" aria-expanded={isMenuOpen}>
      <button onClick={() => setIsMenuOpen(open => !open)}>{header}</button>

      {isMenuOpen && (
        <ul>
          {menuItems.map(item => (
            <li role="menuitem" tabIndex='0'>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Menu;
