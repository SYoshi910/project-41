class Umbrella{
    constructor(x,y){
        var options = {
            isStatic : true
        }
        this.x = x;
        this.y = y;
        this.width = 300;
        this.height = 300;
        this.mans = Bodies.circle(this.x,this.y,150, options);
        this.boy = loadImage("hey.png");
        
        World.add(world, this.mans);
    }
    display(){
        push()
        translate(this.mans.position.x,this.mans.position.y);
        imageMode(CENTER);
        image(this.boy,this.x/100000,this.y/10000, this.width,this.height);
        pop();
        
    }
}