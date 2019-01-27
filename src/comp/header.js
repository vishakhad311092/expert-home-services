import React,{Component} from 'react';
import {Menu,Search,Icon} from 'semantic-ui-react';
import { withRouter } from "react-router-dom";
class Header extends Component {
    render() {
      return (
        <Menu className="header-bg" stackable>
          <Menu.Item className="whiteFont boldFont" onClick = {()=>{
            this.props.history.push("/");
          }} >
          <Icon name='home' size='large'  />
           Expert Home Services
          </Menu.Item>
        </Menu>
      );
    }
  }
  export default withRouter(Header);