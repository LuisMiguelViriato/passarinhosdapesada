class porquinhosmaluquerus {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':3,
          'density':1
      }
      this.body = Bodies.rectangle(x, y, 70, 70, options);
      this.width = 70
         this.height = 70  ;
         this.image = loadImage("pig.png")
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed>3){
        World.remove(world,this.body) 
      }else{
        
      
      var pos =this.body.position;
      var angle = this.body.angle;
      push()
      translate(pos.x,pos.y)
      rotate(angle)
      imageMode(CENTER);
      fill("green");
      image(this.image,0, 0, this.width, this.height);
      pop();
      }
    }
  };
  //box = azium