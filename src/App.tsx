import { useEffect } from 'react';
import './App.scss';
import AppRouting from "./App-routing";

function App() {

  // functional component constructor;
  useEffect(():void => {

    // remove console log, warn, error in production mode;
    if (process.env.REACT_APP_STAGE === 'PROD') {
      console.log = function(arg:any) {};
      console.warn = function(arg:any) {};
      console.error = function(arg:any) {};
    }
  }, []);
  
  return (
    <div className="App">
      <AppRouting />
    </div>
  );
  
}

export default App;
