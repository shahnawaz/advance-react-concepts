import React, { Component } from 'react';
import withSubscriptionHoc from "./withSubscription.hoc";
import CommentList from "./CommentList";
import BlogPost from "./BlogPost";

const BlogPostWithSubscription = withSubscriptionHoc(
    BlogPost,
    (DataSource, props) => DataSource.getBlogPost(props.id)
)

const CommentListWithSubscription = withSubscriptionHoc(
    CommentList,
    (DataSource) => DataSource.getComments()
)

class CrossCuttingConcernsUsingHoc extends Component {
    render() {
        // When CommentListWithSubscription and BlogPostWithSubscription are rendered,
        // CommentList and BlogPost will be passed a data prop with the most current data retrieved from DataSource:
        return (
            <div>
                <div>
                    <BlogPostWithSubscription />
                </div>
                <div>
                    <CommentListWithSubscription />
                </div>
            </div>
        );
    }
}

export default CrossCuttingConcernsUsingHoc;