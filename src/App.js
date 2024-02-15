import { useState } from 'react';
import './App.css';
import Button from './Button.js';

function App() {
  const [inputs,setInput]=useState({});

  console.log('Current state:',inputs)


  function handleChange(e){
    const name=e.target.name;
    const value=e.target.value;
    setInput((previoustate)=>{return{...previoustate,[name]:value}})
  }
  return (
    <div className="container">
      <label htmlFor='input'>Enter your first number:</label><br/>
       <input type="text" id="input" name="number1" className='inputtext' onChange={handleChange} /><br/>
       <label htmlFor='input'>Enter your Second number:</label><br/>
       <input type="text" id="input" name="number2" className='inputtext' onChange={handleChange}/><br/>
       <Button inputnumbers={inputs}/>
       
     
</div>
    
            
  );
}

export default App;
