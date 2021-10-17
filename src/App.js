//the react functional component with jsx code (js html code, an extension of js). 
  //Often used to make react code simpler to use
  import * as React from 'react';
  //import ReactDOM from 'react-dom';
  //import Button from '@mui/material/Button';
  import './App';
import PrimarySearchAppBar from './components/appbar';
// after from may be wrong call
  
  //function App() {
    const App = () => {
    return (
      <div className="App">
        <PrimarySearchAppBar/>
      </div>
    );
  }
  export default App;
  //ReactDOM.render(<App />, document.querySelector('#app'));
  