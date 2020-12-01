class Drops{
    constructor(x,y){
        this.body = Bodies.circle(x,y,10,{friction:0.1});
        this.radius = 10;
        World.add(world,this.body);
    }
    update(){
      if(this.body.position.y > 800){
          Matter.Body.setPosition(this.body, {x:random(0,400),y:random(0,400)});
      }  
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(rain,pos.x,pos.y,20,20);
        /* ellipseMode(RADIUS);
        fill("blue");
        ellipse(pos.x,pos.y,this.radius); */
    }
}