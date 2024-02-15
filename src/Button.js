import './App.css';
import { useState } from 'react';
function Button(props){
    const {inputnumbers}=props;
    const {number1,number2}=inputnumbers;
    const [result,setResult]=useState(" ")
    function performAdd(){
        const num1=Number(number1);
        const num2=Number(number2);
        setResult(num1+num2);
        
    }
    function performSub(){
        const num1=Number(number1);
        const num2=Number(number2);
        setResult(num1-num2);
        

    }
    function performMul(){
        const num1=Number(number1);
        const num2=Number(number2);
        setResult(num1*num2);
        
    }
    function performDiv(){
        const num1=Number(number1);
        const num2=Number(number2);
        setResult(num1/num2);
        
    }
    
    return (
        <>
        <div className='buttoncontainer'>
        <button className='inputsubmit'onClick={performAdd}>ADD</button>
        <button className='inputsubmit'onClick={performSub}>SUB</button>
        <button className='inputsubmit'onClick={performMul}>MUL</button>
        <button className='inputsubmit'onClick={performDiv}>DIV</button>
       </div>


        <h3>The Answer is :{result}</h3>
        
        </>
       
    )
}
export default Button;