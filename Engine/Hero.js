class Hero{
    constructor(x,y,radius){
        var options = {
            //'restitiution':0.8,
            //'friction':1.0,
            //'density':1.0,
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image=loadImage("images/Superhero-01.png")
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
       // fill(176, 219, 83);
       push()
      translate(this.body.position.x, this.body.position.y);
      //rotate(this.body.angle)
      ellipseMode(CENTER)
      imageMode(CENTER)
      image(this.image,0,0,this.radius*2,this.radius*2)
     pop()
    }
}