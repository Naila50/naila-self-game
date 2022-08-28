class Player{
    constructor(){
      
    }

    getCount() {
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value", data => {
          playerCount = data.val();
        });
    }
    
    updateCount(count) {
        database.ref("/").update({
          playerCount: count
        });
    }

    getScore() {
      var scoreRef = database.ref("score");
      scoreRef.on("value", data => {
        score = data.val();
      });
    }
  updateScore(score) {
    database.ref("/").update({
      score: score
    });
  }
}