let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameover = false;

function drawBoard() {
    const boardElement = document.getElementById('board');
    boardElement.innerHTML = '';
    for (let i = 0; i < board.length; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.innerText = board[i];
        cell.addEventListener('click', () => {
            if (!gameover && board[i] === '') {
                board[i] = currentPlayer;
                drawBoard();
                checkWinner();
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
        boardElement.appendChild(cell);
    }
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];
    for (let combo of winningCombinations) {
        if (board[combo[0]] !== '' && board[combo[0]] === board[combo[1]] && board[combo[1]] === board[combo[2]]) {
            alert(`${currentPlayer} wins!`);
            gameover = true;
            break;
        }
    }
    if (!board.includes('') && !gameover) {
        alert('It\'s a tie!');
        gameover = true;
    }
}

function reset() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameover = false;
    drawBoard();
}

drawBoard();
