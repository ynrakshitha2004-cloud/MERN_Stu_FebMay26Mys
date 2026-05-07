//Basic event in React
//what is event?-an action is triggereed by the user (mouse click, keyboard press,DOM etc) or by the system (page load, etc)
//React uses camelCase for attributes and event handlers like onClick, onChange, onSubmit etc
//React passes an event object (SyntheticEvent) to the event handler,
export function EventBasics(){
    //Declaring a event handler function
    const handleClick = () =>  alert("Button Clicked!");
    return (
        <section>
            <h2>Event Basic</h2>
            {/* Event Binding */}
            <button onClick={handleClick}>
                Click me
            </button>
        </section>
    )
}