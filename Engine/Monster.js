class Monster{
    constructor(x,y,radius){
        var options = {
            //'restitiution':0.8,
            'frictionAir':1.0,
            'density':1.0,
        }
        this.body = Bodies.circle(x,y,(radius)/2,options);
        this.radius = radius;
        this.image=loadImage("images/Monster-01.png")
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
      image(this.image,0,0,this.radius,this.radius)
     pop()
    }
}