//the react functional component with jsx code (js html code, an extension of js). 
  //Often used to make react code simpler to use
import React from 'react';
  //import ReactDOM from 'react-dom';
  //import Button from '@mui/material/Button';
import './App.css';
import ArticleComponent from './Components/ArticleComponent';

// after from may be wrong call
        //text is not showing from placeholder
  function App() {
    return( 
      <div>
    <header className="container">

      <ArticleComponent/>
      </header>
      </div>
      
    );
  }
  export default App;
  //ReactDOM.render(<App />, document.querySelector('#app'));
  