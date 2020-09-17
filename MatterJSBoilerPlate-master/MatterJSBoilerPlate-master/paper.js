class Paper {
    constructor(x, y) {
      var options = {
          isStatic:false,
          'restitution':0.5,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, 30, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position


      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y)
      rotate(angle);
      ellipseMode(CENTER);
     // strokeWeight(3);
      stroke(255)
      fill(255);
      ellipse(this.body.position.x, this.body.position.y,30,30);
      pop();
    }
  };