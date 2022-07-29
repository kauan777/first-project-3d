import { Suspense, useEffect, useRef } from "react";
import { Canvas } from "react-three-fiber";
import { Event } from "three";
import { Header } from "./components/Header";
import HtmlContent from "./components/HtmlContent";
import Lights from "./components/Lights";
import state from "./utils/state";

function App() {

  const domContent: any = useRef(); 
  const scrollArea: any = useRef();

  const onScroll: any = (e: Event) => (state.top.current =  e.target.scrollTop) 

  useEffect(() => {
    void onScroll({target: scrollArea.current})
  }, [])

  return (
    <>
      <Header />
      <Canvas colorManagement camera={{ position: [0, 0, 120], fov: 70 }}>
        <Lights />
        <Suspense fallback={null}>
          
          <HtmlContent
            modelPath={"armchairYellow.gltf"}
            bgColor="#E4D546"
            positionY={250}
            domContent={domContent}
          >
            <div className="container">
              <h1 className="title">Yellow armchair</h1>
            </div>
          </HtmlContent>

          <HtmlContent 
            modelPath={"armchairBlue.gltf"} 
            bgColor="#4656E4"
            positionY={0}
            domContent={domContent}
            >
            <div className="container">
              <h1 className="title">Blue armchair</h1>
            </div>
          </HtmlContent>

          <HtmlContent 
            modelPath={"armchairPink.gltf"} 
            bgColor="#D75EBC"
            positionY={-250}
            domContent={domContent}
            >
            <div className="container">
              <h1 className="title">Pink armchair</h1>
            </div>
          </HtmlContent>
        
        
        </Suspense>
      </Canvas>
      <div className="scrollArea" style={{
        overflowX: 'hidden'
      }} ref={scrollArea} onScroll={onScroll}>
        <div style={{ position: "sticky", top: 0 }} ref={domContent}></div>
        <div style={{ height: `${state.sections * 100}vh` }}></div>
      </div>
    </>
  );
}

export default App;
