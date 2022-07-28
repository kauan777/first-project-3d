import { createContext, useRef, useContext, ReactNode } from "react";
import { useFrame, useThree } from 'react-three-fiber';
import lerp from 'lerp';
import state from '../utils/state';

interface offSetContextProps {
    offset: number
}

interface SectionProps {
    children: ReactNode,
    offset: number,
    factor: number
}


export const offSetContext = createContext(0);

export function Section({children, offset, factor, ...props}: SectionProps){

    const {offset: parentOffset, sectionHeight, aspect } = useSection();
    const ref = useRef<any>(null);

    offset = offset !== undefined ? offset : parentOffset;

    useFrame(() =>{
        const curY = ref.current?.position.y;
        const curTop = state.top.current / aspect;
        ref.current.position.y = lerp(curY, (curTop / state.zoom) * factor, 0.1);
    });

    return( 
        <offSetContext.Provider value={offset}>
            <group {...props} position={[0, -sectionHeight * offset * factor, 0]}>
                <group ref={ref}>{children}</group>
            </group>
        </offSetContext.Provider>
    )
}



export function useSection(){

    const { sections, pages, zoom } = state;
    const { size, viewport } = useThree();
    const offset = useContext(offSetContext)
    const viewportWitdh =  viewport.width;
    const viewportHeight =  viewport.height;
    const canvasWidth = viewportWitdh / zoom;
    const canvasHeight = viewportHeight / zoom;
    const mobile = size.width < 700;
    const margin = canvasWidth * (mobile ? 0.2 : 0.1);
    const contentMaxWidth = canvasWidth * (mobile ? 0.8 : 0.6);
    const sectionHeight =  canvasHeight * ((pages-1) / (sections -1));
    const aspect = size.height / viewportHeight;

    return{
        aspect,
        viewport,
        offset,
        viewportWitdh,
        viewportHeight,
        canvasWidth,
        canvasHeight,
        mobile,
        margin,
        contentMaxWidth,
        sectionHeight
    }
}


