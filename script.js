//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
    const playerInput = document.getElementById("player-input");
    const gameBoard = document.getElementById("game");
    const player1Input = document.getElementById("player-1");
    const player2Input = document.getElementById("player-2");
    const submitBtn = document.getElementById("submit");
    const resetBtn = document.getElementById("reset");
    const messageBox = document.querySelector(".message");
    const cells = document.querySelectorAll(".cell");

    let currentPlayer, player1, player2, moves;

    function startGame() {
        player1 = player1Input.value.trim() || "Player 1";
        player2 = player2Input.value.trim() || "Player 2";
        currentPlayer = player1;
        moves = Array(9).fill(null);

        playerInput.style.display = "none";
        gameBoard.style.display = "block";
        messageBox.innerText = `${currentPlayer}, you're up!`;
    }

    function checkWinner() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]  // Diagonals
        ];

        for (let pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (moves[a] && moves[a] === moves[b] && moves[a] === moves[c]) {
                messageBox.innerText = `${currentPlayer} Congratulations, you won!`;
                cells.forEach(cell => cell.classList.add("taken"));
                return true;
            }
