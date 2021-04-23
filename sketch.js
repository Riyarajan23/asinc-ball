var ball;
var database,position
function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database=firebase.database()
    var loc=database.ref("ball/position")
    loc.on("value",readpos)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        rightPosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        rightPosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        rightPosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        rightPosition(0,+1);
    }
    drawSprites();
}

function rightPosition(x,y){
    database.ref("ball/position").set({
        x:ball.x+x,
        y:ball.y+y
    })
}

function readpos(data){
position=data.val()
ball.x=position.x
ball.y=position.y
}