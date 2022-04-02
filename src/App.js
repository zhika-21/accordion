import React from 'react'
import {data} from  "./components/data"
import Accordion from './components/Accordion'
import "./App.css"

const App=() =>{
  
  return (
    <div>
      <h1>React Accordion Menu</h1>
      <div className="accordion">
      {data.map(({title,content})=>
         <Accordion title={title} content={content}/>
      )}
    </div>
    </div>
  )
}

export default App