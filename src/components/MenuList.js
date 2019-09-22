import React, { useState } from 'react';
import Choices from "./Choices";

const MenuList = ({menuItem}) => {
  const [choices, setChoices] = useState(false);
  const handleToggle = () => setChoices(!choices);

  return (
    <li>
      <input type="checkbox" onChange={handleToggle} value={menuItem.name}/>
      <span>{menuItem.name}</span>
      {choices &&
      <Choices
        choices={menuItem.choices}
        relatedItems={menuItem.related}
      />
      }
    </li>
  )
};

export default MenuList;
