import React, { Component } from 'react';
import DataSourceCreator from "./DataSourceCreator";

// This function takes a component...
function withSubscriptionHoc(WrapperComponent, selectData) {
    // ...and returns another component...
    class WithSubscriptionHoc extends Component {
        constructor(props) {
            super(props);
            const DataSource = DataSourceCreator();
            this.state = {
                data: selectData(DataSource, this.props)
            }
            this.DataSource = DataSource;
        }

        componentDidMount() {
            // ... that takes care of the subscription...
            this.DataSource.addChangeListener(this.handleChange);
        }

        componentWillUnmount() {
            this.DataSource.removeChangeListener(this.handleChange);
        }

        handleChange = () => {
            this.setState({
                data: selectData(this.DataSource, this.props)
            })
        }

        render() {
            // ... and renders the wrapped component with the fresh data!
            // Notice that we pass through any additional props
            return (
                <WrapperComponent data={this.state.data} {...this.props} />
            );
        }
    }

    return WithSubscriptionHoc;
}

export default withSubscriptionHoc;
