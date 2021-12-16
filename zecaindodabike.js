class Zezinfidoze {
    constructor(x, y, width, height) {
      var options = {
     isStatic:true
    
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };
// o ze caiu e foi pro hospital mas ele ta bem  
 //function bob o construtor = o bob ja pintou a caixa