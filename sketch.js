const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var gameState="onSling";
//let i = [1];
//i=i+1;
function preload() {
    backgroundImg = loadImage("sprites/bg.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    ground2 = new Ground(825,220,200,10 );
    ground3 = new Ground(600,0,1200,20);
   // ground4 = new Ground(1200,200,10,400);
    ground5 = new Ground(0,200,10,600);

    box1 = new Box(740,200);
    box2 = new Box(765,200);
    box3 = new Box(790,200);
    box4 = new Box(815,200);
    box5 = new Box(840,200);
    box6 = new Box(865,200);
    box7 = new Box(890,200);
    box8 = new Box(775,60);
    box9 = new Box(750,130);
    box10 = new Box(775,130);
    box11 = new Box(800,130);
    box12 = new Box(825,130);
    box13 = new Box(850,130);
    box14 = new Box(875,130);
    box15 = new Box(900,130);
    box16 = new Box(800,60);
    box17 = new Box(825,60);
    box18 = new Box(850,60);
    box19 = new Box(875,60);
    //box20 = new Box(8,60);
    

    bird = new Bird(130,300);
  
    slingshot = new SlingShot(bird.body,{x:200, y:280});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
   
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();

    ground.display();
    ground2.display();
    ground3.display();
    //ground4.display();
    ground5.display();

    bird.display();
    
    slingshot.display();    
}


function mouseDragged(){
    if (gameState !== "launched") {
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});

}
}

function mouseReleased(){
    
    slingshot.fly();
    gameState = "launched";

}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(bird.body);
       gameState = "onSling";
    
    }

}
/*if(bird.x!==100 || bird[i].x!==100){
for (let i=1;i>0;i++){
    bird[i] === new Bird (100,20)

}
bird[i].display();*/
