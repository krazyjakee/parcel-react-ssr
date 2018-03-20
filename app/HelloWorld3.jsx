import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import 'isomorphic-fetch';

export default class Nyan extends Component {

  constructor(props) {
    super(props)
    this.state = { url: null, title: null }
  }

  componentWillMount() {

    fetch('http://xkcd-imgs.herokuapp.com/')
      .then((response) => {
        return response.json();
      }).then((res) => {
        this.setState(res);
      }).catch((err) => {
        console.log(`There was an error retrieving the data: ${err}`);
      });
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Async Data</title>
        </Helmet>
        <h1 className="hello-world">Hello world 3!</h1>
        <p style={{ textAlign: 'center' }}>
            This is a component rendered using asynchronously retrieved data
          <br />
          <Link to="/">Click here</Link> to see an ordinary component.
          <br />
          <Link to="/codeSplit">Click here</Link> to see a code-split component.
          <br />
          <br />
          <strong>{this.state.title}</strong>
          <br />
          <img src={this.state.url} alt="" />
        </p>
      </div>
    );
  }
}
