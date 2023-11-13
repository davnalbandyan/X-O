
const board = Array(9).fill(null);
let player = 'X';
let gameOver = false;

const winCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
];

function handleCellClick(index) {
    if (board[index] === null && !gameOver) {
        const cell = document.getElementsByClassName('cell')[index];
        cell.textContent = player;
        board[index] = player;
        checkWinner(player);
        player = player === 'X' ? 'O' : 'X';
    }
}

function checkWinner(player) {
    for (let i = 0; i < winCombinations.length; i++) {
        const [a, b, c] = winCombinations[i];
        if (board[a] === player && board[b] === player && board[c] === player) {
            gameOver = true;
            highlightWinnerCells(a, b, c);
            alert(` ${player}-ը հաղթեց`);
            break;
        }
    }
}

function highlightWinnerCells(a, b, c) {
    const cells = document.getElementsByClassName('cell');
    cells[a].classList.add('winner');
    cells[b].classList.add('winner');
    cells[c].classList.add('winner');
}
