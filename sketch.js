const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var box1,stone;
var slingshot1;
//var polygon;

var gameState = "onSling";

function preload(){
    poly = loadImage("polygon.png");

}




function setup(){
    var canvas = createCanvas(900,400);
    
    engine =  Engine.create();
    world = engine.world;

    ground1 = new Ground(600,height,1200,20);
    
    stand1 = new Stand(390,300,250,10)
    stand2 = new Stand(700,200,200,10)

    //stand 1 boxes
// level 1
    box1 = new box(300,275,30,40);
    box2 = new box(330,275,30,40);
    box3 = new box(360,275,30,40);
    box4 = new box(390,275,30,40);
    box5 = new box(420,275,30,40);
    box6 = new box(450,275,30,40);
    box7 = new box(480,275,30,40);

    //level 2
    box8= new box(330,235,30,40);
    box9 = new box(360,235,30,40);
    box10 = new box(390,235,30,40);
    box11 = new box(420,235,30,40);
    box12 = new box(450,235,30,40);

    // level 3
    box13 = new box(360,195,30,40);
    box14 = new box(390,195,30,40);
    box15 = new box(420,195,30,40);

    //level 4

    box16 = new box(390,155,30,40);

    // stand 2 boxes
//level1
    box17 = new box(640,175,30,40);
    box18 = new box(670,175,30,40);
    box19 = new box(700,175,30,40);
    box20 = new box(730,175,30,40);
    box21 = new box(760,175,30,40);

//level2
    box22 = new box(670,135,30,40);
    box23 = new box(700,135,30,40);
    box24 = new box(730,135,30,40);

    //level 3

    box25 = new box(700,95,30,40);

    polygon = Bodies.circle(50,200,20);
    
    //imageMode(CENTER);
    image(poly,polygon.position.x,polygon.position.y,40,40);
    World.add(world,polygon);
    

    slingshot1 = new slingshot(this.polygon,{x:100,y:200});

}

function draw(){
    background("white");

    Engine.update(engine);
    //background("black");
    ground1.display();
    stand1.display();
    stand2.display();
    // stand1
// level 1
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    //level2
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    //level3
    box13.display();
    box14.display();
    box15.display();

    //level4
    box16.display();

    //stand 2
    //level1
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();

    //level 2
    box22.display();
    box23.display();
    box24.display();

    //level 3
    box25.display();

    //polygon.display();
    imageMode(CENTER)
    image(poly ,polygon.position.x,polygon.position.y,40,40);
   slingshot1.display();
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot1.fly();
    gameState = "launched";
}
