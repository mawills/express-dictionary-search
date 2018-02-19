## How To Build

1. cd express-dictionary-search/
2. npm install

Start the React front end
1. cd express-dictionary-search/client
2. npm start
    * if you have something running on localhost:3000 check your terminal and hit Y to run the site on localhost:3001

Start the Express server
1. Open a new terminal
2. cd express-dictionary-search/server
3. sudo PORT=3002 npm start
  * if you have something running on localhost:3002, you will need to change the proxy tag in the package.json for React to http://localhost:[YOURPORT]
