
/* localStorage에 배열정보 불러오기 함수 */
function getBoardList(){

    // 1. localStorage 배열 정보 요청 , key
   let boardList = localStorage.getItem('boardList')
   if (boardList == null){ //2. 만약에 localStrage가 비어있으면
        boardList = []; // 3. 빈배열 대입해주고
   }else { // 있으면면
        boardList = JSON.parse(boardList); // 4. JSON(JS객체)로 변환해서 대입
   }
   console.log(boardList);
   
   return boardList; //5. 현재 함수를 호출했던곳으로 게시물 배열을 반환해준다.

}//f end


//2. locastorage에 게시물 배열정보를 저장하는 함수로 사용
function setBoardList(boardList){
    localStorage.setItem('boardList' , JSON.stringify( boardList));
                    //이거 boadList 로 되있어서 오류뜸 

    //로컬 스토리지에 저장한다(key 'boardList'로 , JSON.stringify-> 문자열로 저장하는 명령어,  가로안은 저장할 value -> ( boardList))
    //로컬스토리지에는 문자열로만 저장할 수 있기때문에 JSON,stringify를 쓴것것
    


}

/* 3. localStorage에 특정한 게시물 1개개 불러오기 함수 */

function getBoard(bno){
     // 조회할 게시물 번호를 매개변수로 지정

     //1. 게시물 배열 요청
     let  boardList = getBoardList();

     //2. 조회할 게시물 번호 찾기
     for (let index = 0; index <= boardList.length; index++) {
          
          if(boardList[index].bno == bno){
               return boardList[index];
          }
          
     }//for end

     return null; //조회할 게시물번호와 일치한 게시물 객체 못찾았을때는 null
}

function delitPut( bno ){ // 매개변수 , 삭제할 인덱스 번호 
     // console.log( '삭제함수 실행' );
      //console.log( index )
      //게시물목록.splice( index , 1 ); 
     // 출력함수();
  
      // 1. 삭제할 bno의 인덱스를 찾기
     let boardList = getBoardList();
      //2. 게시물 목록에서 삭제할 번호의 인덱스 찾는것것
      let deleteIndex = -1;
      for( let index = 0; index <= boardList.length-1; index++){
          if(boardList[index].bno == bno){
              deleteIndex = index;
              break;
          }
      }
      //3. 삭제할 번호의 게시물 인덱스를 게시물 목록에서 삭제제
      boardList.splice(deleteIndex,1);
      //4. localStorage 업데이트
      setBoardList(boardList);
      //5. 알림
      alert("삭제완료.");
      location.href="board.html"
  
  }// f end

  function corRection(bno){

     let boadList = getBoardList();

     for(let index = 0; index <= boadList.length-1; index++){
          if(boadList[index].bno == bno){
               if(boadList[index].password == ) //  변경함수의 password 변수를 view에서 받을지 고민중
          }
     }// for end

     


  }//f end
