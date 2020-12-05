import React, { Component } from 'react';

function TextBlock(props) {
    return (
        <h1>{props.text}</h1>
    )
}

class BlogPost extends Component {
    render() {
        return (
            <div>
                <TextBlock text={this.props.data} />
            </div>
        );
    }
}

export default BlogPost;