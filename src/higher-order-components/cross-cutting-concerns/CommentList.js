import React, { Component } from 'react';

function Comment(props) {
    return (
        <li>{props.comment.content}</li>
    )
}

class CommentList extends Component {
    render() {
        return (
            <ul>
                {this.props.data.map((comment) => (
                    <Comment comment={comment} key={comment.id} />
                ))}
            </ul>
        );
    }
}

export default CommentList;