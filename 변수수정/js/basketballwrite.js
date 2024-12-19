function submitPost() {
    let title = document.querySelector('.title-input').value;     
    let content = document.querySelector('.content-input').value;   
    let password = document.querySelector('.password-input').value;  

    let nowDate = new Date();
    let nowYear = nowDate.getFullYear();
    let nowMonth = nowDate.getMonth() + 1;
    let nowDay = nowDate.getDate();
    let date = `${nowYear}-${nowMonth}-${nowDay}`;
    let view = 0;
    
    let postList = getPostList();
    let postId = postList.length != 0 ? 
        postList[postList.length - 1].postId + 1 : 1;
    
    let post = {
        postId: postId,
        title: title,
        content: content,
        password: password,
        date: date,
        view: view
    };

    postList.push(post);
    setPostList(postList);
    
    alert('게시물 등록 성공');      
    location.href = "basketball.html";
}