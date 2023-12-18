


var threeHands = {paper: "/Assets/rockpaperscissors/Paper.png",scissors: "/Assets/rockpaperscissors/Scissors.png",rock: "/Assets/rockpaperscissors/Rock.png"}
var RPS_score= 0

console.log(threeHands);

function pickUserHand(userInp){
console.log(userInp);

//hiding hands page

var hideHands =document.querySelector('.RPS-hands')
hideHands.style.display = 'none'

//showing contest page

var showResult = document.querySelector('.RPS-contest')
showResult.style.display = 'flex'

//setting img src according to user picks

var userhand =document.getElementById('userPickImage')
if(userInp == 'paper'){
    console.log(threeHands.paper);
    userhand.src = `${threeHands.paper}`    

}else if(userInp == 'scissors'){

    userhand.src = `${threeHands.scissors}`    
    
}else if(userInp == 'rock'){

    userhand.src = `${threeHands.rock}`    
    
}

//picked computer choice randomly

let threeOpts = ['paper','scissors','rock']
let cpRandom= threeOpts[Math.floor(Math.random() * threeOpts.length)]



//setting img src according to computer picks

var computerhand = document.getElementById('computerPickImage')

 if(cpRandom == 'paper'){

    computerhand.src = `${threeHands.paper}`    

}else if(cpRandom == 'scissors'){

    computerhand.src = `${threeHands.scissors}`    
    
}else if(cpRandom == 'rock'){

    computerhand.src = `${threeHands.rock}`    
    
}

//setting user Wins or tie in h1 tag

var decision =document.querySelector('.RPS-decision h1')

if(userInp == cpRandom){
    decision.innerText = "ITS A TIE!"
}else if(userInp=='paper' && cpRandom=='rock') {
    decision.innerText = "YOU WIN!"
    RPS_score++
}else if(userInp=='rock' && cpRandom=='paper') {
    decision.innerText = "COMPUTER WIN!"
}else if(userInp=='scissors' && cpRandom=='paper') {
    decision.innerText = "YOU WIN!"
    RPS_score++
}else if(userInp=='paper' && cpRandom=='scissors') {
    decision.innerText = "COMPUTER WIN!"
}else if(userInp=='scissors' && cpRandom=='rock') {
    decision.innerText = "COMPUTER WIN!"
}else if(userInp=='rock' && cpRandom=='scissors') {
    decision.innerText = "YOU WIN!"
    RPS_score++
}

//updating score

var updatingScore=document.querySelector('.RPS-score h1')

updatingScore.innerText=`${RPS_score}`


}

function restartGame(){
    
//showing hands page

var hideHands =document.querySelector('.RPS-hands')
hideHands.style.display = 'flex'

//hiding contest page

var showResult = document.querySelector('.RPS-contest')
showResult.style.display = 'none'

console.log(score);
}