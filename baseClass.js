class baseClass{
constructor(x,y,width,height){
    var options ={
        'restitution':0.4,
        'friction':0,
        
    }
    this.body = Bodies.rectangle(x,y,width,height);
    this.width = width;
    this.height = height;
    
    World.add(world,this.body);

}
display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);
    rectMode(CENTER);
    fill("yellow");
    rect(0,0,this.width,this.height);
    pop();
}
};
