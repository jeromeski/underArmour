import React, { Component } from 'react';
import { Responsive, Menu, Segment } from 'semantic-ui-react';
import ReactFlagsSelect from 'react-flags-select';
import './navbarDesktop.styles.css';
import 'react-flags-select/css/react-flags-select.css';


class NavbarDesktop extends Component {

  render() {
    return (
      <Responsive
        minWidth={Responsive.onlyTablet.minWidth}
      >
      <Segment secondary>
        <Menu
        inverted
        fixed='top'
        >
        <Menu.Item 
          content='END OF SEASON SALE UP TO 40% OFF'
        />
        <Menu.Item position='right'>
          <ReactFlagsSelect 
            defaultCountry="PH" 
            countries={["US", "PH"]}
            customLabels={{"US": "US", "PH" : "PH"}}
          />
        </Menu.Item>
        <Menu.Item>
          Stores
        </Menu.Item>
        <Menu.Item>
          Log In
        </Menu.Item>
      </Menu>
      </Segment>
      </Responsive>
    );
  }
}

export default NavbarDesktop;