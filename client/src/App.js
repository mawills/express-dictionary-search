import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './components/search_bar';
import TabList from './components/tab_list';
import WordList from './components/word_list';
import SearchHistory from './components/search_history';
import searchHistoryStorage from './getSearchHistory';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      words: [],
      missingWords: [],
      searchHistory: searchHistoryStorage,
      isHistoryView: false
     };
   }

 _toggleHistoryView(toggle) {
    this.setState({ isHistoryView: toggle });
  }

  _onClearHistory() {
    this.setState({
      words: [],
      missingWords: [],
      searchHistory: []
     });
    localStorage.clear();
  }

  _parseSearchTerm(term) {
    this.setState({
      words: [],
      missingWords: []
    });
    let parse = term.replace(/\s/g, '').split(',');
    let searchHistoryWordsArray = this.state.searchHistory;

    for(let word of parse) {
      if(word.length > 0) {
        searchHistoryWordsArray.push(word);
        this._lookupWord(word);
      }
    }
    localStorage.setItem('search-history', JSON.stringify(searchHistoryWordsArray));
  }

  _lookupWord(word) {
      fetch('http://localhost:3002/', {word: 'fox'})
        .then(res => res.json())
        .then(res => {
          if(res) {
            let newWordsArray = this.state.words;
            newWordsArray.push({
              word: word,
              definition: res.lexicalEntries[0].entries[0].senses[0].definitions
            });
            this.setState({ words: newWordsArray });
          }
          else {
            this.setState({ missingWords: this.state.missingWords.concat(word) });
          }
        })
        .catch(res => console.log(res));
  }

  render() {
    return(
      <div className="App">
        <TabList
          toggleHistoryView={toggle => this._toggleHistoryView(toggle)} />
        <SearchBar
          onSearchTermChange={term => this._parseSearchTerm(term)}
          isHistoryView={this.state.isHistoryView} />
        <WordList
          words={this.state.words}
          missingWords={this.state.missingWords}
          isHistoryView={this.state.isHistoryView} />
        <SearchHistory
          onClearHistory={event => this._onClearHistory()}
          searchHistory={this.state.searchHistory}
          isHistoryView={this.state.isHistoryView} />
      </div>
    );
  }
}

export default App;
