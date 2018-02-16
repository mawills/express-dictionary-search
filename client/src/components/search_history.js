import React, { Component } from 'react';

class SearchHistory extends Component {
  _renderWords(word,index) {
    return(
      <li className="list-group-item" key={index} >{word}</li>
    );
  }

  _clearHistory() {
    this.props.onClearHistory();
  }

  render() {
    if(!this.props.isHistoryView) {
      return null;
    }
    return(
      <div>
        <h3>Your search history: </h3>
        <p>Even if you clear your browser cache (Ctrl+F5), your search history will remain! Using browser localStorage keeps data around between sessions.</p>
        <ul className="list-group" >
          {this.props.searchHistory.map(this._renderWords)}
        </ul>
        <button
          type="button"
          className="btn btn-danger"
          onClick={event => this._clearHistory()} >
          Clear History</button>
      </div>
    );
  }
}

export default SearchHistory;
