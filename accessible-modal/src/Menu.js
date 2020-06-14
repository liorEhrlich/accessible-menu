import React from "react";

const Menu = ({menuItems, isOpen}) => (
  <ul>
    {menuItems.map(item =>
    <li>
      {item}
    </li>
    )}
  </ul>
)

export default Menu