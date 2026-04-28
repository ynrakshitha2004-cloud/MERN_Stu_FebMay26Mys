import { React } from "react";
//props basics
function WelcomeCard(props) {
return(
    <div className="card">
    <h2>Hello,{props.name}</h2>
    <p>Role: {props.role}</p>
    </div>
)
}
//parent component
export function PropBasics(){
    return(
        <>
        <WelcomeCard name="Rakshitha" role="React developer"/>
        <WelcomeCard name="Developer" role="UI//UX developer"/>
        </>
    );
}