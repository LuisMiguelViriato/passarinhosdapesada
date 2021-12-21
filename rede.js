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
      
      World.add(world, this.restri);
    }
    display(){
      if(this.restri.bodyA){
      var pos =this.restri.position;
      rectMode(CENTER);
      fill("brown");
      line(this.restri.bodyA.position.x, this.restri.bodyA.position.y,this.restri.pointB.x, this.restri.pointB.y );
    }
    }
    fly(){
      this.restri.bodyA=null
    }
  };