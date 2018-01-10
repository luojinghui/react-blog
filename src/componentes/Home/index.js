/**
 * Created Date: 2017/12/21
 * Author: luojinghui
 */
import React, {Component} from 'react';
import {connect } from 'react-redux';
import {withRouter,} from 'react-router-dom';

import {login} from "../../actions";

class WrapHome extends Component {
  componentDidMount() {
    // console.log(this.props);
  }

  render() {
    return (
      <div>
        this is home page
        <div>this is home page</div>
        <div>this is home page</div>
        <div>this is home page</div>
        <div onClick={() => {
          this.props.dispatch(login("11111111"));
        }}>
          click
        </div>
      </div>
    );
  }
}

let Home = withRouter(connect((state) => state)(WrapHome));
export default Home;
