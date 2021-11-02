import React, {useState, useEffect} from 'react'

function Calc() {
    const [number, setNumber] = useState('')
    const [calc, setCalc] = useState('')
    const [op, setOp] = useState('')
    const [log, setLog] = useState([])

    const ops = ['+', '-', '*', '/']

    const handleBtn = (e) => {
        // prevent operators in row
        if (ops.includes(calc.slice(-1))
            && (ops.includes(e.target.name)
            || e.target.name === '.')) {
            return;
        }
        // else if digit
        else if (!ops.includes(e.target.name)) {
            // new number
            if (ops.includes(calc.slice(-1))) {
                setNumber(e.target.name)
            } else {
                setNumber(number + e.target.name)
            }
            setCalc(calc + e.target.name)
            setOp(op + e.target.name)
        // else operator
        } else {
            log.push(op)
            setLog(log)
            setNumber(eval(op).toString())
            setOp(eval(op).toString() + e.target.name)
            setCalc(calc + e.target.name)
        }
    }

    const calculate = () => {
        if (!calc || ops.includes(calc.slice(-1))) {
            return;
        }
        log.push(op)
        log.push('=' + eval(op).toString())
        setLog(log)
        setNumber(eval(op).toString())
        setCalc(eval(calc).toString())
    }

    const clearAll = () => {
        setNumber('')
        setCalc('')
        setOp('')
        setLog([])
    }

    return (
        <div className="app">
            <h2>Hi, I'm Calculator!</h2>
            <div className="wrapper">
                <div className="calculator">
                    <input type="text" value={number} className="output" readOnly={true}/>
                    <div className="keypad">
                        <button className="btn" name="0" onClick={handleBtn}>0</button>
                        <button className="btn" name="." onClick={handleBtn}>.</button>
                        <button className="btn highlight" id="clear" onClick={clearAll}>AC</button>

                        <button className="btn" name="7" onClick={handleBtn}>7</button>
                        <button className="btn" name="8" onClick={handleBtn}>8</button>
                        <button className="btn" name="9" onClick={handleBtn}>9</button>
                        <button className="btn highlight" name="+" onClick={handleBtn}>+</button>
                        
                        
                        <button className="btn" name="4" onClick={handleBtn}>4</button>
                        <button className="btn" name="5" onClick={handleBtn}>5</button>
                        <button className="btn" name="6" onClick={handleBtn}>6</button>
                        <button className="btn highlight" name="-" onClick={handleBtn}>&ndash;</button>
                        
                        
                        <button className="btn" name="1" onClick={handleBtn}>1</button>
                        <button className="btn" name="2" onClick={handleBtn}>2</button>
                        <button className="btn" name="3" onClick={handleBtn}>3</button>
                        <button className="btn highlight" name="*" onClick={handleBtn}>&times;</button>
                        
                        <button className="btn highlight" id="calculate" onClick={calculate}>=</button>
                        <button className="btn highlight" name="/" onClick={handleBtn}>&divide;</button>
                    </div>
                </div>
                <div className="log">{log 
                                        ? log.reverse().map((log) => <div>{log}</div>) 
                                        : ''}
                </div>
            </div>
        </div>
    )
}

export default Calc;