import { useState } from "react"

function ToggleSwitch(){

    const [toggle, setToggle] = useState(false)
    return(<div>
        <div className = "toggleSwitch" onClick={ () => setToggle(!toggle)} style={{ background : toggle ? "orange" : ""}}>
        <div className={toggle ? "active" : "#242424"}></div>
    </div>
        </div>)
}
export default ToggleSwitch