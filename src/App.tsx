import { Canvas } from "@react-three/fiber";
import "./App.css";
import React_Scene from "./components/R3F_Scene";
import Scene from "./components/Scene";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        display: "flex",
      }}
    >
      <div className="react-canvas" style={{ flex: 1, width: "50vw" }}>
        <Canvas>
          <React_Scene />
        </Canvas>
      </div>
      <div
        className="three-canvas"
        id={"three-canvas"}
        style={{ flex: 1, width: "50vw" }}
      >
        <Scene />
      </div>
    </div>
  );
}

export default App;
