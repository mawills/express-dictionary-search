import React from 'react';

const WordList = (props) => {
  if(props.isHistoryView) {
    return null;
  }

  const searchResults = props.words.map( (word,index) => {
    return(
      <li className="list-group-item" key={index} >
        <div>{word.word}</div>
        <div>{word.definition}</div>
      </li>
    );
  });

  const missingWords = props.missingWords.map( (word) => {
    return(
      <span className="red">{word} </span>
    );
  });

  return(
    <div>
      <h3>Here are the results:</h3>
      <p>
        Found <span className="green">{props.words.length}</span> words.
        Unable to find <span className="red">{props.missingWords.length}</span> words: {missingWords}
      </p>
      <ul className="list-group" >
        {searchResults}
      </ul>
    </div>
  );
};

export default WordList;
