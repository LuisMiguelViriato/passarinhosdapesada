class liguinhaforte{
    constructor(bodyA,bodyB) {
      var options = {
     bodyA:bodyA,
     bodyB:bodyB,
     stiffness:0.04,
     length:10
      }
      this.restri=Matter.Constraint.create(options);
      
      
      World.add(world, this.restri);
    }
    display(){
      var pos =this.restri.position;
      rectMode(CENTER);
      fill("brown");
      line(this.restri.bodyA.position.x, this.restri.bodyA.position.y,this.restri.bodyB.position.x, this.restri.bodyB.position.y );
      
    }
  };