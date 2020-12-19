const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var polygon, polygonImg;
var bodyA, bodyB;

function preload() {
  polygonImg=loadImage("polygon.jpg");
}

function setup(){
var canvas = createCanvas(1200,600);
engine = Engine.create();
world = engine.world;    
bodyA=polygon;
bodyB=slingshot;
ground=new Ground(390,280,10,400)   
box1=new Box(300,275,30,40);
box2=new Box(330,275,30,40);
box3=new Box(360,275,30,40);
box4=new Box(390,275,30,40);
box5=new Box(420,275,30,40);
box6=new Box(450,275,30,40);
box7=new Box(480,275,30,40);
box8=new Box(330,235,30,40);
box9=new Box(360,235,30,40);
box10=new Box(390,235,30,40);
box11=new Box(420,235,30,40);
box12=new Box(450,235,30,40);
box13=new Box(360,195,30,40);
box14=new Box(390,195,30,40);
box15=new Box(420,195,30,40);
box16=new Box(390,155,30,40);
slingshot=new SlingShot(this.plygon,{x:100,y:200});
polygon= Bodies.circle(50,200,20);
World.add(world,polygon);
}
function draw(){
background(backgroundImg);
Engine.update(engine);
ground.display();
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
sligshot.display();
}