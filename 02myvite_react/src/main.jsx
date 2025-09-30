import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


const anotherUser = 'hello world'

function MyApp(){
  return(
    <div>
      <h1> my custom app build by me</h1>
    </div>
  )
}

 //in react its converted function into object form.

// const  reactElement = {
//     type: 'a',
//     props: {
//         href:'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// } //



const anotherElement = ( 
  <a href="https://google.com" target='_blank'>Click Me ,I amm Google</a>
)



const ReactElement2 = React.createElement( 
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit ggoole',
  anotherUser
)


ReactDOM.createRoot(document.getElementById('root')).render(
 
//MyApp() //execututed bcz function but not the effficient way
 // <MyApp  /> ,
 //anotherElement //not the greater lesser sign use bcz its not a function.

 ReactElement2 ,
 <App />

)
