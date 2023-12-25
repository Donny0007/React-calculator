import React, { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css'

const Calculator = () => {
  const [input, setInput] = useState("");
  const [res, setRes] = useState(0);

  const handleClick = (button) => {
    if (button === "AC") {
      setInput("");
      setRes("");
    } else if (button === "C") {
      setInput(input.toString().slice(0, -1));
    } else if (button === "=") {
      try {
        setInput(eval(input).toString());
        setRes(eval(input).toString());
      } catch (error) {
        alert("Input is wrong!");
      }
    } else if (button === "Sq") {
      try {
        setInput(input*input);
        setRes(input*input);
      } catch (error) {
        alert("Invalid input for power calculation");
      }
    } else {
      setInput(input + button);
    }
  };
  return (
    <div className="container">
      <input
        type="text"
        className="form-control"
        value={input || res}
        onChange={(e) => setInput(e.target.value)} readOnly
      />
      <table>
        <tbody>
          <tr>
            <td>
              <button onClick={() => handleClick("1")}>1</button>
            </td>
            <td>
              <button onClick={() => handleClick("2")}>2</button>
            </td>
            <td>
              <button onClick={() => handleClick("3")}>3</button>
            </td>
            <td>
              <button className="operator" onClick={() => handleClick("+")}>+</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => handleClick("4")}>4</button>
            </td>
            <td>
              <button onClick={() => handleClick("5")}>5</button>
            </td>
            <td>
              <button onClick={() => handleClick("6")}>6</button>
            </td>
            <td>
              <button className="operator" onClick={() => handleClick("-")}>-</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => handleClick("7")}>7</button>
            </td>
            <td>
              <button onClick={() => handleClick("8")}>8</button>
            </td>
            <td>
              <button onClick={() => handleClick("9")}>9</button>
            </td>
            <td>
              <button className="operator" onClick={() => handleClick("*")}>*</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => handleClick("0")}>0</button>
            </td>
            <td>
              <button onClick={() => handleClick("00")}>00</button>
            </td>
            <td>
              <button onClick={() => handleClick(".")}>.</button>
            </td>
            <td>
              <button className="operator" onClick={() => handleClick("/")}>/</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => handleClick("C")}>C</button>
            </td>
            <td>
              <button onClick={() => handleClick("AC")}>AC</button>
            </td>
            <td>
              <button onClick={() => handleClick("Sq")}>Sq</button>
            </td>
            <td>
              <button className="equal" onClick={() => handleClick("=")}>=</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calculator;
