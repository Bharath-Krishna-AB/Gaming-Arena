function SelectCharacter (num){

var firstImg
var SecondImg

var CharacterSection = document.querySelector('.Wrapper')
var PlayArea = document.querySelector('.content-container')

var  BirdArrPosition = num

var BirdArr = [
    {
        bird1: '/Assets/1skin.png',
        bird2: '/Assets/1skin-2.png'
    },
    {
        bird1: '/Assets/2skin.png',
        bird2: '/Assets/2skin-2.png'
    },
    {
        bird1: '/Assets/3skin.png',
        bird2: '/Assets/3skin-2.png'
    },
    {
        bird1: '/Assets/4skin.png',
        bird2: '/Assets/4skin-2.png'
    },
    {
        bird1: '/Assets/5skin.png',
        bird2: '/Assets/5skin-2.png'
    },
    {
        bird1: '/Assets/6skin.png',
        bird2: '/Assets/6skin-2.png'
    },
    {
        bird1: '/Assets/7skin.png',
        bird2: '/Assets/7skin-2.png'
    },
    {
        bird1: '/Assets/8skin.png',
        bird2: '/Assets/8skin-2.png'
    },
]





     CharacterSection.style.display = 'none'
     PlayArea.classList.remove('content-container')




let move_speed = 3, grativy = 0.5;
let bird = document.querySelector('.flappy-bird');
let img = document.getElementById('bird-1');
let sound_point = new Audio('/SoundEffect/point.mp3');
let sound_die = new Audio('/SoundEffect/die.mp3');

// getting bird element properties
let bird_props = bird.getBoundingClientRect();

// This method returns DOMReact -> top, right, bottom, left, x, y, width and height
let background = document.querySelector('.flappy-background').getBoundingClientRect();

let score_val = document.querySelector('.flappy-score_val');
let message = document.querySelector('.flappy-message');
let score_title = document.querySelector('.flappy-score_title');

console.log(BirdArr[BirdArrPosition]);
    img.src = `${BirdArr[BirdArrPosition].bird1}`



let game_state = 'Start';
img.style.display = 'none';
message.classList.add('flappy-messageStyle');


document.addEventListener('keydown', (e) => {
    
    if(e.key == 'Enter' && game_state != 'Play'){
        document.querySelectorAll('.pipe_sprite').forEach((e) => {
            e.remove();
        });
        
        img.style.display = 'block';
        bird.style.top = '40vh';
        game_state = 'Play';
        message.innerHTML = '';
        score_title.innerHTML = 'Score : ';
        score_val.innerHTML = '0';
        message.classList.remove('flappy-messageStyle');
        play();
    }
});

function play(){
    function move(){
        if(game_state != 'Play') return;

        let pipe_sprite = document.querySelectorAll('.pipe_sprite');
        pipe_sprite.forEach((element) => {
            let pipe_sprite_props = element.getBoundingClientRect();
            bird_props = bird.getBoundingClientRect();

            if(pipe_sprite_props.right <= 0){
                element.remove();
            }else{
                if(bird_props.left < pipe_sprite_props.left + pipe_sprite_props.width && bird_props.left + bird_props.width > pipe_sprite_props.left && bird_props.top < pipe_sprite_props.top + pipe_sprite_props.height && bird_props.top + bird_props.height > pipe_sprite_props.top){
                    game_state = 'End';
                    message.innerHTML = 'Game Over'.fontcolor('red') + '<br>Press Enter To Restart';
                    message.classList.add('flappy-messageStyle');
                    img.style.display = 'none';
                    sound_die.play();
                    console.log(hello);
                    return;
                }else{
                    if(pipe_sprite_props.right < bird_props.left && pipe_sprite_props.right + move_speed >= bird_props.left && element.increase_score == '1'){
                        score_val.innerHTML =+ score_val.innerHTML + 1;
                        sound_point.play();
                    }
                    element.style.left = pipe_sprite_props.left - move_speed + 'px';
                }
            }
        });
        requestAnimationFrame(move);
    }
    requestAnimationFrame(move);

    let bird_dy = 0;
    function apply_gravity(){
        if(game_state != 'Play') return;
        bird_dy = bird_dy + grativy;
        document.addEventListener('keydown', (e) => {
            if(e.key == 'ArrowUp' || e.key == ' '){
                img.src = `${BirdArr[BirdArrPosition].bird2}`;
                bird_dy = -7.6;
            }
        });

        document.addEventListener('keyup', (e) => {
            if(e.key == 'ArrowUp' || e.key == ' '){
                img.src = `${BirdArr[BirdArrPosition].bird1}`;
            }
        });

        if(bird_props.top <= 0 || bird_props.bottom >= background.bottom){
            game_state = 'End';
            message.style.left = '28vw';
            window.location.reload();
            message.classList.remove('flappy-messageStyle');
            return;
        }
        bird.style.top = bird_props.top + bird_dy + 'px';
        bird_props = bird.getBoundingClientRect();
        requestAnimationFrame(apply_gravity);
    }
    requestAnimationFrame(apply_gravity);

    let pipe_seperation = 0;

    let pipe_gap = 25;

    function create_pipe(){
        if(game_state != 'Play') return;

        if(pipe_seperation > 115){
            pipe_seperation = 0;

            let pipe_posi = Math.floor(Math.random() * 43) + 8;
            let pipe_sprite_inv = document.createElement('div');
            pipe_sprite_inv.className = 'pipe_sprite';
            pipe_sprite_inv.style.top = pipe_posi - 70 + 'vh';
            pipe_sprite_inv.style.left = '100vw';

            document.body.appendChild(pipe_sprite_inv);
            let pipe_sprite = document.createElement('div');
            pipe_sprite.className = 'pipe_sprite';
            pipe_sprite.style.top = pipe_posi + pipe_gap + 'vh';
            pipe_sprite.style.left = '100vw';
            pipe_sprite.increase_score = '1';

            document.body.appendChild(pipe_sprite);
        }
        pipe_seperation++;
        requestAnimationFrame(create_pipe);
    }
    requestAnimationFrame(create_pipe);
}


}