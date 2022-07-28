import { Html } from "drei";
import { ReactNode, useRef } from "react";
import { useFrame } from "react-three-fiber";
import { Group } from "three";
import { Section } from "../contexts/Section";
import Model from "./Model";

interface HtmlContentProps {
  children: ReactNode,
  modelPath: string, 
  position: any
}

function HtmlContent({ children, modelPath, position }: HtmlContentProps) {

    const ref = useRef<any>();
    useFrame(() => ref.current.rotation.y += 0.01)

  return (
    <Section factor={1.5} offset={1}>
      <group position={position}>
        <mesh ref={ref} position={[0, -25, 0]}>
            <Model path={modelPath}/>
        </mesh>
          {children}
      </group>
    </Section>
  );
}

export default HtmlContent;
