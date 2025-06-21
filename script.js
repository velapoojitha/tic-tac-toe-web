    let board = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = "X";
    let gameActive = true;

    function makeMove(index) {
      if (board[index] === "" && gameActive) {
        board[index] = currentPlayer;
        const cell = document.getElementsByClassName("cell")[index];
        cell.innerText = currentPlayer;
        checkWinner();
        if (gameActive) {
          currentPlayer = currentPlayer === "X" ? "O" : "X";
          document.getElementById("status").innerText = `Player ${currentPlayer}'s Turn`;
        }
      }
    }

    function checkWinner() {
      const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
      ];

      for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          document.getElementById("status").innerText = `🎉 Player ${board[a]} Wins!`;
          highlightWinner(pattern);
          gameActive = false;
          return;
        }
      }

      if (!board.includes("")) {
        document.getElementById("status").innerText = "😐 It's a Draw!";
        gameActive = false;
      }
    }

    function highlightWinner(pattern) {
      pattern.forEach(index => {
        document.getElementsByClassName("cell")[index].classList.add("winner");
      });
    }

    function resetGame() {
      board = ["", "", "", "", "", "", "", "", ""];
      gameActive = true;
      currentPlayer = "X";
      document.getElementById("status").innerText = "Player X's Turn";
      document.querySelectorAll(".cell").forEach(cell => {
        cell.innerText = "";
        cell.classList.remove("winner");
      });
    }
  