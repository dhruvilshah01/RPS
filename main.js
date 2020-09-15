let round = document.getElementById('round');
let roundnum = 0;
    
var userscore = document.getElementById('User'); 
var aiscore = document.getElementById('AI'); 

var userchoice = '';  
let computerchoice = '';


let usergames = 0; 
let compgames = 0;  

document.getElementById('Rock').addEventListener('click',pickedRock); 
document.getElementById('Paper').addEventListener('click',pickedPaper); 
document.getElementById('Scissors').addEventListener('click',pickedScissors);

let choices = ['Rock', 'Paper', 'Scissors'];

//Function that randomly chooses rock paper or scissors
function comp(){ 
    let randomnum = Math.floor((Math.random()*4 + 1)); 
    computerchoice = choices[randomnum];


}   
//Functions that correspond to buttons and updates the user choice
function pickedRock(){ 
    userchoice = 'Rock'; 
    playround();
} 
function pickedScissors(){ 
    userchoice = 'Scissors'; 
    playround();
} 
function pickedPaper(){ 
    userchoice = 'Paper'; 
    playround();
} 

function playround(){ 
    comp();  
    
    roundnum++; 
    

    if(userchoice == 'Rock' && computerchoice == 'Scissors'){ 
        usergames++;  
        userscore.textContent = 'User Score : ' + usergames; 
        round.textContent = 'Round ' + roundnum + '/5'; 

    } 
    else if(userchoice == 'Paper' && computerchoice == 'Rock'){ 
        usergames++;  
        userscore.textContent = 'User Score : ' + usergames; 
        round.textContent = 'Round ' + roundnum + '/5'; 
    }
    else if(userchoice == 'Scissors' && computerchoice == 'Paper'){ 
        usergames++;  
        userscore.textContent = 'User Score : ' + usergames; 
        round.textContent = 'Round ' + roundnum + '/5'; 
    } 
    else if (userchoice == computerchoice) { 
        roundnum -= 1;
    } 
    else { 
        compgames++;  
        aiscore.textContent = 'AI Score : ' + compgames;
        round.textContent = 'Round ' + roundnum + '/5'; 
    }
}   
