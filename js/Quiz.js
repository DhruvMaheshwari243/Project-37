class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    input1.hide();
    title.hide();
    button.hide();
    input2.hide();

    //write code to change the background color here
    background("yellow");

    //write code to show a heading for showing the result of Quiz
    FormData.title.hide();
    textSize(40);
    text("Results of the Quiz", 120,100);

    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined
    if(allContestants != undefined){
      var positionY = 130;
      for(var plr in allContestants){
        positionY = positionY+20;
            textSize(15);
            if(plr === "player" + player.index){
              fill("green");
          }
          else{
            fill("red");
        }
        text(allContestants[plr].name + ":" + allContestants[plr] .distance,120,positionY);
      }
    }

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
