import Chai from "./chai"

function App() {
  
  return ( //jsx return just one element so that if you return h1 p chai and so on there is one execute not every element .so thats problem solution by the <div> <div/> element so always we use div thats why,developers create a <> </> this named frangment so that always dont use to div element

<>
 <h1> REACT APP CREATED WITH VITE | SECEND WAY </h1>,
 <Chai/>
 </>
  )
}

export default App
