import { useGLTFLoader } from "drei"



function Model({path}: {path: string}) {

    const gltf = useGLTFLoader(path, true);

  return (
    <primitive object={gltf.scene} dispose={null}/>
  )
}

export default Model