class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.3,
        'friction':1.0,
        'density':1.5
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position; 
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(4);
    stroke("aqua");
    rectMode(CENTER);
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();
  }
};
