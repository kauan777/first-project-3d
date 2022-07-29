
function Lights() {
  return (
    <>
      <ambientLight intensity={.3}/>
      <directionalLight position={[10,10,5]} intensity={2} />   
      <directionalLight position={[0,10,0]} intensity={1.5} />   
      <spotLight intensity={1} position={[0, 1000, 0]}/>
    </>
  )
}

export default Lights