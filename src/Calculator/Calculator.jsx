import React from 'react'
import { useState } from 'react'
import './Calculator.css'

const Calculator = props => {
    
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    const ops = ['/', '*', '+', '-', '.'];

    const updateCalc = value => {
        if(
            ((ops.includes(value)) && (calc === '')) ||
            ((ops.includes(value)) && (ops.includes(calc.slice(-1))))
        ){return;}

        setCalc(calc + value);

        if(!ops.includes(value)){
            setResult(eval(calc + value).toString());
        }
    }

    function createDigits(){
        const digits = [];

        for(let i = 1; i<=9; i++){
            digits.push(
                <button onClick={() => {updateCalc(i.toString())}} key={i}>{i}</button>
            )
        }

        return digits;
    }

    const calculate = () => {
        setCalc(eval(calc).toString());
    }

    const deleteLast = () => {
        if(calc === ''){
            return;
        }

        const value = calc.slice(0, -1);

        setCalc(value);
    }

    // link do vídeo: https://www.youtube.com/watch?v=oiX-6Y2oGjI

    // minuto do vídeo: 23:05
    
    return(
        <div className="Calculator">
            <div className="display">
                {result ? <span>({ result }) </span> : ''}
                &nbsp;
                { calc || "0"}
            </div>

            <div className="operators">
                <button onClick={() => {updateCalc('+')}}>+</button>
                <button onClick={() => {updateCalc('-')}}>-</button>
                <button onClick={() => {updateCalc('/')}}>/</button>
                <button onClick={() => {updateCalc('*')}}>*</button>

                <button onClick={deleteLast}>CLEAR</button>
            </div>

            <div className="digits">
                {/* <button>0</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button> */}

                { createDigits() }

            <button onClick={() => {updateCalc('0')}}>0</button>
            <button onClick={() => {updateCalc('.')}}>.</button>
            
            <button onClick={calculate}>=</button>
                
            </div>
        </div>
    )
}

export default Calculator;