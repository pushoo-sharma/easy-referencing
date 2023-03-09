import './App.css';
import React, { useEffect, useState } from 'react';
import ChildFunc from './child';

function App() {

  const [nameState, setNameState] = useState("pushpak");

  const changeName = (value) => {
    setNameState(value);
  }

  return (
    <div className="App">
      <ChildFunc props={nameState} changeName={changeName}/>
    </div>
  );
}

export default App;
