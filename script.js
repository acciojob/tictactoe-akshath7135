//your JS code here. If required.
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
        player1 = document.getElementById("player-1").value || "Player 1";
        player2 = document.getElementById("player-2").value || "Player 2";
        
        if (player1.trim() === "" || player2.trim() === "") {
            alert("Please enter names for both players.");
            return;
        }

        currentPlayer = player1; // Start with player1
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
                messageDiv.text
