import React, { useState } from 'react';

import './global.css';

import Routes from './routes';

function App() {
  return (
    <Routes />
  );
}




// function App() {
//   const [counter, setCounter] = useState(0);

//   // useState retorna um Array [valor, funcaoDeAtualizacao]

//   function increment() {
//     setCounter(counter + 1);
//   }

//   return (
//     <div>
//       <Header>Contador: {counter} </Header>
//       <button onClick={increment}>Incrementar</button>
//     </div>
    
//   );
// }

export default App;
