
let computerChoice =  Math.ceil(Math.random()*3); 

//output of 1, 2, or 3

 $(".computerChoice").text(computerChoice);



$(".play").click(function(){
  
let userchoice = $(".input").val();
  $(".userchoice").text(userchoice);
              
  if (randomNumber)
    
               
               
})
/*condtional statemnt for computer choice 

if (computerChoice === 1) {
computerChoice = "rock";

$(".computerChoice").text(computerChoice);
} 
else if (computer Choice === 2)
computerChoice = "paper";

else if (computerChoice === 3)
computerChoice = "scissors";
