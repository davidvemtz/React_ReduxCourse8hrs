import {database} from '../database/config';

export function startAddingPost(post) {
    return (dispatch) => {
        return database.ref('post').update({[post.id]: post}).then(() => {
            dispatch(addPost(post));
        }).catch((err) => {
            console.log(err);
        })
    } 
}

export function startLoadingPosts() {
    return (dispatch) => {
        return database.ref('post').once('value').then((snapshot) => {
            let posts =[];
            snapshot.forEach((childSnapshot) => {
                posts.push(childSnapshot.val());
            })
            dispatch(loadPosts(posts));
        }).catch((err) => {
            console.log(err);
        })
    }
}

export function startRemovingPost(index, id) {
    return (dispatch) => {
        return database.ref(`post/${id}`).remove().then(() =>{
            dispatch(removePost(index));
        }).catch((err) => {
            console.log(err);
        })
    }
}

export function startAddingComment(comment, postId) {
    return (dispatch) => {
        return database.ref(`comments/${postId}`).push(comment).then(() => {
            dispatch(addComment(comment));
        }).catch((err) => {
            console.log(err);
        })
    }
}

export function startLoadingComments() {
    return (dispatch) => {
        return database.ref('comments').once('value').then((snapshot) => {
            let comments={};
            snapshot.forEach((childSnapshot) => {
                comments[childSnapshot.key] = Object.values(childSnapshot.val());
            })
            dispatch(loadComments(comments))
        })
    }
}

// remove
export function removePost(index) {
    return {
        type: 'REMOVE_POST',
        index
    }
}

//adding post
export function addPost(post) {
    return {
        type: 'ADD_POST',
        post
    }
}

export function addComment(comment, postId) {
    return {
        type: 'ADD_COMMENT',
        comment,
        postId
    }
}

export function loadPosts(posts) {
    return {
        type: "LOAD_POSTS",
        posts
    }
}

export function loadComments(comments) {
    return {
        type: "LOAD_COMMENTS",
        comments
    }
}