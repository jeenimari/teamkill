// 상세 출력 함수
displayPostDetail(); // 페이지가 열리면 자동으로 함수 1번 실행

function displayPostDetail() { 
    let postId = new URL(location.href).searchParams.get('postId'); // 게시물 번호 가져오기
    let post = getPost(postId); // 게시물 정보 가져오기

    // 게시물이 없는 경우 처리
    if (!post) {
        alert("게시물을 찾을 수 없습니다.");
        location.href = "basketball.html";
        return;
    }

    post.view = parseInt(post.view) + 1;  // 조회수 증가
    updatePost(postId, post.password, {view: post.view});  // 조회수 증가

    // 게시물 출력
    document.querySelector('.post-title').innerHTML = post.title;
    document.querySelector('.post-content').innerHTML = post.content;
    document.querySelector('.post-date').innerHTML = post.date;
    document.querySelector('.view-count').innerHTML = post.view;
    document.querySelector('.button-section').innerHTML = `
        <button onclick="deletePost(${post.postId})" type="button">삭제</button> 
        <button onclick="editPost(${post.postId})" type="button">수정</button>`;
} 

// 삭제 함수
function deletePost(deletePostId) {
    let inputPassword = prompt("게시물 비밀번호를 입력하세요:");
    const result = deletePostFromList(deletePostId, inputPassword);
    
    if (result.success) {
        alert(result.message);
        location.href = "basketball.html";
    } else {
        alert(result.message);
    }
}

// 수정 함수
function editPost(postId) {
    let inputPassword = prompt("게시물 비밀번호를 입력하세요:");
    let post = getPost(postId);

    if (post.password !== inputPassword) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
    }

    let newTitle = prompt("새 제목을 입력하세요:", post.title);
    let newContent = prompt("새 내용을 입력하세요:", post.content);

    let updatedData = {
        title: newTitle,
        content: newContent,
    };

    const result = updatePost(postId, inputPassword, updatedData);
    if (result.success) {
        alert(result.message);
        location.reload();
    } else {
        alert(result.message);
    }
}