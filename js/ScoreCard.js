class ScoreCard{
    constructor(){}

    display(){
        background(255);
        var Ypos = 100;
        for(var plr in allPlayers){
        Ypos+=100; 
        fill(0);
        textSize(15);
        text("hello world", 500,200);
        text(allPlayers[plr].name + ": " + allPlayers[plr].rank, 500, 200);
        console.log(allPlayers[plr].name + ": " + allPlayers[plr].rank);
        }
    }
}