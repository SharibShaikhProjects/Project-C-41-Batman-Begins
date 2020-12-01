class Umbrella{
    constructor(){
        this.body= Bodies.circle(200,500,50,{isStatic:true});
        this.radius = 50;
        World.add(world,this.body);
    }
    display(){
       /*  var pos = this.body.position;
        imageMode(CENTER);
        image(umbrellaImg,pos.x,pos.y,500,500); */
    }
}