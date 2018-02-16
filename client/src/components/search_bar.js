import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  _onInputChange(term) {
    this.setState({term});
  }

  _onSubmit(term) {
    this.props.onSearchTermChange(term);
    this.setState({ term: '' });
  }

  render() {
    if(this.props.isHistoryView) {
      return null;
    }
    return(
      <div>
        <h3>Enter words separated by commas, then press submit to look up definitions</h3>
        <p>View me on mobile. I am responsive!</p>
        <div>
          <textarea
            value={this.state.term}
            rows='8'
            cols='40'
            onChange={event => this._onInputChange(event.target.value)}>
          </textarea>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={event => this._onSubmit(this.state.term)} >
            Submit</button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
