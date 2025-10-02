import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {

  let [counter, setCounter] = useState(7)
 
//let counter = 7


const addValue = () => {
  //console.log('value added', Math.random());
  counter = counter + 1
  //console.log(counter)
  //setCounter(counter+1)
  setCounter(counter)
}

const removeValue = ()=>{
  counter = counter - 1
  setCounter(counter)
}

if (counter >= 10 ) {
    document.querySelector('h2').innerHTML = 'this doesnt ccount upper 10'
}else if( counter <= 0){
  document.querySelector('h2').innerHTML = 'this method is doesnot count less than 0'
}


  return (
    <>
      <h1>Learn Hooks in React</h1>
      <h2>  counter value: {counter}</h2>
      <button 
      onClick={addValue}> Add value</button>
      <br />
      <button 
      onClick={removeValue}> decrease value</button>

      <button>try again?</button>


<p>
       CREATE A DOCUMENT ABOUT HOOOKS IN REACT IF OU WANT TO THAN
</p>

    </>
  )
}

export default App
