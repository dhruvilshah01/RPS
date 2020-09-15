
let win = document.getElementById('win');
    
var userscore = document.getElementById('User'); 
var aiscore = document.getElementById('AI');  

let usergames = 0; 
let compgames = 0;  


var userchoice = '';  
let computerchoice = '';




document.getElementById('Rock').addEventListener('click',pickedRock); 
document.getElementById('Paper').addEventListener('click',pickedPaper); 
document.getElementById('Scissors').addEventListener('click',pickedScissors); 
document.getElementById('Restart').addEventListener('click',restart);

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
function restart() { 
    usergames = 0; 
    compgames = 0; 
    win.textContent = 'First to 5 points wins!'; 
    userscore.textContent = 'User Score : ' + usergames; 
    aiscore.textContent = 'AI Score : ' + compgames; 
    
   
    
}
function checkwin(){ 
    if (usergames == 5) { 
        win.textContent = 'You win!'; 
       

    } 
    else if(compgames == 5) { 
        win.textContent = 'You lose!'; 
       
    }

}

function playround(){ 
    comp();  
    
    
    

    if(userchoice == 'Rock' && computerchoice == 'Scissors'){ 
        usergames++;  
        userscore.textContent = 'User Score : ' + usergames; 
        

    } 
    else if(userchoice == 'Paper' && computerchoice == 'Rock'){ 
        usergames++;  
        userscore.textContent = 'User Score : ' + usergames; 
        
    }
    else if(userchoice == 'Scissors' && computerchoice == 'Paper'){ 
        usergames++;  
        userscore.textContent = 'User Score : ' + usergames; 
        
    } 
    else if (userchoice == computerchoice) { 
        roundnum -= 1;
    } 
    else { 
        compgames++;  
        aiscore.textContent = 'AI Score : ' + compgames;
        
    } 
    checkwin();
}   
