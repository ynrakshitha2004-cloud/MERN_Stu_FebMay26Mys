//Synthetic event vs Native event
//synthetic event: 
//A wrapper created by React around the browsers native event.
//Gives a  consistent API across different browsers.
//works similarly to native events but with some differences.
//event.nativeEvent
//why does react use it?
//To make event handling handling behave consistently
//To simplify cross-browser differences
//To integrate smoothly with React's rendering and state management
//How synthetic event works:
//component renders:A button appears on the screen
//handleClick is defined but not executed yet
//user clicks the button: browser creates a native event and React creates a synthetic event
//React wraps that native event in a synthetic event and passes it to the handleClick function
//event.target gives us HTML button element

