import { useState } from "react";
import "./App.css";

function App() {
  const [totalCount, setTotalCount] = useState(0);
  const increaseCount = () => {
    console.log("hey");
    if (totalCount === 100)
      return alert(
        "You successfully read full Tasbih please reset to read the Tasbih again"
      );
    setTotalCount(totalCount + 1);
  };
  const reset = () => {
    setTotalCount(0);
  };

  return (
    <>
      <div>
        <div className="eachCount">
          {totalCount < 100 ? <h2>Allahu Akbar</h2> : ""}
          {totalCount < 66 ? <h2>ALHAMDULILLAH</h2> : ""}
          {totalCount < 34 ? <h2>SUBHANALLAH</h2> : ""}
        </div>
        <div className="countes" onClick={increaseCount}>
          {/*  */}
          <h2>{totalCount}</h2>
        </div>
        <button onClick={reset} className="btn">
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
