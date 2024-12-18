// 게시물 목록 가져오기
function getPostList() {
    let postList = localStorage.getItem('postList');
    if(postList == null) {
        postList = [];
    } else {
        postList = JSON.parse(postList);
    }
    return postList;
}

// 게시물 목록 저장하기
function setPostList(postList) {
    localStorage.setItem('postList', JSON.stringify(postList));
}

// 특정 게시물 가져오기
function getPost(postId) {
    let postList = getPostList();
    for(let index = 0; index < postList.length; index++) {
        if(postList[index].postId == postId) {
            return postList[index];
        }
    }
    return null;
}

// 게시물 삭제
function deletePostFromList(postId, inputPassword) {
    let postList = getPostList();
    let deleteIndex = -1;

    for(let index = 0; index < postList.length; index++) {
        if(postList[index].postId == postId) {
            if(postList[index].password === inputPassword) {
                deleteIndex = index;
                break;
            } else {
                return { success: false, message: "비밀번호가 일치하지 않습니다." };
            }
        }
    }

    if(deleteIndex !== -1) {
        postList.splice(deleteIndex, 1);
        setPostList(postList);
        return { success: true, message: "게시물이 삭제되었습니다." };
    }

    return { success: false, message: "게시물을 찾을 수 없습니다." };
}

// 게시물 수정
function updatePost(postId, inputPassword, updatedPost) {
    let postList = getPostList();
    
    for(let index = 0; index < postList.length; index++) {
        if(postList[index].postId == postId) {
            if(postList[index].password === inputPassword) {
                postList[index] = { ...postList[index], ...updatedPost };
                setPostList(postList);
                return { success: true, message: "게시물이 수정되었습니다." };
            } else {
                return { success: false, message: "비밀번호가 일치하지 않습니다." };
            }
        }
    }

    return { success: false, message: "게시물을 찾을 수 없습니다." };
}