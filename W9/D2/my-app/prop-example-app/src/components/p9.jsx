// Props vs State
// Props: data passed from parent to chid component
//state: data managed inside a compinent
//data comes from outside the component 
//are read-only
//are used for passing data b/w components
//state: data managed inside a component 
//belongs to component itself
//can be modified/changed
//setter method is used to modify data
import { useState } from "react";
function  Child({title}){
    return <p>Props: {title}</p>
}
 export function PropsState(){
    const [stateValue, setStateValue] = useState('Local State');
    return(
        <>
        <h3>Props vs State</h3>
        <Child title="Parent data" />
        <p>State: {stateValue}</p>
        <button onClick={()=>setStateValue('This is new state')}>
            Update State
        </button>
        </>
    )
}