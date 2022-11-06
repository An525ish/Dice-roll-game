const dice = document.querySelector('.dice');
const msg = document.querySelector('.msg');
const btns = document.querySelectorAll('.button');
const score = document.querySelector('.score');
const choice = document.querySelector('.var');

let point = 0;
score.innerHTML = `Score : 0`;
choice.innerHTML = `Selected Variable : 0`
msg.innerText = " Loading! Game will start in a few second..."
setTimeout(() => {
    dice.firstElementChild.setAttribute('src', `assets/dice1.png`)
    msg.innerText = "Click on the Dice 👆"
}, 3000);


let count = 5;
const decCount = ()=>{
    msg.innerText = `You have ${count} second to choose` 
    count--;
    
    let timer = setTimeout(() => {
        decCount();
    }, 1000);

    if(count < 0){
    count = 5;
    clearTimeout(timer);
    msg.innerText = `${text}`;
    }
}

dice.addEventListener('click', ()=>{
    let num = Math.ceil(Math.random()*6);
    dice.firstElementChild.setAttribute('src', `assets/dice.gif`);
    btns.forEach(btn =>{
        btn.classList.remove('btn-background');
    })
    text = "You have 0 second to choose";
    choice.innerHTML = `Selected Variable : 0`
    decCount();
    setTimeout(() => {
        dice.firstElementChild.setAttribute('src', `assets/dice${num}.png`);
        score.innerHTML = `Score : ${point}`;   
    }, 5000);

    btns.forEach(btn => {
        btn.addEventListener('click', function(){
        btns.forEach(btn =>{
            btn.classList.remove('btn-background');
        })  
            this.classList.add('btn-background');
            choice.innerHTML = `Selected Variable : ${btn.innerText}`
           if(btn.innerText == num){
               point = point + 1;
               text = "You guessed it right!";
           }
           else{
            point = point;
            text = "You guessed it wrong";
        }
        })
    })
})




