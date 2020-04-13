class BiteFish extends GoFish {

  constructor(options) {
    super(options);
    this.biteRadius = 60;
    this.imageUri = '/images/bite-fish.gif';
  }


  updateOneTick(){
    super.updateOneTick();
    const neighbours = this.getNeighbours(this.biteRadius);
    for(const neighbour of neighbours) {
      if(neighbour.id !== this.id &&  neighbour instanceof Fish && this.height >= neighbour.height) {
        this.position = neighbour.position;
        neighbour.kill();
        this.width += neighbour.width/2;
        this.height += neighbour.height/2;
        this.biteRadius = this.height;
        return;
      }
    }

  }

}
