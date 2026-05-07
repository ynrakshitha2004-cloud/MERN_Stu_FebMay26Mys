//useCallback with Handlers
import { useState, useCallback, memo } from "react";
const ChildButton = memo (function childButton({onClick}) {
    console.log("Child button rendered");
    return(

     <button onClick={onClick}>Child Button</button>
    );
});
export function UseCallbackEvents() {
    const [count, setCount] = useState(0);
    const handleClick = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, []);
    return (
        <section>
            <h2>UseCallback in events example</h2>
            <p>Count: {count}</p>
            <ChildButton onClick={handleClick} />
        </section>
    );
}