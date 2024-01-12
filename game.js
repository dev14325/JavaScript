let gameNumber = 25;
;
let nog = 0;


// while(true){

//     let userNumber = parseInt(prompt("Guess your number : "));


//     if(userNumber<gameNumber){
//         alert("Enter the greater number");
        
//         nog++;
//     }
//     else if(userNumber>gameNumber){
//         alert("Enter the lesser number");
//         nog++;
//     }
//     else{
//         alert(`Congratulations! you guess the right number in ${nog+1} try`)
//         break;
//     }


// }



// console.log("You guess the right number in ",nog,"try");


let userNumber = parseInt(prompt("guess the number"));

while(userNumber!=gameNumber){
    userNumber =  parseInt(prompt("You entered wrong number.Guess again"));
    nog++;

}

alert("Cong ! you guessed it right in ",nog," steps");