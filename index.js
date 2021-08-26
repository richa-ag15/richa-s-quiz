var readline = require("readline-sync");
const chalk = require('chalk');
// console.log(chalk.blue("hello"));
var userName = readline.question("Your Name ?");
var welcome = "HEY ";
console.log(welcome + (chalk.yellow(userName)) +"!"+ "Do you know richa? \nlets check..." +"\n(INSTRUCTION: DON'T USE CAPITAL  LETTERS GO FOR SMALL-CASE LETTERS)");

console.log("-----------------------------------");
var score=0;

function play(question,answer){
  var userans = readline.question(question);
  if(userans===answer){
    console.log("yeahh Right answer!");
    score++
    console.log("you got : "+ score);
  }else{
    console.log("oops Wrong!");
     score--
    console.log("you got : "+ score)
  }
  console.log("----------------")
}

var query = [
  {
    question:"1.richa's fav. colour?\nAnswer: ",
    answer:"black"
  },
   {
    question:"2.richa's fav. city ?\nAnswer: ",
    answer:"jaipur"
  },
   {
    question:"3.What she is doing in studies ? \nAnswer: ",
    answer:"b.tech"
  },
  {
    question:"4.her fav. street food?\nAnswer: ",
    answer:"momo"
  },
  {
    question:"5. she likes watching movies or series ?\nAnswer: ",
    answer:"series"
  },
  
];


for(let i=0;i<query.length;i++){
var current = query[i]
  play(current.question,current.answer)
  // play(query.question,query.answer[i])
};

console.log("your Final score : " + score + "/5");

console.log(chalk.green("THANKYOU FOR PLAYING!!!!"));
console.log(chalk.yellow("HAVE A GOOD DAY"));