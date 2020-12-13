import React, { Component } from 'react';

class JsxInDepth extends Component {
    render() {
        return (
            <div>
                JSX In Depth
            </div>
        );
    }
}

export default JsxInDepth;

/**

<MyButton color="blue" shadowSize={2}>
    Click Me
</MyButton>

compiles into:

React.createElement(
    MyButton,
    {color: 'blue', shadowSize: 2},
    'Click Me'
)

 You can also use the self-closing form of the tag if there are no children. So:

<div className="sidebar" />

 compiles into:

React.createElement(
    'div',
    {className: 'sidebar'}
)

**/




