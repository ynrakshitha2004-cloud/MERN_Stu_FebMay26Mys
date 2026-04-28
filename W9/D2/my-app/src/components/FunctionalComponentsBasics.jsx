import React from 'react';
function welcome(props){
    //Child component : reusable UI
return(
    <p>Hello, {props,name}</p>
);
}
export function FunctionalComponentsBasics(){
    return(
        <div>
            <h2>Functional Components Basics</h2>
            {/* We are passing 'Rakshitha as prop, WeLCOME FUNCTIONS RECEIVES IS AS {name: "Rakshitha"} */}
            <Welcome name="Rakshitha" />
              {/* We are passing 'Rakshitha as prop, WeLCOME FUNCTIONS RECEIVES IS AS {name: "Developer"} */}
             <Welcome name="Developer" />
        </div>
    )
}