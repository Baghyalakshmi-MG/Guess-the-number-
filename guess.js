    var guessnumber = document.getElementById("guessnumber");
    var result = document.getElementById("result");
    var score = document.getElementById("score");
    var randomnumber = Math.floor(Math.random()*10)+1
    var totalscore = 10;
    var highscore = 0;
    function check()
    {
        var enterednumber = guessnumber.value;
        if(enterednumber === "" ){
        alert("please enter a number");
        return;
    }
    if (randomnumber == enterednumber){
        console.log("Right");
        result.textContent="Right";
        alert("YOU WON");

        if(totalscore > highscore){
            highscore=totalscore;
            document.getElementById("highscore").textContent = "High Score "+highscore;
        }
        document.getElementById("checkBtn").disabled = true;
    }
    else{
         totalscore=totalscore-1
         score.textContent="score:" +totalscore
         console.log("Wrong")
         result.textContent="Wrong"
         guessnumber.value='';

         if(totalscore <= 0){
            alert("Game Over!The number was " + randomnumber);
            document.getElementById("checkBtn").disabled = true;

         }
    }
}
  function resetGame()
         {
            randomnumber = Math.floor(Math.random()*10)+1;
            totalscore = 10;
            
            score.textContent = "score:10";
            result.textContent = "You are wrong/right";
            guessnumber.value="";

            document.getElementById("checkBtn").disabled = false;

            console.log("New random number:", randomnumber);
         }
   

