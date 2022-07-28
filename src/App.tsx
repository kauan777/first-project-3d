import { Html } from "drei";
import { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { Header } from "./components/Header";
import HtmlContent from "./components/HtmlContent";
import Lights from "./components/Lights";
function App() {
  
    //25:37

  return (
    <>
      <Header />
      <Canvas colorManagement camera={{ position: [0, 0, 120], fov: 70 }}>
        <Lights />
        <Suspense fallback={null}>
          <HtmlContent modelPath={"armchairYellow.gltf"} position={[0, 250, 0]}>
            <Html fullscreen>
              <div className="container">
                <h1 className="title">Hello</h1>
              </div>
            </Html>
          </HtmlContent>
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
