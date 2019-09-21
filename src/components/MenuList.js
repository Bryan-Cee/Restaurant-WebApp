import React, {useState} from 'react';
import Choices from "./Choices";

const MenuList = ({menuItem}) => {
  const [choices, setChoices] = useState(false);
  const [related, setRelated] = useState(false);
  const handleToggle = () => setChoices(!choices);
  const handleToggleRelated = () => setRelated(!related);

  return (
    <li>
      <input type="checkbox" onChange={handleToggle} value={menuItem.name}/>
      <span>{menuItem.name}</span>
      {choices &&
      <Choices
        choices={menuItem.choices}
        handleRelatedItems={handleToggleRelated}
        relatedItems={menuItem.related}
      />
      }
    </li>
  )
};

export default MenuList;
