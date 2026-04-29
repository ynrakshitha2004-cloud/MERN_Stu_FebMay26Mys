import { React } from "react";
function UserProfile({ username, skill }) {
    return (
        <div>
            <p>User: {username}</p>
            <p>role: { skill}</p>
        </div>
    )
}
//Parent component
export function  PropDestructing(){
    return(
        <>
<h2>Prop Destructing</h2>
<UserProfile username="Rakshitha" skill="React" />
</>
    )
}