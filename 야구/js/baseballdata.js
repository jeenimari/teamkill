function getArticleList() {
    let articleList = localStorage.getItem('baseballArticles');
    if(articleList == null) {
        articleList = [];
    } else {
        articleList = JSON.parse(articleList);
    }
    return articleList;
}

function setArticleList(articleList) {
    localStorage.setItem('baseballArticles', JSON.stringify(articleList));
}

function getArticleById(articleId) {
    let articleList = getArticleList();
    for(let i = 0; i < articleList.length; i++) {
        if(articleList[i].articleId == articleId) {
            return articleList[i];
        }
    }
    return null;
}

function deleteArticle(articleId, inputPassword) {
    let articleList = getArticleList();
    let deleteIndex = -1;

    for(let i = 0; i < articleList.length; i++) {
        if(articleList[i].articleId == articleId) {
            if(articleList[i].password === inputPassword) {
                deleteIndex = i;
                break;
            } else {
                return { success: false, message: "비밀번호가 일치하지 않습니다." };
            }
        }
    }

    if(deleteIndex !== -1) {
        articleList.splice(deleteIndex, 1);
        setArticleList(articleList);
        return { success: true, message: "게시물이 삭제되었습니다." };
    }

    return { success: false, message: "게시물을 찾을 수 없습니다." };
    
}

function updateArticleData(articleId, inputPassword, updatedData) {
    let articleList = getArticleList();
    
    for(let i = 0; i < articleList.length; i++) {
        if(articleList[i].articleId == articleId) {
            if(articleList[i].password === inputPassword) {
                articleList[i] = { ...articleList[i], ...updatedData };
                setArticleList(articleList);
                return { success: true, message: "게시물이 수정되었습니다." };
            } else {
                return { success: false, message: "비밀번호가 일치하지 않습니다." };
            }
        }
    }

    return { success: false, message: "게시물을 찾을 수 없습니다." };
}