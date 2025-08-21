// generarea numarului secret
var again = document.getElementById("again");

var input = document.getElementById("input");

var check = document.getElementById("check");

var guessing = document.getElementById("guessing");

var number = document.getElementById("number");

var  score = document.getElementById("score");

var highScore = document.getElementById("highscore");

var secretNr =Math.trunc( Math.random()*20+1);


// variabila pentru score si pentru highscore

var gameScore = 20;
var gameHighScore = 0;

// o functie care o sa schimbe textul de pe ecran
function show(message){
guessing.innerHTML = message;
}

// o functie care o sa ne verifice numarul din input cu numarul secret:

// daca nu  am introdus un numar in input, daca noi am ghicit numarul secret, 
// daca noi am introdus un numar mai mare decit numarul  secret,
// daca am introdus un numar mai mic decit numarul secret

 check.addEventListener("click",function(){
    var verify = parseFloat(input.value);
    if (!verify){
        show("Not a Number")
    }else if(verify === secretNr){
      show("You guess the number!!!")
      number.innerHTML = secretNr;
     document.querySelector("body").style.backgroundColor = "green";
     if(gameHighScore<gameScore){
        gameHighScore = gameScore;
        highScore.innerHTML = gameScore;
     }
        
    }
    else if(verify !==secretNr){
         if(verify<secretNr){
            show("To low")
           gameScore--;
            score.innerHTML = gameScore;
         }
           
         else{
           show("To high")
             gameScore--;
            score.innerHTML = gameScore;
         }
       if(gameScore<1){
         show("You lost!!!")
       }
        
    }

 })
 console.log(secretNr);

 
 

// o functie care reseteaza jocul
again.addEventListener("click",function(){
   gameScore = 20;
   number.innerHTML ="?";
   show("Start guessing...");
   document.querySelector("body").style.backgroundColor = "black";
   score.innerHTML = gameScore;
   secretNr = Math.trunc(Math.random()*20+1);
   console.log(secretNr);
})
