import React, { Component } from 'react';
import logPropsHoc from "./logProps.hoc";
import logPropsWithForwardRefHoc from "./logPropsWithForwardRef.hoc";

/*class FancyButton extends Component {
    render() {
        return (
            <button ref={this.props.ref} className="FancyButton" onClick={this.props.onClick}>
                { this.props.children }
            </button>
        );
    }
}*/

const FancyButton = React.forwardRef(
    function fancyButton(props, ref) {
        return <button ref={ref} className="FancyButtonTwo" onClick={props.onClick}>
            { props.children }
        </button>
    }
)

/**
 * With HOC
 *
 * There is one caveat to the above example: refs will not get passed through.
 * That’s because ref is not a prop. Like key, it’s handled differently by React.
 * If you add a ref to a HOC, the ref will refer to the outermost container component, not the wrapped component.
 *
 * This means that refs intended for our FancyButton component will actually be attached to the LogProps component:
 */

export const FancyButtonWithLogPropsHOC = logPropsHoc(FancyButton);

/**
 * With HOC and Forward Ref
 *
 * Fortunately, we can explicitly forward refs to the inner FancyButton component using the React.forwardRef API.
 * React.forwardRef accepts a render function that receives props and ref parameters and returns a React node.
 * For example: Check logPropsWithForwardRef.hoc.js
 *
 */

export const FancyButtonWithLogPropsForwardRefHOC = logPropsWithForwardRefHoc(FancyButton);
