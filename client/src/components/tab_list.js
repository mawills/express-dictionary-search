/* eslint-disable */
import React, { Component } from 'react';
import githubLogo from '../images/github-logo.png';

class TabList extends Component {
  render() {
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/mawills/express-dictionary-search">
              <img alt="GitHub" className="github-logo" src={githubLogo} />
            </a>
          </ul>
            <ul className="nav navbar-nav">
              <li><a href="#" onClick={event => this.props.toggleHistoryView(false)}>Search</a></li>
              <li><a href="#" onClick={event => this.props.toggleHistoryView(true)}>View History</a></li>
            </ul>
        </div>
      </nav>
    );
  }
}

export default TabList;
