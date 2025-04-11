//your JS code here. If required.
let currentPlayer = 1;
let player1, player2;
let board = ['', '', '', '', '', '', '', '', ''];
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

document.getElementById('submit').addEventListener('click', function() {
    player1 = document.getElementById('player-1').value;
    player2 = document.getElementById('player-2').value;

    if (player1 && player2) {
        document.querySelector('.player-input').style.display = 'none';
        document.querySelector('.game').style.display = 'block';
        document.querySelector('.message').textContent = `${player1}, you're up!`;
    }
});

document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', function() {
        const cellIndex = this.id - 1;

        if (board[cellIndex] === '' && !checkWinner()) {
            board[cellIndex] = currentPlayer === 1 ? 'X' : 'O';
            this.textContent = board[cellIndex];
            if (checkWinner()) {
                document.querySelector('.message').textContent = `${currentPlayer === 1 ? player1 : player2}, congratulations you won!`;
            } else {
                currentPlayer = currentPlayer === 1 ? 2 : 1;
                document.querySelector('.message').textContent = `${currentPlayer === 1 ? player