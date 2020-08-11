const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var drops = [];
var maxdrops;
var i = 0;
function preload(){
    thunone = loadImage("hello!.png");
    thundwo = loadImage("hi.png");
}

function setup(){
    var canvas = createCanvas(600,1200);
    engine = Engine.create();
    world = engine.world;
    maxdrops = 100;
    booyyy = new Umbrella(300,900);
    
}

function draw(){
    background(0,0,0);
    if(i < 100){
        drops.push(new Drop(random(0,600),-5));
        i += 1;
    }
    drops.forEach(i =>{
        i.display();
        
    })
    if(frameCount % 175 == 0){
        light1 = createSprite(random(100,500),40);
        light1.lifetime = 12;
        light1.scale = 0.15;
        let rando = random(0,1);
        if(rando == 0){
            light1.addImage(thundwo);
        }
        else{
            light1.addImage(thunone);
        }
    }
    booyyy.display();
    Engine.update(engine);
    drawSprites();
}   

