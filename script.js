// const playBoard = document.querySelector(".snake-play-board");
// const scoreElement = document.querySelector(".snake-score");
// const highScoreElement = document.querySelector(".snake-high-score");
// const controls = document.querySelectorAll(".controls i");

// let gameOver = false;
// let foodX, foodY;
// let snakeX = 5, snakeY = 5;
// let velocityX = 0, velocityY = 0;
// let snakeBody = [];
// let setIntervalId;
// let score = 0;

// // Getting high score from the local storage
// let highScore = localStorage.getItem("high-score") || 0;
// highScoreElement.innerText = `High Score: ${highScore}`;

// const updateFoodPosition = () => {
//     // Passing a random 1 - 30 value as food position
//     foodX = Math.floor(Math.random() * 30) + 1;
//     foodY = Math.floor(Math.random() * 30) + 1;
// }

// const handleGameOver = () => {
//     // Clearing the timer and reloading the page on game over
//     clearInterval(setIntervalId);
//     alert("Game Over! Press OK to replay...");
//     location.reload();
// }

// const changeDirection = e => {
//     // Changing velocity value based on key press
//     if(e.key === "ArrowUp" && velocityY != 1) {
//         velocityX = 0;
//         velocityY = -1;
//     } else if(e.key === "ArrowDown" && velocityY != -1) {
//         velocityX = 0;
//         velocityY = 1;
//     } else if(e.key === "ArrowLeft" && velocityX != 1) {
//         velocityX = -1;
//         velocityY = 0;
//     } else if(e.key === "ArrowRight" && velocityX != -1) {
//         velocityX = 1;
//         velocityY = 0;
//     }
// }

// // Calling changeDirection on each key click and passing key dataset value as an object
// controls.forEach(button => button.addEventListener("click", () => changeDirection({ key: button.dataset.key })));

// const initGame = () => {
//     if(gameOver) return handleGameOver();
//     let html = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;

//     // Checking if the snake hit the food
//     if(snakeX === foodX && snakeY === foodY) {
//         updateFoodPosition();
//         snakeBody.push([foodY, foodX]); // Pushing food position to snake body array
//         score++; // increment score by 1
//         highScore = score >= highScore ? score : highScore;
//         localStorage.setItem("high-score", highScore);
//         scoreElement.innerText = `Score: ${score}`;
//         highScoreElement.innerText = `High Score: ${highScore}`;
//     }
//     // Updating the snake's head position based on the current velocity
//     snakeX += velocityX;
//     snakeY += velocityY;
    
//     // Shifting forward the values of the elements in the snake body by one
//     for (let i = snakeBody.length - 1; i > 0; i--) {
//         snakeBody[i] = snakeBody[i - 1];
//     }
//     snakeBody[0] = [snakeX, snakeY]; // Setting first element of snake body to current snake position

//     // Checking if the snake's head is out of wall, if so setting gameOver to true
//     if(snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
//         return gameOver = true;
//     }

//     for (let i = 0; i < snakeBody.length; i++) {
//         // Adding a div for each part of the snake's body
//         html += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
//         // Checking if the snake head hit the body, if so set gameOver to true
//         if (i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]) {
//             gameOver = true;
//         }
//     }
//     playBoard.innerHTML = html;
// }

// updateFoodPosition();
// setIntervalId = setInterval(initGame, 100);
// document.addEventListener("keyup", changeDirection);



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




// XOX