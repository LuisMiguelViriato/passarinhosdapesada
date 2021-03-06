class craftingtable {
    constructor(x, y, height,angle) {
      var options = {
          'restitution':0.8,
          'friction':5,
          'density':1
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 20;
      this.height = height;
      this.image = loadImage("wood2.png")
      Matter.Body.setAngle(this.body,angle);
      World.add(world, this.body);
    }
    display(){
      push()
      var pos =this.body.position;
      var angle = this.body.angle;
     
      translate(pos.x,pos.y)
      rotate(angle)
      imageMode(CENTER);
      fill("orange");
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };