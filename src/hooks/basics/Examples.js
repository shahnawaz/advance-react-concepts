import React, { useState, useEffect } from "react";

export function SimpleCounterWithHooks() {
    const [count, setCount] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times.`
    })

    return (
        <div>
            <p>You clicked {count} times.</p>
            <button
                onClick={() => setCount(count + 1)}
            >Click me</button>
        </div>
    );
}

/*
function ExampleWithManyStates() {
  // Declare multiple state variables!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  // ...
}
 */
