
import { useState } from "react"


function Change(){
    const [name,setName]=useState("")
    const handleChange=(event)=>{
        setName(event.target.value)
    }
    return (
        <>
        
        <input type="text" placeholder="Enter Name " onChange={handleChange}/>
        <p>Hello {name}</p>
        </>
    )
}

export default Change;