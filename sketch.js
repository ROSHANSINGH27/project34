const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg
function preload() {
//preload the images here
BackgroundImg=loadImage("images/GamingBackground.png")

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  // create sprites here
  ground=new Ground(1500,750,3000,20)

  hero=new Hero(50,500,150)

  monster=new Monster(1500,500,150)

  fly=new Fly(hero.body,{x:270,y:150})

  Box1 = new Box(900, 100, 70, 70); 
    Box2 = new Box(900, 100, 70, 70); 
    Box3 = new Box(900, 100, 70, 70);
     Box4 = new Box(900, 100, 70, 70);
      Box5 = new Box(900, 100, 70, 70);
       Box6 = new Box(900, 100, 70, 70); 
       Box7 = new Box(800, 100, 70, 70);
        Box8 = new Box(800, 100, 70, 70); 
        Box9 = new Box(800, 100, 70, 70);
         Box10 = new Box(800, 100, 70, 70); 
         Box11 = new Box(800, 100, 70, 70);
          Box12 = new Box(800, 100, 70, 70);
           Box13 = new Box(700, 100, 70, 70);
            Box14 = new Box(700, 100, 70, 70);
             Box15 = new Box(700, 100, 70, 70);
              Box16 = new Box(700, 100, 70, 70);
               Box17 = new Box(700, 100, 70, 70);
                Box18 = new Box(700, 100, 70, 70); 
                Box19 = new Box(700, 100, 70, 70);
     Box20 = new Box(700, 100, 70, 70);



}

function draw() {
  background(BackgroundImg);
  Engine.update(engine);

ground.display()

hero.display()

monster.display()

Box1.display();
Box2.display();
 Box3.display();
  Box4.display()
Box5.display()
 Box6.display()
  Box7.display()
   Box8.display()
    Box9.display()
     Box10.display()
      Box11.display()
       Box12.display()
        Box13.display()
         Box14.display()
          Box15.display()
           Box16.display()
            Box17.display()
             Box18.display()
              Box19.display()
               Box20.display()
}

function mouseDragged() { 
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
 }