//the react functional component with jsx code (js html code, an extension of js). 
  //Often used to make react code simpler to use
import React from 'react';
  //import ReactDOM from 'react-dom';
  //import Button from '@mui/material/Button';
import './App.css';
import SearchBar from './Components/SearchBar';
// after from may be wrong call
  
  function App() {
    return(
      <div className="App">
        <SearchBar/>
      </div>
    );
  }
  export default App;
  //ReactDOM.render(<App />, document.querySelector('#app'));
  