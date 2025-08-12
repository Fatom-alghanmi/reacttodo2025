// import logo from './logo.svg';
import React, { useState } from 'react';
import TodoBanner from './TodoBanner';
import TodoRow from './TodoRow';
import './App.css';

function App() {
  const [userName] = useState("Fatom");

  const [todoItems] = useState([
    { action: "Buy Flowers", done: false },
    { action: "Get Shoes", done: false },
    { action: "Collect Tickets", done: true },
    { action: "Call Joe", done: false }
  ]);

  //const changeStateData = () => {
   // setUserName(prevName => (prevName === "Fatom" ? "Fuad" : "Fatom"));
  //};

  return (
    <div className="container mt-3">
      <TodoBanner userName={userName} todoItems={todoItems} />

      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Action</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          {todoItems.map((item, index) => (            
            <TodoRow item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
