
//import React, {useState} from 'react';

// function App() {
//   const [count, setCount] = useState(0);
//   return <div className='container my-5'>
//     <div className='card text-center my-5'>
//       <div className='card-body'>
//         <h1>Counter App</h1>
//         <div className='my-5'>
//           <h2 className='my-5'>{count}</h2>
//           <button className='btn btn-success mx-3' onClick={()=> setCount(count+1)} disabled = {count >= 10}>+</button>
//           <button className='btn btn-danger mx-3' onClick={()=> setCount(count-1)} disabled ={count===0} >-</button>
//           <button className='btn btn-secondary mx-3' onClick={()=> setCount(0)} disabled={count===0}>Reset</button>
//         </div>
//       </div>
//     </div>

//   </div>
// }
// export default App;


import React from 'react';
export default class App extends React.Component{
  constructor()
  {
    super();
    this.state ={count: 0};
  }
  render()
  {
    const Increment =()=>
    {
      this.setState({count: this.state.count + 1})
    }

    const Decrement=()=>
    {
      this.setState({count : this.state.count -1})
    }
    return(
      <div className='App'>
        <h1>Counter</h1>
        <button onClick={Increment}>Increment</button>
        <span>{this.state.count}</span>
        <button onClick={Decrement}>Decrement</button>
      </div>
      
      
    )
  }
}