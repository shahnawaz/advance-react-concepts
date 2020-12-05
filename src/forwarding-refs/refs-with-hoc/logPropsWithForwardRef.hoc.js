import React, { Component } from 'react';

function logPropsWithForwardRefHoc(WrappedComponent) {

    class LogPropsWithForwardRefHoc extends Component {
        componentDidMount(prevProps) {
            console.log('old props:', prevProps);
            console.log('new props:', this.props);
        }

        render() {
            const {forwardedRef, ...rest} = this.props;

            // Assign the custom prop "forwardedRef" as a ref
            return <WrappedComponent ref={forwardedRef} {...rest} />
        }
    }

    // Note the second param "ref" provided by React.forwardRef.
    // We can pass it along to LogProps as a regular prop, e.g. "forwardedRef"
    // And it can then be attached to the Component.
    function forwardRefFromHOC(props, ref) {
        return <LogPropsWithForwardRefHoc {...props} forwardedRef={ref} />
    }

    // DOESN'T WORK
    // Give this component a more helpful display name in DevTools.
    // e.g. "ForwardRef(logProps(MyComponent))"
    // const name = WrappedComponent.displayName || WrappedComponent.name;
    // forwardRefFromHOC.displayName = `logProps(${name})`;

    return React.forwardRef(forwardRefFromHOC);
}

export default logPropsWithForwardRefHoc;