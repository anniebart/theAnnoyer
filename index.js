const sprite = document.querySelector('.fly');

const boo = document.querySelector('h1')

document.addEventListener('mousemove', function(e){
    console.log('mouse moved!');
let mouseX = e.clientX;
let mouseY = e.clientY;
console.log(mouseX);
sprite.style.left = parseInt(mouseX) + "px";
sprite.style.top = parseInt(mouseY) + "px";
})


const fly =document.querySelector('#fly');
const ghost = document.querySelector('#ghost');
const plane = document.querySelector('#airplane');


fly.addEventListener('click', ()=>{
    sprite.src = 'fly.png';
    sprite.style.height = 100 + 'px'
})

ghost.addEventListener('click', ()=>{
    sprite.src = 'ghost.png'
    sprite.style.height = 200 + 'px';
})

plane.addEventListener('click', ()=>{
    sprite.src = 'airplane.png'
    sprite.style.height = 300 + 'px';
})