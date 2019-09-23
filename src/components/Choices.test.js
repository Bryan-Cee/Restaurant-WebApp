import React from 'react';
import Choices from "./Choices";
import {mount} from "enzyme";

describe('Choices Component', function () {
  let wrapper;
  let props = {
    choices: [
      {name: 'Minestrone'},
      {name: 'Hot and Sour'},
      {name: 'Miso'},
    ],
    relatedItems: [
      {
        name: 'Bread',
        choices: [
          {name: 'Breadsticks'},
        ]
      }
    ],
  };

  beforeEach(() => {
    wrapper = mount(<Choices {...props}/>);
  });

  it('should render an ul tag as the first child', function () {
    expect(wrapper.children().first().is('ul')).toBeTruthy();
  });

  it('should have the same number of items in the choices list as the choices array', function () {
    wrapper = mount(<Choices {...props}/>);
    expect(wrapper.find('li').length).toEqual(props.choices.length);
  });

  it('should render Related when a menu option is selected', function () {
    const checkbox = wrapper.find("input[type='checkbox']").first();

    expect(wrapper.find('RelatedItems').length).toEqual(0);
    checkbox.simulate('change', { target: { checked: true }});
    expect(wrapper.find('RelatedItems').length).toEqual(1);
  });
});
