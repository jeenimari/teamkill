// [3] 상세 출력 함수
상세출력함수(); // 페이지가 열리면 자동으로 함수 1번 실행
function 상세출력함수() { 
    // * URL 경로상의 ?뒤에(쿼리스트링) 값 가져오기
    let bno = new URL(location.href).searchParams.get('bno'); // 게시물 번호 가져오기
    let board = getBoard(bno); // 게시물 정보 가져오기

    // 게시물이 없는 경우 처리
    if (!board) {
        alert("게시물을 찾을 수 없습니다.");
        location.href = "board.html";
        return;
    }
    board.view = parseInt(board.view) + 1;  // 조회수 증가
    updateBoard(bno, board.password, {view: board.view});  // 조회수 증가
    // 게시물 출력
    document.querySelector('.titleBox').innerHTML = board.title;
    document.querySelector('.contentBox').innerHTML = board.content;
    document.querySelector('.dateBox').innerHTML = board.date;
    document.querySelector('.viewBox').innerHTML = board.view;
    document.querySelector('.btnBox').innerHTML = `
        <button onclick="삭제함수(${board.bno})" type="button">삭제</button> 
        <button onclick="수정함수(${board.bno})" type="button">수정</button>`;
} 

// [4] 삭제 함수 (비밀번호 확인 포함)
function 삭제함수(deleteBno) {
    // 비밀번호 입력 받기
    let inputPassword = prompt("게시물 비밀번호를 입력하세요:");

    // 삭제 처리
    const result = deleteBoard(deleteBno, inputPassword);
    if (result.success) {
        alert(result.message); // 삭제 성공 메시지
        location.href = "soccer.html"; // 목록 페이지로 이동
    } else {
        alert(result.message); // 실패 메시지 출력
    }
}

// [5] 수정 함수 (비밀번호 확인 포함)
function 수정함수(bno) {
    // 비밀번호 입력 받기
    let inputPassword = prompt("게시물 비밀번호를 입력하세요:");
    let board = getBoard(bno);

    // 비밀번호 확인
    if (board.password !== inputPassword) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
    }

    // 수정 폼 표시 (예: 모달 창 또는 새로운 페이지로 이동)
    let newTitle = prompt("새 제목을 입력하세요:", board.title);
    let newContent = prompt("새 내용을 입력하세요:", board.content);

    // 수정 데이터
    let updatedData = {
        title: newTitle,
        content: newContent,
    };

    const result = updateBoard(bno, inputPassword, updatedData); // 수정 함수 호출
    if (result.success) {
        alert(result.message); // 수정 성공 메시지
        location.reload(); // 페이지 새로고침으로 변경 사항 반영
    } else {
        alert(result.message); // 실패 메시지 출력
    }
}