import React, { useState, useEffect } from "react";
import "./App.css";
import { CodeBlock, dracula } from "react-code-blocks";

function App() {
  const [array, setArray] = useState([]);
  const [sorted, setsorted] = useState(false);
  let [lno, setlno] = useState("1-6");

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    const newArray = [];
    for (let i = 0; i < 25; i++) {
      newArray.push(randomint(5, 500));
    }
    setArray(newArray);
  };

  const createArray = () => {
    const newArray = [];
    let n = prompt("enter size of array (MAX:25)");
    if (n > 25) {
      n = 25;
    }
    for (let i = 0; i < n; i++) {
      let a = prompt("enter element (MAX:500)");
      if (a > 500) {
        a = 500;
      }
      newArray.push(a);
    }
    setArray(newArray);
  };

  const bubbleSort = async () => {
    setsorted(true);
    const n = array.length;
    let newarray = [...array];
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        const bars = document.getElementsByClassName("array-bar");
        bars[j].style.backgroundColor = "#007bff";
        bars[j + 1].style.backgroundColor = "#007bff";
        setlno("2");
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, 50)
        );
        if (newarray[j] > newarray[j + 1]) {
          bars[j].style.backgroundColor = "red";
          bars[j + 1].style.backgroundColor = "red";
          setlno("3");
          await new Promise((resolve) =>
            setTimeout(() => {
              resolve();
            }, 50)
          );
          setlno("4");
          const temp = newarray[j];
          newarray[j] = newarray[j + 1];
          newarray[j + 1] = temp;
          await new Promise((resolve) =>
            setTimeout(() => {
              resolve();
            }, 50)
          );

          setArray([...newarray]);
        }
        bars[j].style.backgroundColor = "pink";
        bars[j + 1].style.backgroundColor = "pink";
      }
    }
    setlno("1-6");
  };

  const SelectionSort = async () => {
    let newarray = [...array];
    const n = array.length;
    for (let i = 0; i < n; i++) {
      const bars = document.getElementsByClassName("array-bar");
      bars[i].style.backgroundColor = "blue";
      for (let j = i + 1; j < n; j++) {
        bars[j].style.backgroundColor = "blue";
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, 300)
        );

        if (newarray[j] < newarray[i]) {
          bars[i].style.backgroundColor = "red";
          bars[j].style.backgroundColor = "red";
          await new Promise((resolve) =>
            setTimeout(() => {
              resolve();
            }, 300)
          );
          const temp = newarray[i];
          newarray[i] = newarray[j];
          newarray[j] = temp;
        }
        bars[j].style.backgroundColor = "pink";
        setArray([...newarray]);
      }
      bars[i].style.backgroundColor = "pink";
    }
  };

  const randomint = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  function MyCoolCodeBlock({
    code = "",
    language,
    showLineNumbers,
    startingLineNumber,
    highlight,
  }) {
    return (
      <CodeBlock
        text={`function bubblesort(){
        compare(array[j], array[j+1])
        if(array[j]>array[j+1]){
          swap(j, j+1)
        }
        }`}
        language={"javascript"}
        showLineNumbers={true}
        startingLineNumber={1}
        theme={dracula}
        highlight={lno}
      />
    );
  }

  return (
    <div className="App">
      <div className="header">
        <h1 className="title">Algo Visualizer</h1>
        <a href="https://www.buymeacoffee.com/prathamesh94" target="_parent">
          <button className="coffee">BUY ME COFFEE 🙂</button>
        </a>
      </div>
      <div className="animationcontainer">
        <div className="arraynum">
          <span className="funname">Bubble-Sort</span>
          <div className="array-container">
            {array.map((value, index) => (
              <div
                className="array-bar"
                key={index}
                style={{ height: `${value / 2}px` }}
              ></div>
            ))}
          </div>
          <div className="num-container">
            {array.map((value, index) => (
              <div
                className="num-bar"
                key={index}
                style={{ height: `${15}px` }}
              >
                {value}
              </div>
            ))}
          </div>
        </div>
        <div className="codesnippet">
          <div className="code">{MyCoolCodeBlock("")}</div>
        </div>
      </div>

      <div className="generator">
        <input className="inpfield" type="text" id="inputnums" />
        <button className="resetbtn" onClick={createArray}>
          Generate Array
        </button>
        <button className="resetbtn" onClick={resetArray}>
          Random Array
        </button>
        <input className="range" type="range" />
      </div>

      <div className="button-container">
        <button onClick={bubbleSort}>Bubble Sort</button>
        <button onClick={bubbleSort}>Bubble Sort</button>
        <button onClick={bubbleSort}>Merge sort Sort</button>
        <button onClick={SelectionSort}>selection Sort</button>
        <button onClick={bubbleSort}>insertion Sort</button>
      </div>
    </div>
  );
}

export default App;
