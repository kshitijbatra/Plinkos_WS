class Particle{
    constructor(x,y){
   var options={
       isStatic:false,
       mass:500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    }
    this.x=x;
    this.y=y;
    this.r=20;
    this.body=Matter.Bodies.circle(this.x,this.y,this.r/2,options);
    this.color=color(random(0.255),random(0,255),random(0,255));
    World.add(world,this.body);
    }
    display(){
        var paperPos=this.body.position;
        push();
        translate(paperPos.x,paperPos.y);
        ellipseMode(CENTER);
        strokeWeight(3);
        fill(this.color);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}
