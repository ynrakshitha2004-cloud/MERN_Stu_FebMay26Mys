// Passing Functions as props
// Also called as "callbeckprops"
//Child components has to invoke parent logic
function ChildButton({ onGreet }) {
    return (
        <button onClick={onGreet}>
            Invoke Parent Function
        </button>
    );
}

// Parent Component
export function FunctionProps() {
    const greet = () => alert('Hello from parent function');

    return (
        <>
            <h2>Passing Functions as Props</h2>
            <ChildButton onGreet={greet} />
        </>
    );
}