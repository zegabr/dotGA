class Brain {
  constructor(size) {
	this.length = size;
    this.directions = [];
    this.step = 0;
    for (let f = 0; f < size; f++) {
      this.directions.push(new Point());
    }
   // console.log("Foram adicionados: ", size, " pontos ao Brain");
   // console.log("Preparar randomização.");
    this.randomize();
  }

  randomize() {
    let randomAngle=0;	
    for (let i = 0; i < this.directions.length; i++) {
      randomAngle = Math.random(6.2830);//2*PI
      this.directions[i].fromAngle(randomAngle); //PVector.fromAngle
    }
    //console.log("Houve randomização!")
  }

  clone() {
    let clone = new Brain(this.directions.length);
    for (let i = 0; i < this.directions.length; i++) {
      clone.directions[i] = this.directions[i];
    }
    //console.log("Clonando Brain");
    return clone;
  }

  mutate() {

    let mutationRate = 0.01;
    let randomAngle=0;
    let rand=0;
    for (let i = 0; i < this.directions.length; i++) {
      rand = random();
      if (rand < mutationRate) {
        randomAngle = random(6.2830);
      }
      this.directions[i].fromAngle(randomAngle); //PVector.fromAngle
    }
    //console.log("Mutacionando com taxa de mutação:", mutationRate);
  }
}