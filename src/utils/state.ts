import { createRef } from "react";

interface stateProps {
    sections: number
    pages: number
    zoom: number
    top: any
}

const state: stateProps = {
    sections: 3,
    pages: 3,
    zoom: 1,
    top: createRef()
}

export default state;