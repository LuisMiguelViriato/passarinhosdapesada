
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var uzecaiunochao;
var porquinho1,porquinho2;
var cepodemadeira1,cepodemadeira2;
var bird1;
var bg ="bg.png",bgimage
function preload(){
//Fundo= loadImage("bg.png")
time()


}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    bird1 = new bemtivi(600,200,50,50);
porquinho1 = new porquinhosmaluquerus(820,320);
porquinho2 = new porquinhosmaluquerus(820,280);
    box1 = new Box(710,320,70,70);
    box2 = new Box(930,320,70,70);
    box3 = new Box(900,280,70,70);
    box4 = new Box(740,280,70,70);
    box5 = new Box(820,240,70,70);
    uzecaiunochao=new Zezinfidoze(600,390,1200,20);
    chao2=new Zezinfidoze(6,390,500,300)
    cepodemadeira1=new craftingtable(820,300,300,PI/2);
    cepodemadeira2=new craftingtable(820,260,230,PI/2);
    restri1=new liguinhaforte(bird1.body,{x:200,y:100
    });
}


function draw(){
    if(bgimage){background(bgimage);}
    Engine.update(engine);
    restri1.display();
    bird1.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    porquinho1.display();
    porquinho2.display();
    uzecaiunochao.display();
    chao2.display();
   cepodemadeira1.display();
   cepodemadeira2.display();
}
async function time(){
var resposta = await fetch("http://worldtimeapi.org/api/timezone/America/Sao_Paulo")
var aknator = await resposta.json()
var sunmoon = aknator.datetime.slice(11,13)
if(sunmoon>=06 && sunmoon<=18){
    bg="bg.png"
}else{
    bg="bg2 (1).jpg"
}
bgimage=loadImage(bg)
}
function mouseDragged(){

Matter.Body.setPosition(bird1.body,{x:mouseX,y:mouseY})




}

function mouseReleased(){
    restri1.fly()

}




