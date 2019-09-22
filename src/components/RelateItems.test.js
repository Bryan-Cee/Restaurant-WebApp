import React from 'react';
import {mount} from "enzyme";
import RelatedItems from "./RelateItems";

describe('RelatedItems Component', function () {
  let wrapper;
  let props = {
    items: [
      {
        name: 'Dressing',
        choices: [
          {name: 'Italian'},
          {name: 'Blue Cheese'},
          {name: 'Ranch'},
        ]
      },
      {
        name: 'Bread',
        choices: [
          {name: 'Italian'},
          {name: 'Flat'},
          {name: 'Sourdough'},
        ]
      },
    ],
  };

  it('should have a message "You may also like" before the related list', function () {
    wrapper = mount(<RelatedItems {...props}/>);
    expect(wrapper.children().first().text()).toContain('You may also like');
  });

  it('should render MenuList component equal to the number of choices given in the props', function () {
    wrapper = mount(<RelatedItems {...props}/>);
    expect(wrapper.find('MenuList').length).toEqual(props.items.length);
  });

  it('should render choices when a related item is clicked', function () {
    wrapper = mount(<RelatedItems {...props}/>);

    let relatedItem = wrapper.find('MenuList').first();
    expect(relatedItem.find('Choices').length).toEqual(0);

    const item = relatedItem.find("input[type='checkbox']");
    item.simulate("change", { target: { checked: true }});

    relatedItem = wrapper.find('MenuList').first().find('Choices');
    expect(relatedItem.length).toEqual(1);
  });

  it('should not render any child when props are empty', function () {
    wrapper = mount(<RelatedItems />);
    expect(wrapper.children()).toMatchObject({});
    expect(Object.keys(wrapper.children()).length).toEqual(0);
  });
});
