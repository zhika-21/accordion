import React,{useState} from 'react'


const Accordeon = ({title,content}) => {
    const [isActive, setActive] = useState(false);
  return (

        <div className="accordeon-item">
            <div className="accordion title" onClick={()=>setActive(!isActive)}>
                <div>{title}</div>
                <div>{isActive ? "-" : "+"}</div>
            </div>
            {isActive && <div className="accordion-content">{content}</div>}
        </div>
  )
}
export default Accordeon;

    