import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Section1 from './section1.jsx'
import Section2 from './section2.jsx'
import Section3 from './section3.jsx'
import Section4 from './section4.jsx'
// import EvenOrOod from './EvenOrOod.jsx'
// import Manoj from './Manoj.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Section1/>
      <Section2/>
      <Section3/>
       <Section4/>
       {/* <EvenOrOod/>
       <Manoj/> */}
      </div>
     
    </>
  )
}

export default App
