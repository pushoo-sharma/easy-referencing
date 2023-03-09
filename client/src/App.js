// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const [users, setUsers] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json()
      })
      .then((json) => setUsers(json));
  }, []);

  const mappedFunc = () => {
    let mappedArray = users.map((usr) => usr.id * 2);
    console.log(mappedArray);
  };

  const filterFunc = () => {
    let filteredArray = users.filter((usr) => usr.name == "Patricia Lebsack");
    console.log(filteredArray);
  }

  return (
    <div className="App">
      <h1>
        Users
      </h1>
      <div>
        {
          users?.map(
            (ur) =>
            (
              <>
                <p>{ur.name}</p>
                <p>{ur.userName}</p>
              </>

            )
          )
        }
      </div>
      <div>
        <button onClick={mappedFunc}>Click for map Fuction</button>
        <button onClick={filterFunc}>Click for filter Fuction</button>
      </div>
    </div>
  );
}

export default App;
