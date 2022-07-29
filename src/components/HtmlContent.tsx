import { Html } from "drei";
import { MutableRefObject, ReactNode, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useFrame } from "react-three-fiber";
import { Section } from "../contexts/Section";
import Model from "./Model";


interface HtmlContentProps {
  children: ReactNode,
  modelPath: string, 
  bgColor: string,
  positionY: number
  positionZ: number
  positionYmesh: number
  domContent?: MutableRefObject<HTMLElement>
}

function HtmlContent({
   domContent,
   bgColor,
   children,
   modelPath,
   positionZ,
   positionYmesh,
   positionY }: HtmlContentProps) {

    const ref = useRef<any>();
    useFrame(() => ref.current.rotation.y += 0.01)

      const [refItem, inView] =  useInView({
        threshold: 0
      })

      useEffect(() => {
        inView && (document.body.style.background = `${bgColor}`)
      }, [inView])

  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, positionY, 0]}>
        <mesh ref={ref} position={[0, positionYmesh, positionZ]}>
            <Model modelPath={modelPath}/>
        </mesh>
        <Html portal={domContent} fullscreen>
          <div className="container" ref={refItem}>
          {children}
          </div>
        </Html>
      </group>
    </Section>
  );
}

export default HtmlContent;
