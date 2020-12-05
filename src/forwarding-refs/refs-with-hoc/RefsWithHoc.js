import React, { Component } from 'react';
import { FancyButtonWithLogPropsHOC, FancyButtonWithLogPropsForwardRefHOC } from "./FancyButton";

class RefsWithHoc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fancyButtonRef: React.createRef(),
            fancyButtonTwoRef: React.createRef()
        }
    }

    componentDidMount() {
        console.log(this.state.fancyButtonRef)
        console.log(this.state.fancyButtonTwoRef)
    }

    render() {
        return (
            <div>
                {/*
                    // The FancyButton component we imported is the LogProps HOC.
                    // Even though the rendered output will be the same,
                    // Our ref will point to LogProps instead of the inner FancyButton component!
                    // This means we can't call e.g. ref.current.focus()
                */}
                <FancyButtonWithLogPropsHOC ref={this.state.fancyButtonRef} onClick={() => { console.log('FancyButtonWithLogPropsHOC') }}>
                    FancyButtonWithLogPropsHOC
                </FancyButtonWithLogPropsHOC>

                <FancyButtonWithLogPropsForwardRefHOC ref={this.state.fancyButtonTwoRef} onClick={() => { console.log('FancyButtonWithLogPropsForwardRefHOC') }}>
                    FancyButtonWithLogPropsForwardRefHOC
                </FancyButtonWithLogPropsForwardRefHOC>
            </div>
        );
    }
}

export default RefsWithHoc;
