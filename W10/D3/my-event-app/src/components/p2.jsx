//React Event object
//what is it?
//React automatically passes an event object to the event handler when an event is triggered. This event object is a synthetic event, which is a cross-browser wrapper around the native event. 
//eg: info about the event.target.value, etc
//event: info about the input page
//event: target: the HTML input element
//event.target.value: the cuurent text typed by the user
 import {useState} from 'react';
export function EventObject(){
   const [text, setText] = useState("");
    const handleChange = (event) => {
        const currentValue = event.target.value;
        console.log(currentValue);
        setText(currentValue);
    };
    return (
        <section>
            <h2>Event Object</h2>
            <input type="text" value={text} onChange={handleChange} 
            placeholder = "Type something"
            />
             <p>You typed: {text}</p>

        </section>
    );
}