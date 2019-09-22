import React, {Component} from 'react';
import {connect} from 'react-redux';
import MenuList from "../components/MenuList";

class Menu extends Component {
  render() {
    return (
      <>
        <h3>Restaurant Menu</h3>
        <ul>
          {this.props.menu.map(menuItem => (
            <MenuList key={menuItem.name} menuItem={menuItem}/>
          ))}
        </ul>
      </>
    )
  }
}

const mapStateToProps = (state) => ({menu: state.menu});

export default connect(mapStateToProps)(Menu);
