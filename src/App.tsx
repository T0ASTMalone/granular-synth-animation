import { useState } from "react";
import "./App.css";
import GranularSynth from "./scene/GranularSynth";

function App() {

  const [numberOfWalls, setNumberOfWalls] = useState(5);
  const [numberOfBalls, setNumberOfBalls] = useState(1);
  const [ballMass, setBallMass] = useState(5);
  const [gravity, setGravity] = useState(-24);
  const [speed, setSpeed] = useState(0.01);

  const func = () => console.log("playing plonk sound!");

  const handleUpdateWalls = (e: React.FormEvent<HTMLInputElement>): void => {
    setNumberOfWalls(parseInt(e.currentTarget.value));
  };

  const handleUpdateBalls = (e: React.FormEvent<HTMLInputElement>): void => {
    setNumberOfBalls(parseInt(e.currentTarget.value));
  };

  const handleUpdateSpeed = (e: React.FormEvent<HTMLInputElement>): void => {
    setSpeed(parseFloat(e.currentTarget.value));
  };

  const handleUpdateBallMass = (e: React.FormEvent<HTMLInputElement>): void => {
    setBallMass(parseFloat(e.currentTarget.value));
  };

  const handleUpdateGravity = (e: React.FormEvent<HTMLInputElement>): void => {
    setGravity(parseFloat(e.currentTarget.value));
  };

  return (
    <div className="App" style={{ height: "400px", width: "400px" }}>

      <div style={{ height: "400px" }}>
        <GranularSynth
          sides={numberOfWalls}
          balls={numberOfBalls}
          ballMass={ballMass}
          handleTrigger={func}
          speedOfRotation={speed}
          gravity={[0, gravity, 0]}
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
        <label htmlFor="ball-mass">Ball Mass</label>
        <input
          type="number"
          id="ball-mass"
          max="100"
          min="1"
          value={ballMass}
          onChange={(e) => handleUpdateBallMass(e)}
        />
      </div>

      <div>
        <label htmlFor="walls">Gravity</label>
        <input
          type="number"
          id="gravity"
          max="20"
          min="-23"
          value={gravity}
          onChange={(e) => handleUpdateGravity(e)}
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
          min=".000"
          step=".001"
          value={speed}
          onChange={(e) => handleUpdateSpeed(e)}
        />
      </div>
    </div>
  );
}

export default App;
