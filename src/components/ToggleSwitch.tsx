import { useState } from "react"

function ToggleSwitch(){

    const [toggle, setToggle] = useState(false)
    return(<div>
        <h1>{toggle ? "fidesz" : "fityesz"}</h1>
        <div className = "toggleSwitch" onClick={ () => setToggle(!toggle)} style={{ background : toggle ? "orange" : ""}}>
        <div className={toggle ? "active" : "#242424"}></div>
    </div>
        </div>)
}
export default ToggleSwitch