import React from 'react';
import { useArray } from './useArray';

const App = () => {


  const todos = useArray(["hi there", "sup", "world"]);

  return (
    <div className="App">
      <h3>Todos</h3>
      <button onClick={() => todos.add(Math.random())}>ADD</button>
      <ul>
        {
          todos.value.map((todo, i) => (
            <li key={i}>
              {todo}
              <button onClick={() => todos.removeIndex(i)}>DELETE</button>
            </li>
          ))
        }
      </ul>
      <button onClick={todos.clear}>CLEAR TODOS</button>
    </div>
  )
}

export default App;