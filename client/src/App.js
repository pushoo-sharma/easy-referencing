import './App.css';
import React, { useEffect, useState } from 'react';
// import ChildFunc from './child';

function App() {

  const age = 22;

  return (
    <div className="App">
      {
        age && age > 18 ? (<><div>check</div> {console.log("checking ")}</>) : (<div></div>)
      }
    </div>
  );
}

export default App;
