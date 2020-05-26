class Bird extends BaseClass {
  constructor(x,y){
    var options={
      density : 2,
    }
    super(x,y,30,30,options);
    this.image = loadImage("sprites/bird.png");
   
  }
 
  display() {
    

    super.display();
    if (this.body.velocity.x>10 && this.body.position.x>200){
    var position = [this.body.position.x,this.body.position.y]
   
    }
  }
 

}
