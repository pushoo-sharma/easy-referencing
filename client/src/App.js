import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const [inputs, setInputs] = useState({});

  const getInputs = (data) => {
    const {name, value} = data.target;
    let newInputs = {[name]: value};
    setInputs({...inputs,...newInputs});
  }

  return (
    <div className="App">
      <div>
        <input placeholder="name" name="name" onChange={getInputs}/>
        <input placeholder="surname" name="surname" onChange={getInputs}/>
      </div>
    </div>
  );
}

export default App;
