document.addEventListener("DOMContentLoaded", () => {
    const playerForm = document.getElementById("player-form");
    const gameBoard = document.getElementById("game-board");
    const submitBtn = document.getElementById("submit");
    const messageDiv = document.querySelector(".message");
    const cells = document.querySelectorAll(".cell");
    const restartBtn = document.getElementById("restart");

    let player1, player2, currentPlayer, gameActive;
    let boardState = ["", "", "", "", "", "", "", "", ""];

    submitBtn.addEventListener("click", () => {
        player1 = document.getElementById("player-1").value.trim() || "Player 1";
        player2 = document.getElementById("player-2").value.trim() || "Player 2";
        
        if (!player1 || !player2) {
            alert("Please enter names for both players.");
            return;
        }

        currentPlayer = player1;
        gameActive = true;
        playerForm.style.display = "none";
        gameBoard.style.display = "block";
        updateMessage();
    });

    function updateMessage() {
        messageDiv.textContent = `${currentPlayer}, you're up!`;
    }

    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]  // Diagonals
        ];

        for (const combo of winningCombinations) {
            const [a, b, c] = combo;
            if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
                messageDiv.textContent = `${currentPlayer} wins!`;
                gameActive = false;
                restartBtn.style.display = "block";
                return;
            }
        }

        if (!boardState.includes("")) {
            messageDiv.textContent = "It's a draw!";
            gameActive = false;
            restartBtn.style.display = "block";
        }
    }

    function handleCellClick(event) {
        const cellIndex = event.target.id - 1;
        if (!gameActive || boardState[cellIndex]) return;

        boardState[cellIndex] = currentPlayer === player1 ? "X" : "O";
        event.target.textContent = boardState[cellIndex];

        checkWinner();
        currentPlayer = currentPlayer === player1 ? player2 : player1;
        if (gameActive) updateMessage();
    }

    cells.forEach(cell => cell.addEventListener("click", handleCellClick));

    restartBtn.addEventListener("click", () => {
        boardState.fill("");
        cells.forEach(cell => cell.textContent = "");
        gameActive = true;
        restartBtn.style.display = "none";
        currentPlayer = player1;
        updateMessage();
    });
});
