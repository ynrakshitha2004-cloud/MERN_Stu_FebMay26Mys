import React, { useState } from 'react';
//state lifting: moving shared state up to the closest common parent
//We use this: when multiple child components need to share the same data 
//props drilling becomes too complex
//child components need to update the same data
//First child component
function NameInput1({ value, onChange }) {
    return (
        <div>
            <label>Input 1:</label>
            <input value={value} 
            onChange = {(e) => onChange(e.target.value)}
            placeholder="Type a name..." />
        </div>
    )
}
//Second child component
function NameInput2({ value, onChange }) {
    return (
        <div>
            <label>Input 2:</label>
             <input value={value} 
            onChange = {(e) => onChange(e.target.value)}
            placeholder="This gets updated..." />
        </div>
    );
}
//Parent component
 export function SharedStateParent() {
    const [name, setName456] = useState('');
    return (
        <div>
            <h3>Shared state demo</h3>
            <NameInput1 value={name} onChange={setName456} />
            <NameInput2 value={name} onChange={setName456} />
            <div>
                <strong>Current Name: </strong> {name || 'Nothing typed yet'}
            </div>
        </div>
    );
}