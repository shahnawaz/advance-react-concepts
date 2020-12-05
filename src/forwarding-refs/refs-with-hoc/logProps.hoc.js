import React, { Component } from 'react';

function logPropsHoc(WrappedComponent) {

    class LogProps extends Component {
        componentDidMount(prevProps) {
            console.log('old props:', prevProps);
            console.log('new props:', this.props);
        }

        render() {
            return <WrappedComponent {...this.props} />
        }
    }

    return LogProps;
}

export default logPropsHoc;