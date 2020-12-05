function DataSourceCreator() {
    function addChangeListener() {
        console.log('addChangeListener')
    }

    function removeChangeListener() {
        console.log('removeChangeListener')
    }

    function getComments() {
        console.log('getComments')
        return [
            { content: 'Comment 1', id: 1 },
            { content: 'Comment 2', id: 2 },
            { content: 'Comment 3', id: 3 },
        ]
    }

    function getBlogPost() {
        console.log('getBlogPost')
        return 'I am a blog post';
    }

    return {
        addChangeListener,
        removeChangeListener,
        getComments,
        getBlogPost
    }
}

export default DataSourceCreator;
