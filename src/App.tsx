import { useState } from "react";
import "./App.css";
import GranualarSynth from "./scene/GranualarSynth";

function App() {
  const [numberOfWalls, setNumberOfWalls] = useState(4);
  const [numberOfBalls, setNumberOfBalls] = useState(1);
  const [speed, setSpeed] = useState(0.01);
  const [update, setUpdate] = useState(false);
  const func = () => console.log("playing plonk sound!");

  const handleUpdateWalls = (e: React.FormEvent<HTMLInputElement>): void => {
    setNumberOfWalls(parseInt(e.currentTarget.value));
  };

  const handleUpdate = (): void => {
    setUpdate(!update);
  };

  const handleUpdateBalls = (e: React.FormEvent<HTMLInputElement>): void => {
    setNumberOfBalls(parseInt(e.currentTarget.value));
  };

  const handleUpdateSpeed = (e: React.FormEvent<HTMLInputElement>): void => {
    setSpeed(parseFloat(e.currentTarget.value));
  };

  return (
    <div className="App" style={{ height: "400px", width: "400px" }}>
      <div style={{height: "400px"}}>
          <GranualarSynth
            update={update}
            sides={numberOfWalls}
            balls={numberOfBalls}
            handleTrigger={func}
            speedOfRotation={speed}
            gravity={[0, -20, 0]}
          />
      </div>

      <div>
        <label htmlFor="walls">Number of walls</label>
        <input
          type="number"
          name=""
          id="walls"
          max="5"
          min="0"
          value={numberOfWalls}
          onChange={(e) => handleUpdateWalls(e)}
        />
      </div>

      <div>
        <label htmlFor="balls">Number of balls</label>
        <input
          type="number"
          name=""
          id="balls"
          max="3"
          min="1"
          value={numberOfBalls}
          onChange={(e) => handleUpdateBalls(e)}
        />
      </div>
      <div>
        <label htmlFor="rotation">Speed</label>
        <input
          type="number"
          id="rotation"
          max=".02"
          min=".005"
          step=".001"
          value={speed}
          onChange={(e) => handleUpdateSpeed(e)}
        />
      </div>
      <button onClick={() => handleUpdate()}>Update</button>
    </div>
  );
}

export default App;
