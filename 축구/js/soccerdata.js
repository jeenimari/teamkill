/*1. localStorag에 게시물 배열 정보 불러오기 함수 */
function getBoardList(){
    let boardList = localStorage.getItem('boardList');  // localStorage 에 게시물 배열 정보 요청
    if( boardList == null ){ // 만약에 localStroage에 게시물 배열 이 비어있으면
        boardList = [];  //  빈배열 대입 해주고 
    }else{  
        boardList = JSON.parse( boardList ); // JSON(JS객체) 로 변환해서 대입
    }
    return boardList; // 현재 함수를 호출했던곳으로 게시물 배열을 반환/준다.
} 
/*2. localStorage에 게시물 배열 정보 저장 함수 */
function setBoardList( boardList ){
    localStorage.setItem( 
        'boardList' ,  // key
        JSON.stringify( boardList) ); // value 
} 
/* 3. localStorage에 특정한 게시물 1개 불러오기 함수 */
function getBoard( bno ){  // 조회할 게시물번호를 매개변수로 지정
    // 게시물 배열 요청
    let boardList = getBoardList();
    // 조회할 게시물번호 찾기
    for( let index = 0 ; index<=boardList.length-1 ; index++ ){
        if( boardList[index].bno == bno ){ //만약에 index번째의 게시물의번호 와 조회할번호 와 같으면 
            return boardList[index]; // 찾은 게시물 객체 반환
        }
    } 
    return null; // 조회할 게시물번호와 일치한 게시물 객체  못찾음
} 

/* 5. 게시물 삭제 함수 (비밀번호 확인 포함) */
function deleteBoard(bno, inputPassword) {
    // 1. 게시물 목록 가져오기
    let boardList = getBoardList();
    // 2. 게시물 목록에서 삭제할 게시물 찾기
    let deleteIndex = -1;

    for (let index = 0; index <= boardList.length - 1; index++) {
        if (boardList[index].bno == bno) {
            // 3. 비밀번호 확인
            if (boardList[index].password === inputPassword) {
                deleteIndex = index;
                break;
            } else {
                return { success: false, message: "비밀번호가 일치하지 않습니다." };
            }
        }
    }

    // 4. 삭제 인덱스가 유효하면 삭제 수행
    if (deleteIndex !== -1) {
        boardList.splice(deleteIndex, 1);
        setBoardList(boardList); // localStorage 업데이트
        return { success: true, message: "게시물이 삭제되었습니다." };
    }

    return { success: false, message: "게시물을 찾을 수 없습니다." };
}

/* 6. 게시물 수정 함수 (비밀번호 확인 포함) */
function updateBoard(bno, inputPassword, updatedBoard) {
    // 1. 게시물 목록 가져오기
    let boardList = getBoardList();
    // 2. 수정할 게시물 찾기
    for (let index = 0; index <= boardList.length - 1; index++) {
        if (boardList[index].bno == bno) {
            // 3. 비밀번호 확인
            if (boardList[index].password === inputPassword) {
                // 4. 게시물 업데이트
                boardList[index] = { ...boardList[index], ...updatedBoard }; // 기존 데이터에 수정 사항 반영
                setBoardList(boardList); // localStorage 업데이트
                return { success: true, message: "게시물이 수정되었습니다." };
            } else {
                return { success: false, message: "비밀번호가 일치하지 않습니다." };
            }
        }
    }

    return { success: false, message: "게시물을 찾을 수 없습니다." };
}