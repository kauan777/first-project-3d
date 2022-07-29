import HtmlContent from "./components/HtmlContent";
import Lights from "./components/Lights";
import { Suspense, useEffect, useRef } from "react";
import { Canvas } from "react-three-fiber";
import { Event } from "three";
import { Header } from "./components/Header";
import state from "./utils/state";
//Inside in Canvas, add <OrbitControls/> for you have control of the model

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
            modelPath={"/scene.gltf"}
            bgColor="linear-gradient(180deg, #A30000 -30%, #3D0000 103.86%)"
            positionY={230}
            positionZ={115}
            positionYmesh={19.9}
            domContent={domContent}
          >
            <div className="container">
              <h1 className="title font-light">iphone 7</h1>
              <a href="#" 
              className="px-16 py-3 
                        border border-solid border-gray-50
                      text-gray-50 rounded-full
                      hover:bg-gray-50 hover:text-gray-700
                        transition-colors
                      ">Saber mais</a>
            </div>
          </HtmlContent>

          <HtmlContent
            modelPath={"/ipad.gltf"}
            bgColor="linear-gradient(180deg, #858585 -30%, #121212 103.86%)"
            positionY={0}
            positionZ={0}
            positionYmesh={-30}
            domContent={domContent}
          >
            <div className="container">
              <h1 className="title font-light">iPad Pro max</h1>
              <a href="#" 
              className="px-16 py-3 
                        border border-solid border-gray-50
                      text-gray-50 rounded-full
                      hover:bg-gray-50 hover:text-gray-700
                        transition-colors
                      ">Saber mais</a>
            </div>
          </HtmlContent>

          <HtmlContent
            modelPath={"/iphone12.gltf"}
            bgColor="radial-gradient(45.59% 45.59% at 50.04% 54.41%,
                                     #0C0055 0%,
                                     #050026 100%)"
            positionY={-270}
            positionZ={0}
            positionYmesh={-30}
            domContent={domContent}
          >
            <div className="container">
              <h1 className="title font-light">iPhone 12 Pro</h1>
              <a href="#" 
              className="px-16 py-3 
                        border border-solid border-gray-50
                      text-gray-50 rounded-full
                      hover:bg-gray-50 hover:text-gray-700
                        transition-colors
                      ">Saber mais</a>
            </div>
          </HtmlContent>


         

    

        
        </Suspense>
      </Canvas>
      <div className="scrollArea" style={{
        overflowX: "hidden"
      }} ref={scrollArea} onScroll={onScroll}>
        <div style={{ position: "sticky", top: 0 }} ref={domContent}></div>
        <div style={{ height: `${state.sections * 100}vh` }}></div>
      </div>
    </>
  );
}

export default App;
