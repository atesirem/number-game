'use strict';

// console.log( document.querySelector('.message'));

// document.querySelector('.message').textContent = '🎉 Correct Number'; 

let number = Math.round((Math.random()*19)+1);
console.log(number);
let scoreMeter = Number(document.querySelector('.score').textContent); 
let highScore = Number(document.querySelector('.highscore').textContent);


//event listener has 2 parameters, we can add a function as second paramter because function returns a value

document.querySelector('.check').addEventListener('click', function(){
 const guess = Number(document.querySelector('.guess').value);
 console.log(guess);

 //when there is no input
 if(!guess){
     document.querySelector('.message').textContent = '❕ Make a guess ';}
     else if(number != guess){
         if(scoreMeter>1){
            if(number> guess){

                document.querySelector('.message').textContent = ' Opps! Too low 👎🏻      Guess again 🤔 ';
                scoreMeter--;
                document.querySelector('.score').textContent = scoreMeter;
    
             }
             else if( number < guess){
                document.querySelector('.message').textContent = ' Opps! Too high 👎🏻     Guess again 🤔 ';
                scoreMeter--;
                document.querySelector('.score').textContent = scoreMeter;
    
             }
            
         }else{
            document.querySelector('.message').textContent = 'What kind a loser are you 🙄🙄🙄 L O S E R';
            document.querySelector('.score').textContent = 0;         }
    }else{
        //when player wins
    document.querySelector('.message').textContent =
        ' Hello Champ   🎉 🎉 🎉 🎉  You know your job 😉 '  
        document.querySelector('.number').textContent = guess;
        document.querySelector('body').style.backgroundColor ='#26a570';
        document.querySelector('body').style.color ='#333';
        document.querySelector('main').style.color ='#333';
        document.querySelector('header').style.borderBottomColor='#333';
        document.querySelector('input').style.borderColor='#333';
        document.querySelector('.number').style.backgroundColor='#333';
        document.querySelector('.number').style.color='#26a570';
        document.querySelector('.btn').style.backgroundColor='#333';
        document.querySelector('.btn').style.color='#26a570';
        document.querySelector('.check').style.backgroundColor='#333';
        document.querySelector('.check').style.color='#26a570';






         if(scoreMeter<= highScore){
             document.querySelector('.highscore').textContent = highScore;
         }else {
             highScore = scoreMeter;
             document.querySelector('.highscore').textContent = highScore;
         }
         number = Math.round(Math.random()*20)+1;
         console.log(`new guess:  ${number}`);
         scoreMeter =  20;

    }
    
 
})
document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.score').textContent='20';
    number = Math.round(Math.random()*20)+1;
         console.log(`new guess:  ${number}`);
    document.querySelector('.guess').value='';
    document.querySelector('.number').textContent = '?';

    document.querySelector('body').style.backgroundColor ='#222';
    document.querySelector('body').style.color ='#eee';
    document.querySelector('main').style.color ='#eee';
    document.querySelector('header').style.borderBottomColor='#eee';
    document.querySelector('input').style.borderColor='#eee';
    document.querySelector('.number').style.backgroundColor='#eee';
    document.querySelector('.number').style.color='#333';
    document.querySelector('.btn').style.backgroundColor='#eee';
    document.querySelector('.btn').style.color='#333';
    document.querySelector('.check').style.backgroundColor='#eee';
    document.querySelector('.check').style.color='#333';
     
    
        });