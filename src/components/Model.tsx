import { useGLTFLoader } from "drei"



function Model({modelPath}: {modelPath: string}) {

    const gltf = useGLTFLoader(modelPath, true);

  return (
    <primitive object={gltf.scene} dispose={null}/>
  )
}

export default Model