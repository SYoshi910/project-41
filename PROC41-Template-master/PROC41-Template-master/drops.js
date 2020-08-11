class Drop{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.drop = Bodies.circle(this.x,this.y,10, {friction : 0.1});
        World.add(world,this.drop);
    }
    display(){
        push();
        translate(this.drop.position.x, this.drop.position.y);
        ellipseMode(CENTER);
        fill("lightblue");
        circle(this.x/10000,this.y/10000,5);
        
        pop();
        if(this.drop.position.y > height){
            Matter.Body.setPosition(this.drop, {x:random(0,600), y: -5});
        }
    }
}