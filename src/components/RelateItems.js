import React from 'react';
import MenuList from "./MenuList";

const RelatedItems = ({ items }) => {
  return !!items && items.length > 0 && (
    <>
      <li className="spacing">You may also like:</li>
      {items.map(item => <MenuList key={item.name} menuItem={item} />)}
    </>
  );
};

export default RelatedItems;
