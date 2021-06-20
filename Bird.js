class Bird extends BaseClass {
  constructor(x,y, w, h){
    super(x,y,w,h);
    this.trajectory = [];
    
  }
display(){
  var angle = this.body.angle;
  push();
  
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("black");
        stroke("white");
        strokeWeight(3)
        ellipse( 0, 0, this.width, this.height);
        pop();
}
}
