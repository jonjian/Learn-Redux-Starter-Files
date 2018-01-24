//actions are objects with two things: type with a name and an index

// increment 
const increment = (index) => {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}
//add comment
const addComment = (postId, author, comment) => {
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment,
    }
}
//remove comment
const removeComment = (postId, i) => {
    return {
        type: 'REMOVE_COMMENT',
        i,
        postId,
    }
}

module.exports = {
    increment,
    addComment,
    removeComment,
}