import React, {useState} from 'react'
// imported components
import List from './components/List.js'
import Form from './components/Form.js'

function App() {

  return (
    <div className="App">
      <header>
        <h1>Vova Todo List</h1>
      </header>
      <List />
    </div>
  );
}

export default App;
