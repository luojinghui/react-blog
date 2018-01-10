/**
 * Created Date: 2017/12/21
 * Author: luojinghui
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter,} from 'react-router-dom';
import JNEntryLoading from '../Common/JNEntryLoading';
import st from "../../image/st.png";

class WrapInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: [],
      firstIn: true
    };

    this._mounted = true;
  }

  async fetch() {
    const SEARCH = 'https://api.github.com/search/repositories';

    let res = await fetch(`${SEARCH}?q=react`);
    let json = await res.json();
    let result = (json && json.items) || [];

    if (this._mounted) {
      this.setState({result, firstIn: false});
    }
  }

  componentDidMount() {
    this.fetch();
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  render() {
    let {firstIn, result} = this.state;

    return (
      <div>
        this is info page
        <h1>Home</h1>
        <div>
          <img src={st} alt=""/>
        </div>
        <div>preact list</div>
        <div>preact list</div>
        <div>preact list</div>
        <div>preact list</div>
        <div>
          {
            firstIn ?
              <JNEntryLoading isLoading={true}/>
              :
              result.map((result, index) => (
                <div style={{
                  padding: 10,
                  margin: 10,
                  background: 'white',
                  boxShadow: '0 1px 5px rgba(0,0,0,0.5)'
                }}
                     key={index}
                >
                  <div>
                    <a href={result.html_url} target="_blank">
                      {result.full_name}
                    </a>
                    🌟<strong>{result.stargazers_count}</strong>
                  </div>
                  <p>{result.description}</p>
                </div>
              ))
          }
        </div>
      </div>
    );
  }
}

let Info = withRouter(connect((state) => state)(WrapInfo));
export default Info;
