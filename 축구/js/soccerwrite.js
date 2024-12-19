
function 등록함수( ){  console.log('등록함수 실행');
    let title = document.querySelector('.title').value;     
    let content = document.querySelector('.content').value;   
    let password = document.querySelector('.password').value;  

    let nowDate = new Date()  
    let nowYear = nowDate.getFullYear() 
    let nowMonth = nowDate.getMonth()+1; 
    let nowDay = nowDate.getDate() 
    let date = `${nowYear}-${nowMonth}-${nowDay}`;  
    let view = 0;
    
    let boardList = getBoardList(); // 게시물 배열 호출     
   // 게시물 번호(식별자) , 만약에 게시물 배열이 존재하면 마지막게시물의 번호+1 , 아니면 1(첫게시물)
    let bno = boardList.length != 0 ? 
        boardList[ boardList.length-1 ].bno + 1 : 1
    
    let board = { bno : bno , title : title ,  content : content ,   
        password : password , date : date , view : view   };
    boardList.push( board );
    
    setBoardList( boardList ); // 게시물 배열 상태를 localStorage 등록     
    
    alert('게시물 등록 성공');      
    location.href="soccer.html"; // JS에서 페이지 전환 함수.   

}  