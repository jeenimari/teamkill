const boardSize = 15;
let currentPlayer = 'x'; // 'x' 플레이어가 먼저 시작
let board = Array.from({ length: boardSize }, () => Array(boardSize).fill(null));

const gameBoard = document.getElementById('game-board');

// 보드 렌더링
function renderBoard() {
    gameBoard.innerHTML = '';
    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            if (board[row][col] === 'x') {
                cell.classList.add('x');
            } else if (board[row][col] === 'o') {
                cell.classList.add('o');
            }
            cell.addEventListener('click', () => handleCellClick(row, col));
            gameBoard.appendChild(cell);
        }
    }
}

// 셀 클릭 시 처리
function handleCellClick(row, col) {
    if (board[row][col] !== null) return; // 이미 돌이 놓인 자리면 클릭 불가
    board[row][col] = currentPlayer;
    renderBoard();
    
    if (checkWin(row, col)) {
        alert(`${currentPlayer === 'x' ? '흑' : '백'} 승리!`);
        resetBoard();
        return;
    }

    currentPlayer = currentPlayer === 'x' ? 'o' : 'x'; // 턴 변경
}

// 승리 조건 확인
function checkWin(row, col) {
    return (
        checkDirection(row, col, 1, 0) || // 가로
        checkDirection(row, col, 0, 1) || // 세로
        checkDirection(row, col, 1, 1) || // 대각선 /
        checkDirection(row, col, 1, -1)   // 대각선 \
    );
}

// 한 방향으로 5개 연속된 돌이 있는지 확인
function checkDirection(row, col, dRow, dCol) {
    let count = 1;

    // 앞쪽 방향 확인
    for (let i = 1; i < 5; i++) {
        const newRow = row + dRow * i;
        const newCol = col + dCol * i;
        if (newRow < 0 || newRow >= boardSize || newCol < 0 || newCol >= boardSize || board[newRow][newCol] !== currentPlayer) break;
        count++;
    }

    // 뒤쪽 방향 확인
    for (let i = 1; i < 5; i++) {
        const newRow = row - dRow * i;
        const newCol = col - dCol * i;
        if (newRow < 0 || newRow >= boardSize || newCol < 0 || newCol >= boardSize || board[newRow][newCol] !== currentPlayer) break;
        count++;
    }

    return count >= 5;
}

// 게임 초기화
function resetBoard() {
    board = Array.from({ length: boardSize }, () => Array(boardSize).fill(null));
    currentPlayer = 'x';
    renderBoard();
}

// 게임 초기화 버튼
function resetGame() {
    resetBoard();
}

renderBoard();