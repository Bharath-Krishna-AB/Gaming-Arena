const playBoard = document.querySelector(".snake-play-board");
const scoreElement = document.querySelector(".snake-score");
const highScoreElement = document.querySelector(".snake-high-score");
const controls = document.querySelectorAll(".controls i");
let snake_move = new Audio('SoundEffect/move.mp3')
let snake_gameOver = new Audio('SoundEffect/gameover.mp3')
let snake_food = new Audio('SoundEffect/food.mp3')

let gameOver = false;
let foodX, foodY;
let snakeX = 5, snakeY = 5;
let velocityX = 0, velocityY = 0;
let snakeBody = [];
let setIntervalId;
let score = 0;
let FoodColorArr = ["#FF003D","blue","yellow","green","orange"]

var FoodColor = Math.floor(Math.random() * FoodColorArr.length)


// Getting high score from the local storage
let highScore = localStorage.getItem("high-score") || 0;
highScoreElement.innerText = `High Score: ${highScore}`;

const updateFoodPosition = () => {
    // Passing a random 1 - 30 value as food position
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}

const handleGameOver = () => {
    // Clearing the timer and reloading the page on game 
    clearInterval(setIntervalId);
    alert("Game Over! Press OK to replay...");
    location.reload();
}

const changeDirection = e => {
    snake_move.play()
    // Changing velocity value based on key press
    if(e.key === "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    } else if(e.key === "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    } else if(e.key === "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    } else if(e.key === "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
}

// Calling changeDirection on each key click and passing key dataset value as an object
controls.forEach(button => button.addEventListener("click", () => changeDirection({ key: button.dataset.key })));

const initGame = () => {
    if(gameOver) return handleGameOver();
    let html = `<div class="food" style="grid-area: ${foodY} / ${foodX} ; background: ${FoodColorArr[FoodColor]}"></div>`;

    // Checking if the snake hit the food
    if(snakeX === foodX && snakeY === foodY) {
        snake_food.play()
        updateFoodPosition();
        snakeBody.push([foodY, foodX]); // Pushing food position to snake body array
        score++; // increment score by 1
        highScore = score >= highScore ? score : highScore;
        localStorage.setItem("high-score", highScore);
        scoreElement.innerText = `Score: ${score}`;
        highScoreElement.innerText = `High Score: ${highScore}`;
        FoodColor = Math.floor(Math.random() * FoodColorArr.length)
    }
    // Updating the snake's head position based on the current velocity
    snakeX += velocityX;
    snakeY += velocityY;
    
    // Shifting forward the values of the elements in the snake body by one
    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }
    snakeBody[0] = [snakeX, snakeY]; // Setting first element of snake body to current snake position

    // Checking if the snake's head is out of wall, if so setting gameOver to true
    if(snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
        snake_gameOver.play()
        return gameOver = true;
    }

    for (let i = 0; i < snakeBody.length; i++) {
        // Adding a div for each part of the snake's body
        if(i===0){
        html += `<div class="firstHead" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
        }else{
        html += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
        }
        // Checking if the snake head hit the body, if so set gameOver to true
        if (i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]) {
            snake_gameOver.play()
            gameOver = true;
        }
    }
    playBoard.innerHTML = html;
}

updateFoodPosition();
setIntervalId = setInterval(initGame, 100);
document.addEventListener("keyup", changeDirection);



// ROCK PAPER SCISSOR



// var threeHands = {paper: "./Assets/rockpaperscissors/Paper.png",scissors: "./Assets/rockpaperscissors/Scissors.png",rock: "./Assets/rockpaperscissors/Rock.png"}
// var RPS_score= 0

// console.log(threeHands);

// function pickUserHand(userInp){
// console.log(userInp);

// //hiding hands page

// var hideHands =document.querySelector('.RPS-hands')
// hideHands.style.display = 'none'

// //showing contest page

// var showResult = document.querySelector('.RPS-contest')
// showResult.style.display = 'flex'

// //setting img src according to user picks

// var userhand =document.getElementById('userPickImage')
// if(userInp == 'paper'){
//     console.log(threeHands.paper);
//     userhand.src = `${threeHands.paper}`    

// }else if(userInp == 'scissors'){

//     userhand.src = `${threeHands.scissors}`    
    
// }else if(userInp == 'rock'){

//     userhand.src = `${threeHands.rock}`    
    
// }

// //picked computer choice randomly

// let threeOpts = ['paper','scissors','rock']
// let cpRandom= threeOpts[Math.floor(Math.random() * threeOpts.length)]



// //setting img src according to computer picks

// var computerhand = document.getElementById('computerPickImage')

//  if(cpRandom == 'paper'){

//     computerhand.src = `${threeHands.paper}`    

// }else if(cpRandom == 'scissors'){

//     computerhand.src = `${threeHands.scissors}`    
    
// }else if(cpRandom == 'rock'){

//     computerhand.src = `${threeHands.rock}`    
    
// }

// //setting user Wins or tie in h1 tag

// var decision =document.querySelector('.RPS-decision h1')

// if(userInp == cpRandom){
//     decision.innerText = "ITS A TIE!"
// }else if(userInp=='paper' && cpRandom=='rock') {
//     decision.innerText = "YOU WIN!"
//     score++
// }else if(userInp=='rock' && cpRandom=='paper') {
//     decision.innerText = "COMPUTER WIN!"
// }else if(userInp=='scissors' && cpRandom=='paper') {
//     decision.innerText = "YOU WIN!"
//     score++
// }else if(userInp=='paper' && cpRandom=='scissors') {
//     decision.innerText = "COMPUTER WIN!"
// }else if(userInp=='scissors' && cpRandom=='rock') {
//     decision.innerText = "COMPUTER WIN!"
// }else if(userInp=='rock' && cpRandom=='scissors') {
//     decision.innerText = "YOU WIN!"
//     score++
// }

// //updating score

// var updatingScore=document.querySelector('.RPS-score h1')

// updatingScore.innerText=`${score}`


// }

// function restartGame(){
    
// //showing hands page

// var hideHands =document.querySelector('.RPS-hands')
// hideHands.style.display = 'flex'

// //hiding contest page

// var showResult = document.querySelector('.RPS-contest')
// showResult.style.display = 'none'

// console.log(score);
// }




// FLAPPY BIRD


// let move_speed = 3, grativy = 0.5;
// let bird = document.querySelector('.flappy-bird');
// let img = document.getElementById('bird-1');
// let sound_point = new Audio('SoundEffect/point.mp3');
// let sound_die = new Audio('SoundEffect/die.mp3');

// // getting bird element properties
// let bird_props = bird.getBoundingClientRect();

// // This method returns DOMReact -> top, right, bottom, left, x, y, width and height
// let background = document.querySelector('.flappy-background').getBoundingClientRect();

// let score_val = document.querySelector('.flappy-score_val');
// let message = document.querySelector('.flappy-message');
// let score_title = document.querySelector('.flappy-score_title');

// let game_state = 'Start';
// img.style.display = 'none';
// message.classList.add('flappy-messageStyle');

// document.addEventListener('keydown', (e) => {
    
//     if(e.key == 'Enter' && game_state != 'Play'){
//         document.querySelectorAll('.pipe_sprite').forEach((e) => {
//             e.remove();
//         });
        
//         img.style.display = 'block';
//         bird.style.top = '40vh';
//         game_state = 'Play';
//         message.innerHTML = '';
//         score_title.innerHTML = 'Score : ';
//         score_val.innerHTML = '0';
//         message.classList.remove('flappy-messageStyle');
//         play();
//     }
// });

// function play(){
//     function move(){
//         if(game_state != 'Play') return;

//         let pipe_sprite = document.querySelectorAll('.pipe_sprite');
//         pipe_sprite.forEach((element) => {
//             let pipe_sprite_props = element.getBoundingClientRect();
//             bird_props = bird.getBoundingClientRect();

//             if(pipe_sprite_props.right <= 0){
//                 element.remove();
//             }else{
//                 if(bird_props.left < pipe_sprite_props.left + pipe_sprite_props.width && bird_props.left + bird_props.width > pipe_sprite_props.left && bird_props.top < pipe_sprite_props.top + pipe_sprite_props.height && bird_props.top + bird_props.height > pipe_sprite_props.top){
//                     game_state = 'End';
//                     message.innerHTML = 'Game Over'.fontcolor('red') + '<br>Press Enter To Restart';
//                     message.classList.add('flappy-messageStyle');
//                     img.style.display = 'none';
//                     sound_die.play();
//                     console.log(hello);
//                     return;
//                 }else{
//                     if(pipe_sprite_props.right < bird_props.left && pipe_sprite_props.right + move_speed >= bird_props.left && element.increase_score == '1'){
//                         score_val.innerHTML =+ score_val.innerHTML + 1;
//                         sound_point.play();
//                     }
//                     element.style.left = pipe_sprite_props.left - move_speed + 'px';
//                 }
//             }
//         });
//         requestAnimationFrame(move);
//     }
//     requestAnimationFrame(move);

//     let bird_dy = 0;
//     function apply_gravity(){
//         if(game_state != 'Play') return;
//         bird_dy = bird_dy + grativy;
//         document.addEventListener('keydown', (e) => {
//             if(e.key == 'ArrowUp' || e.key == ' '){
//                 img.src = 'Assets/Bird-2.png';
//                 bird_dy = -7.6;
//             }
//         });

//         document.addEventListener('keyup', (e) => {
//             if(e.key == 'ArrowUp' || e.key == ' '){
//                 img.src = 'Assets/Bird.png';
//             }
//         });

//         if(bird_props.top <= 0 || bird_props.bottom >= background.bottom){
//             game_state = 'End';
//             message.style.left = '28vw';
//             window.location.reload();
//             message.classList.remove('flappy-messageStyle');
//             return;
//         }
//         bird.style.top = bird_props.top + bird_dy + 'px';
//         bird_props = bird.getBoundingClientRect();
//         requestAnimationFrame(apply_gravity);
//     }
//     requestAnimationFrame(apply_gravity);

//     let pipe_seperation = 0;

//     let pipe_gap = 25;

//     function create_pipe(){
//         if(game_state != 'Play') return;

//         if(pipe_seperation > 115){
//             pipe_seperation = 0;

//             let pipe_posi = Math.floor(Math.random() * 43) + 8;
//             let pipe_sprite_inv = document.createElement('div');
//             pipe_sprite_inv.className = 'pipe_sprite';
//             pipe_sprite_inv.style.top = pipe_posi - 70 + 'vh';
//             pipe_sprite_inv.style.left = '100vw';

//             document.body.appendChild(pipe_sprite_inv);
//             let pipe_sprite = document.createElement('div');
//             pipe_sprite.className = 'pipe_sprite';
//             pipe_sprite.style.top = pipe_posi + pipe_gap + 'vh';
//             pipe_sprite.style.left = '100vw';
//             pipe_sprite.increase_score = '1';

//             document.body.appendChild(pipe_sprite);
//         }
//         pipe_seperation++;
//         requestAnimationFrame(create_pipe);
//     }
//     requestAnimationFrame(create_pipe);
// }




// TIC TAC TOE



// let btnRef = document.querySelectorAll(".TTT-button-option");
// let popupRef = document.querySelector(".TTT-popup");
// let newgameBtn = document.getElementById("TTT-new-game");
// let restartBtn = document.getElementById("TTT-restart");
// let msgRef = document.getElementById("TTT-message");
// //Winning Pattern Array
// let winningPattern = [
//   [0, 1, 2],
//   [0, 3, 6],
//   [2, 5, 8],
//   [6, 7, 8],
//   [3, 4, 5],
//   [1, 4, 7],
//   [0, 4, 8],
//   [2, 4, 6],
// ];
// //Player 'X' plays first
// let xTurn = true;
// let count = 0;
// //Disable All Buttons
// const disableButtons = () => {
//   btnRef.forEach((element) => (element.disabled = true));
//   //enable popup
//   popupRef.classList.remove("TTT-hide");
// };
// //Enable all buttons (For New Game and Restart)
// const enableButtons = () => {
//   btnRef.forEach((element) => {
//     element.innerText = "";
//     element.disabled = false;
//   });
//   //disable popup
//   popupRef.classList.add("TTT-hide");
// };
// //This function is executed when a player wins
// const winFunction = (letter) => {
//   disableButtons();
//   if (letter == "X") {
//     msgRef.innerHTML = "&#x1F389; <br> 'X' Wins";
//   } else {
//     msgRef.innerHTML = "&#x1F389; <br> 'O' Wins";
//   }
// };
// //Function for draw
// const drawFunction = () => {
//   disableButtons();
//   msgRef.innerHTML = "&#x1F60E; <br> It's a Draw";
// };
// //New Game
// newgameBtn.addEventListener("click", () => {
//   count = 0;
//   enableButtons();
// });
// restartBtn.addEventListener("click", () => {
//   count = 0;
//   enableButtons();
// });
// //Win Logic
// const winChecker = () => {
//   //Loop through all win patterns
//   for (let i of winningPattern) {
//     let [element1, element2, element3] = [
//       btnRef[i[0]].innerText,
//       btnRef[i[1]].innerText,
//       btnRef[i[2]].innerText,
//     ];
//     //Check if elements are filled
//     //If 3 empty elements are same and would give win as would
//     if (element1 != "" && (element2 != "") & (element3 != "")) {
//       if (element1 == element2 && element2 == element3) {
//         //If all 3 buttons have same values then pass the value to winFunction
//         winFunction(element1);
//       }
//     }
//   }
// };
// //Display X/O on click
// btnRef.forEach((element) => {
//   element.addEventListener("click", () => {
//     if (xTurn) {
//       xTurn = false;
//       //Display X
//       element.innerText = "X";
//       element.disabled = true;
//     } else {
//       xTurn = true;
//       //Display Y
//       element.innerText = "O";
//       element.disabled = true;
//     }
//     //Increment count on each click
//     count += 1;
//     if (count == 9) {
//       drawFunction();
//     }
//     //Check for win on every click
//     winChecker();
//   });
// });
// //Enable Buttons and disable popup on page load
// window.onload = enableButtons;