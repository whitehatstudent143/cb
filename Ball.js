class Ball {
    constructor(x, y, radius) {


      var options={
        restitution:0.4,
        isStatic:false
      }
      
      this.body = Bodies.circle(x, y, radius);
      this.dia = radius*2;
      World.add(world,this.body);
    }

    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      ellipseMode(RADIUS);
      fill("pink");
      ellipse(0,0,this.dia,this.dia);
      pop();
    }
  };