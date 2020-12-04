import React, { Component } from 'react';

/**
 * In the example below, FancyButton uses React.forwardRef to obtain the
 * ref passed to it, and then forward it to the DOM button that it renders:
 */

// The following component will appear as ”ForwardRef” in the DevTools:
const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton" onClick={props.onClick}>
        { props.children }
    </button>
))

// If you name the render function, DevTools will also include its name (e.g. ”ForwardRef(myFunction)”):
const FancyButtonTwo = React.forwardRef(function fancyButtonTwo(props, ref) {
    return <button ref={ref} className="FancyButtonTwo" onClick={props.onClick}>
        { props.children }
    </button>
})

class ForwardRefsExample extends Component{
    constructor(props) {
        super(props);
        this.state = {
            fancyButtonRef: React.createRef(),
            fancyButtonTwoRef: React.createRef(),
        }
    }

    componentDidMount() {
        this.state.fancyButtonRef.current.click(); // will console `fancyButton`
        this.state.fancyButtonTwoRef.current.click(); // will console `fancyButtonTwo`
    }

    render() {
        return (
            <div>
                <FancyButton ref={this.state.fancyButtonRef} onClick={() => { console.log('fancyButton') }}>Click me!</FancyButton>
                <FancyButtonTwo ref={this.state.fancyButtonTwoRef} onClick={() => { console.log('fancyButtonTwo') }}>Click me Two!</FancyButtonTwo>
            </div>
        );
    }
}

export default ForwardRefsExample;
