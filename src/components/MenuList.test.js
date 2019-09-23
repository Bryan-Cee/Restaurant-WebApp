import React from 'react';
import {mount} from "enzyme";
import MenuList from "./MenuList";

describe('Choices Component', function () {
  let wrapper;
  let props = {
    menuItem :  {
      name: 'Salad',
      choices: [
        {name: 'Santa Fe'},
        {name: 'Greek'},
        {name: 'Asian'},
      ],
      related: [
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
    }
  };

  beforeEach(() => {
    wrapper = mount(<MenuList {...props}/>);
  });

  // afterEach(() => {
  //   jest.clearAllMocks();
  // });

  it('should render', function () {
    expect(wrapper.children().length).toEqual(1);
    expect(wrapper.first().text()).toEqual(props.menuItem.name);
    expect(wrapper.childAt(0).type()).toEqual( 'li');
  });

  it('should render Choices when a menu option is selected', function () {
    const checkbox = wrapper.find("input[type='checkbox']");

    expect(wrapper.find('Choices').length).toEqual(0);
    checkbox.simulate('change', { target: { checked: true }});
    expect(wrapper.find('Choices').length).toEqual(1);
  });
});
