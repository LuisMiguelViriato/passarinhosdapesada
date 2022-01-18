class liguinhaforte{
    constructor(bodyA,pontoB) {
      var options = {
     bodyA:bodyA,
     pointB:pontoB,
     stiffness:0.09,
     length:10
      }
      this.restri=Matter.Constraint.create(options);
      this.pointB=pontoB
      this.sling1 = loadImage("sling1.png");
      this.sling2 = loadImage("sling2.png");
      this.sling3 = loadImage("sling3.png");
      World.add(world, this.restri);
    }
    display(){
      image(this.sling1,200,20)
      image(this.sling2,170,20)
      if(this.restri.bodyA){
      var posA = this.restri.bodyA.position;
      var posB = this.pontoB
      push()
      rectMode(CENTER);
      fill("brown");
      strokeWeight(4);
      line(this.restri.bodyA.position.x-20, this.restri.bodyA.position.y,this.restri.pointB.x-10, this.restri.pointB.y );
      line(this.restri.bodyA.position.x-20, this.restri.bodyA.position.y,this.restri.pointB.x+30, this.restri.pointB.y ); //line(posA.x-20,posA.y,posB.x+30,posB.y-3)
  pop()
    }
    }
    fly(){
      this.restri.bodyA=null
    }
  };