import { createRef, RefObject } from "react";

interface stateProps {
    sections: number
    pages: number
    zoom: number
    top: RefObject<any>
}

const state: stateProps = {
    sections: 3,
    pages: 3,
    zoom: 1,
    top: createRef()
}

export default state;