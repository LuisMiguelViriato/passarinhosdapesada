class bemtivi {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':3,
        'density':1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("bird.png")
this.tragetory=[]






    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    //pos.x = mouseX
   // pos.y = mouseY
    var angle = this.body.angle;
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    imageMode(CENTER);
    fill("orange");
    image(this.image,0, 0, this.width, this.height);
    pop();

    var position=[pos.x,pos.y]
    this.tragetory.push(position)
for(var i=0;i<this.tragetory.length;i++){
  rect(this.tragetory[i][0],this.tragetory[i][1],5,5)
}
  }
};