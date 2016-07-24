document.addEventListener("DOMContentLoaded", function(){

function BEGIN_GAME(){
  disable_begin();
  var player1 = 0;
  var player2 = 0;
  var player1Turn = false;
  var player2Turn = true;

  var turn = document.createElement("h3");
  turn.innerText = "";
  turn.id = "turn";
  document.body.appendChild(turn);
  var scoreBoard = document.createElement("div");
  var scoreTitle = document.createElement("div");
  scoreTitle.id = "scoreTitle";
    var scoreLeft = document.createElement("div");
    scoreLeft.id = "scoreLeft";
    var scoreRight = document.createElement("div");
    scoreRight.id = "scoreRight";

  var firstPlayer = document.createElement("h2");
  var firstPlayerName =  prompt("Please enter the first user's name: ");
  var firstPlayerScore = player1;
  firstPlayer.innerHTML = firstPlayerName + ": " + firstPlayerScore ;

  var secondPlayer = document.createElement("h2");
  var secondPlayerName =  prompt("Please enter the second user's name: ");
  var secondPlayerScore = player2;
  secondPlayer.innerHTML = secondPlayerName + ": " + secondPlayerScore;

  scoreLeft.appendChild(firstPlayer);
  scoreRight.appendChild(secondPlayer);
  scoreTitle.appendChild(scoreLeft);
  scoreTitle.appendChild(scoreRight);

  scoreBoard.appendChild(scoreTitle);


  //scoreBoard.appendChild(turn);

  document.body.appendChild(scoreBoard);

  var sect = document.createElement("section");
  sect.id = "section-of-labels";

  var question = document.createElement("div");
  question.id = "quest";
  question.innerText = "";
  document.body.appendChild(question);

  var input1 = document.createElement("input");
  input1.id = "A";
  input1.setAttribute("type", "checkbox");
  var label1 = document.createElement("label");
  label1.setAttribute("for", "A");
  sect.appendChild(input1);
  sect.appendChild(label1);

  var input2 = document.createElement("input");
  input2.id = "B";
  input2.setAttribute("type", "checkbox");
  var label2 = document.createElement("label");
  label2.setAttribute("for", "B");
  sect.appendChild(input2);
  sect.appendChild(label2);

  var input3 = document.createElement("input");
  input3.id = "C";
  input3.setAttribute("type", "checkbox");
  var label3 = document.createElement("label");
  label3.setAttribute("for", "C");
  sect.appendChild(input3);
  sect.appendChild(label3);

  var input4 = document.createElement("input");
  input4.id = "D";
  input4.setAttribute("type", "checkbox");
  var label4 = document.createElement("label");
  label4.setAttribute("for", "D");
  sect.appendChild(input4);
  sect.appendChild(label4);

  var input5 = document.createElement("input");
  input5.id = "E";
  input5.setAttribute("type", "checkbox");
  var label5 = document.createElement("label");
  label5.setAttribute("for", "E");
  sect.appendChild(input5);
  sect.appendChild(label5);

  var input6 = document.createElement("input");
  input6.id = "F";
  input6.setAttribute("type", "checkbox");
  var label6 = document.createElement("label");
  label6.setAttribute("for", "F");
  sect.appendChild(input6);
  sect.appendChild(label6);

  var sum = document.createElement("span");
  sum.classList = "sum";
  sum.innerText = " = ?";
  sect.appendChild(sum);
  document.body.appendChild(sect);

  //button container for submit and next.
  var buttonContainer = document.createElement("div");
  buttonContainer.id = "buttonContainer";

  var submitButton = document.createElement("button");
  submitButton.innerText = "submit";
  submitButton.id = "button";
  buttonContainer.appendChild(submitButton);

  var nextQButton = document.createElement("button");
  nextQButton.innerText = "Go To Next Question";
  nextQButton.id = "next-button";
  buttonContainer.appendChild(nextQButton);



  document.body.appendChild(buttonContainer);
  var winnerAnnouncement = document.createElement("div");
  winnerAnnouncement.innerText = "";
  winnerAnnouncement.id = "winnerAnnouncement";

  document.body.appendChild(winnerAnnouncement);

  var sectId = document.querySelectorAll("label");
  var replaceQMark = document.querySelector('span');
  var allInputs = document.querySelectorAll("input");
  var lengthOfLabels = sectId.length;
  console.log("length of labels: " + lengthOfLabels);
  var lengthOfInputs = allInputs.length;
  console.log("lengthOfInputs: " + lengthOfInputs);
  var total = 0;
  var arrayOfNumbers = [];
  var questionArray = [72, 72, 37, 37, 24, 24, 31, 31,  87, 87, 53, 53, 249, 249, -54, -54, 23, 23];
  var counter = 0;
  var winningMessage = document.createElement("h1");
  winningMessage.id = "winningMessage";

  create_array_elements();
  start_game();

/*FUNCTIONS*/
function start_game(){
  console.log("************STARTING GAME****************");
  console.log("Counter: " + counter);
  switch_turns();
  console.log("Counter: " + counter);

  console.log("Counter: " + counter);
  setInputValues(arrayOfNumbers[0]);
  console.log("Counter: " + counter);
  displayQuestionNumber(questionArray, counter);
  console.log("Counter: " + counter);
  display_array(arrayOfNumbers);
  console.log("Counter: " + counter);

}

  //START GAME AUTO:
  function switch_turns(){
    console.log("************SWITCH TURNS****************");
    console.log("Counter: " + counter);
    if(player1Turn){
      player1Turn= false;
      player2Turn = true;
      turn.innerText = secondPlayerName + "'s Turn Now:";
    }
    else if(player2Turn){
      player2Turn = false;
      player1Turn = true;
      turn.innerText = firstPlayerName + "'s Turn Now:";
    }
    enable_sub();
    enable_next();
  }

  function enable_sub(){
    console.log("*************ENABLE SUBMIT BUTTON************* ");
    console.log("Counter: " + counter);
    document.getElementById("button").disabled=false;
  }

  function enable_next() {
    console.log("*************ENABLE NEXT BUTTON************* ");
    console.log("Counter: " + counter);
    document.getElementById("next-button").disabled = false;
  }

  function create_array_elements(){
    console.log("************CREATING ARRAY ELEMENTS****************");
    console.log("Counter: " + counter);
    //72
    var numChoices = [31, -2, 36, 5, -84, 28];
    vals_for_array(numChoices);

    //72
    var numChoices = [31, -2, 36, 5, -84, 28];
    vals_for_array(numChoices);

    //37
    var numChoices = [39, -4, 2, 5, -3, 42];
    vals_for_array(numChoices);

    //37
    var numChoices = [39, -4, 2, 5, -3, 42];
    vals_for_array(numChoices);

    //24
    var numChoices = [19, 18, 6, 5, -3, 7];
    vals_for_array(numChoices);

    //24
    var numChoices = [19, 18, 6, 5, -3, 7];
    vals_for_array(numChoices);

    //31
    var numChoices = [18, 12, 10, 3, -2, 7];
    vals_for_array(numChoices);

    //31
    var numChoices = [18, 12, 10, 3, -2, 7];
    vals_for_array(numChoices);

    //87
    var numChoices = [90, 86, 4, -7, 2, -1];
    vals_for_array(numChoices);

    //87
    var numChoices = [90, 86, 4, -7, 2, -1];
    vals_for_array(numChoices);

    //53
    var numChoices = [40, 30, 20, 14, -1, -10];
    vals_for_array(numChoices);

    //53
    var numChoices = [40, 30, 20, 14, -1, -10];
    vals_for_array(numChoices);

    //249
    var numChoices = [-395, 482, 291, 962, -319, 1];
    vals_for_array(numChoices);

    //249
    var numChoices = [-395, 482, 291, 962, -319, 1];
    vals_for_array(numChoices);

    //-54
    var numChoices = [54, -107, -5, 4, 3, 17];
    vals_for_array(numChoices);

    //-54
    var numChoices = [54, -107, -5, 4, 3, 17];
    vals_for_array(numChoices);

    //23
    var numChoices = [22, 21, 20, 9, -8, -7];
    vals_for_array(numChoices);

    //23
    var numChoices = [22, 21, 20, 9, -8, -7];
    vals_for_array(numChoices);
  }

  function setInputValues(arrofnum){
    console.log("************SET INPUT VALUES****************");
    console.log("Counter: " + counter);
    for(var i = 0; i < lengthOfLabels; i++){
      sectId[i].innerText = arrofnum[i];
    }
  }

  function displayQuestionNumber(questionArray, index){
    console.log("************DISPLAY QUESTION NUMBER****************");
    console.log("Counter: " + counter);
    console.log("Question Array: " + questionArray);
    console.log("Index is " + index);
    var numb = index+1;
    var questPrompt = "Please select all the possible numbers that add up to: ";
    var questNumber =  questionArray[index];
    document.getElementById("quest").innerHTML = "<div id='Q-title'>Question #" + numb + ":</div> \n"  + questPrompt + "" + questNumber;
  }

  function display_array(arr){
    console.log("*************In DISPLAY ARRAY FUNCTION************* ");
    console.log("Counter: " + counter);
    for(var i = 0; i <arr.length; i++){
      console.log(i + ":    " + arr[i]);
    }
    console.log("*************END DISPLAY ARRAY FUNCTION************* ");
  }

  //BASED ON EVENT LISTENERS:
  function update_score_board(){
    console.log("*************UPDATING SCORE BOARD************* ");
    console.log("Counter: " + counter);
    firstPlayer.innerText = firstPlayerName + ": " + player1;
    secondPlayer.innerText = secondPlayerName + ": " + player2;
    scoreLeft.appendChild(firstPlayer);
    scoreRight.appendChild(secondPlayer);
    scoreTitle.appendChild(scoreLeft);
    scoreTitle.appendChild(scoreRight);

    scoreBoard.appendChild(scoreTitle);
  }

  function replace_with_total(){
    console.log("*************REPLACE WITH TOTAL FX************* ");
    console.log("Counter: " + counter);
    replaceQMark.innerText = " = " + total;
  }

  function clear_total(){
    console.log("*************CLEAR TOTAL************* ");
    console.log("Counter: " + counter);
    replaceQMark.innerText = " = ?";
    total = 0;
  }




  function end_game(){
    document.getElementById("button").style.display="none";
    document.getElementById('next-button').style.display = "none";

    console.log("*************END GAME************* ");
    console.log("Counter: " + counter);
    if(player1 > player2){
      winnerAnnouncement.innerText = "The winner is: " + firstPlayerName + " with a score of: " + player1 + ":" + player2;
      winningMessage.innerText = "";

    }
    else if(player2 > player1){
      winnerAnnouncement.innerText = "The winner is: " + secondPlayerName + " with a score of: " + player2 + ":" + player1;
      winningMessage.innerText = "";

    }
    else{
      winnerAnnouncement.innerText = "It is a tie! " + "with a score of: " + player1 + ":" + player2;
      winningMessage.innerText = "";

    }

    var endGame = document.createElement("button");
    endGame.innerText = "Play Again!";
    endGame.id = "end-game";
    winnerAnnouncement.appendChild(endGame);

    endGame.addEventListener("click", function(){
      play_again();
    });

    disable_sub();
    disable_next();
  }
  // function displayScore(){
  //
  // }

  function play_again(){
      enable_begin();
      document.location.reload();
  }

  function initilize_array(arr, index, num){
    console.log("*************INITILIZE ARRAY************* ");
    console.log("Counter: " + counter);
    arr[index] = num;
  }

  function vals_for_array(arr){
    console.log("*************VALUES FOR ARRAY************* ");
    console.log("Counter: " + counter);
    for(var i = 0; i < arr.length; i++){
      initilize_array(arr, i, arr[i]);
    }
    arrayOfNumbers.push(arr);
  }

  submitButton.addEventListener("click", function(){
    console.log("*************SUBMIT HAS BEEN PRESSED************* ");
    console.log("Counter: " + counter);
    checkForClicked();
    disable_sub();
  });

  function checkForClicked(){
    console.log("*************CHECK FOR CLICKED FUNCTION************* ");
    console.log("Counter: " + counter);
    for (var i = 0; i < lengthOfInputs; i++) {
      switch(allInputs[i].id){
        case "A":
          if(allInputs[i].checked){
            total+=parseInt(sectId[i].innerText);
            break;
          }
        case "B":
            if(allInputs[i].checked){
            total+=parseInt(sectId[i].innerText);
            break;
          }
        case "C":
          if(allInputs[i].checked){
            total+=parseInt(sectId[i].innerText);
            break;
          }
        case "D":
          if(allInputs[i].checked){
            total+=parseInt(sectId[i].innerText);
            break;
          }
        case "E":
        if(allInputs[i].checked){
            total+=parseInt(sectId[i].innerText);
            break;
          }
        case "F":
          if(allInputs[i].checked){
            total+=parseInt(sectId[i].innerText);
            break;
          }
        }
      }

      var match = questionArray[counter];
      console.log("match here is: " + match);

      replace_with_total();
      console.log("INCREMENTING COUNTER HERE:");
      counter++;
      console.log("COUNTER HAS BEEN INCREMENTED");
      console.log("Counter: " + counter);
      console.log("match is: " + match);
      console.log("total is: " + total);
      if(match == total){
        winningMessage.innerText = "Correct!";
        if(player1Turn){
          player1++;
          console.log("Player1 won and score is: " + player1);
          update_score_board();
          clear_total();
        }
        if(player2Turn){
          player2++;
          console.log("player2 won and score is: " + player2);
          update_score_board();
          clear_total();
        }
        document.body.appendChild(winningMessage);
      }
      else{
        winningMessage.innerText = "Sorry Incorrect!";
        document.body.appendChild(winningMessage);
      }
      clearCheckedBoxes();
    }

    function clearCheckedBoxes(){
      console.log("*************CLEAR CHECKED BOXES************* ");
      console.log("Counter: " + counter);
      for (var i = 0; i < lengthOfInputs; i++) {
          switch(allInputs[i].id){
            case "A":
              if(allInputs[i].checked){allInputs[i].checked = false;}
              break;
            case "B":
              if(allInputs[i].checked){allInputs[i].checked = false;}
              break;
            case "C":
              if(allInputs[i].checked){allInputs[i].checked = false;}
              break;
            case "D":
              if(allInputs[i].checked){allInputs[i].checked = false;}
              break;
            case "E":
              if(allInputs[i].checked){allInputs[i].checked = false;}
              break;
            case "F":
              if(allInputs[i].checked){allInputs[i].checked = false;}
              break;
            }
        }
      }
  function disable_sub(){
    console.log("*************DISABLE SUBMIT BUTTON************* ");
    console.log("Counter: " + counter);
    document.getElementById("button").disabled=true;
  }

  function disable_begin(){
    document.getElementById("begin").disabled=true;
    document.getElementById('divBegin').style.display = "none";
    document.getElementById('instruct').style.display = "none";

  }

  function enable_begin(){
    document.getElementById("begin").disabled=false;
  }

  nextQButton.addEventListener("click", function(){
    console.log("*************NEXT Q HAS BEEN PRESSED************* ");
    console.log("Counter: " + counter);
    next_question(counter);
  });

  function next_question(index){
    switch_turns();

    console.log("*************NEXT QUESTION FUNCTION************* ");
    console.log("Counter: " + counter);
    clear_total()
    console.log("Length of arrayOfNumbers: " + 18);
    console.log("Index in next is: change index to counter?! " + index);
    clearCheckedBoxes();

    if(index < 19){
      console.log(index + " is < " + 19);
      if(index == 18){
        disable_next();
        console.log("RESETTING COUNTER TO 0:");
        counter = 0;
        console.log("Counter: " + counter);
      }

      else{
        setInputValues(arrayOfNumbers[index]);
        displayQuestionNumber(questionArray, index);
      }
    }
    if(index >= 19){
        console.log(index + " is >= " + 19);
        disable_next();
        console.log("RESETTING COUNTER TO 0:");
        counter = 0;
        console.log("Counter: " + counter);
      }
      enable_sub();

    console.log("Leaving next_question function: " + "\n**************************************");
  }



  function disable_next() {
    console.log("*************DISABLE NEXT BUTTON************* ");
    console.log("Counter: " + counter);
      document.getElementById("next-button").disabled = true;
      console.log("RESETTING COUNTER TO 0:");
      counter = 0;
      console.log("Counter: " + counter);
      end_game();
  }
}
var BEGIN_BUTTON = document.createElement('button');
BEGIN_BUTTON.innerText = "BEGIN THE TRIVIA GAME!"
BEGIN_BUTTON.id = "begin";

var DIV_BEGIN = document.createElement('div');
DIV_BEGIN.id = "divBegin";
DIV_BEGIN.appendChild(BEGIN_BUTTON);

document.body.appendChild(DIV_BEGIN);

BEGIN_BUTTON.addEventListener("click", function(){
  BEGIN_GAME();
});

var INSTRUCTIONS = document.createElement('div');
INSTRUCTIONS.innerHTML =
"<p> Welcome to this awesome math trivia game!  This is a 2 player game equipped with a score board and is manipulated through the DOM.</p><p>How to play: <br> Select from the possible choices to create a subset sum that is equivalent to the given question.  Improve your math skills while having a great enjoyable experience!  Enjoy and don't forget to show your friends!</p>";
INSTRUCTIONS.id = "instruct";
document.body.appendChild(INSTRUCTIONS);

});
