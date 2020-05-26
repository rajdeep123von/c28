class Box extends BaseClass {
  constructor(x, y){
    var options={
      density : 0.05,
    }
    super(x,y,20,55,options);
    this.image = loadImage("sprites/wood block.png");
  }

};
