const getSearchHistory = () => {
  let searchHistory = [];
  if(localStorage.getItem('search-history')) {
    searchHistory = JSON.parse(localStorage.getItem('search-history'));
  }
  else {
    localStorage.setItem('search-history', JSON.stringify(searchHistory));
  }
  return searchHistory;
}

let searchHistory = getSearchHistory();
export default searchHistory;
