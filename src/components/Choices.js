import React, {useState} from 'react';
import RelatedItems from "./RelateItems";

const Choices = ({choices, relatedItems}) => {
  const [related, setRelated] = useState(false);
  const handleChange = (e) => setRelated(e.target.checked);

  // Check whether the choice props is
  // true then render the choice list
  return !!choices && (
    <ul>
      {choices.map(choice => (
        <li key={choice.name}>
          <input type="checkbox"
                 id={choice.name}
                 name="menuItem"
                 onChange={handleChange}/>
          <span>{choice.name}</span>
        </li>
      ))}
      {/*
        Check whether the choices are visible then assert
        that the related state has been checked before
        rendering the related items list.
       */}
      {related && choices && !!relatedItems &&
      <RelatedItems showRelated={related} items={relatedItems}/>
      }
    </ul>
  )
};

export default Choices;
