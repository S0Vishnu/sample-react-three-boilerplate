import { Canvas } from "@react-three/fiber";
import "./App.css";
import Scene from "./components/Scene";

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  );
}

export default App;
