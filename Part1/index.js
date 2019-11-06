var board = [];

function play(clickedId) {
  var clickedElement = document.getElementById(clickedId);
  let playerSpan = document.getElementById("player");

  if (playerSpan.innerText === "X") {
    playerSpan.innerText = "O";
    clickedElement.innerText = "X";
    board[clickedId] = "X";
  } else {
    playerSpan.innerText = "X";
    clickedElement.innerText = "O";
    board[clickedId] = "O";
  } 
  console.log(board);

  const t1 = board[0];
  const t2 = board[1];
  const t3 = board[2];
  const m1 = board[3];
  const m2 = board[4];
  const m3 = board[5];
  const b1 = board[6];
  const b2 = board[7];
  const b3 = board[8];

  if (t1 !== undefined && t1 === t2 && t1 === t3) {
    alert(`${t1} is the winner!`);
    return;
  }
  if (m1 !== undefined && m1 === m2 && m1 === m3) {
    alert(`${m1} is the winner!`);
    return;
  }
  if (b1 !== undefined && b1 === b2 && b1 === b3) {
    alert(`${b1} is the winner!`);
    return;
  }
  if (t1 !== undefined && t1 === m1 && t1 === b1) {
    alert(`${t1} is the winner!`);
    return;
  }
  if (t2 !== undefined && t2 === m2 && t2 === b2) {
    alert(`${t2} is the winner!`);
    return;
  }
  if (t3 !== undefined && t3 === m3 && t3 === b3) {
    alert(`${t3} is the winner!`);
    return;
  }
  if (t1 !== undefined && t1 === m2 && t1 === b3) {
    alert(`${t1} is the winner!`);
    return;
  }

  // if( t1 !== undefined && t1 === m1 && t1 === b1){
  //     alert('${t1} is the winner!');
  //     return;
  // }
  if (t3 !== undefined && t3 === m2 && t3 === b1) {
    alert(`${t3} is the winner!`);
    return;
  }
  let boardFull = true;
  for (let i = 0; i <= 8; i++) {
    if (board[i] === undefined) {
      boardFull = false;
    }
  }

  if (boardFull === true) {
    alert("Cat's Game!");
  }
}

// function resetGame() {
//   var allRows =  document.getElementsByClassName('.row');
//   allRows.innerText = undefined;
  
// }

