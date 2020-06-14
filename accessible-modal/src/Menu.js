import React from "react";

const Menu = ({ menuItems, isOpen }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ul>
      {menuItems.map(item => (
        <li>{item}</li>
      ))}
    </ul>
  );
};

export default Menu;
