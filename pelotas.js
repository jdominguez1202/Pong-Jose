
class hola {
    constructor(pX, pY, pD, pVeloX, pVeloY){
      this.X = pX
      this.Y = pY
      this.D = pD
      this.VeloX = pVeloX
      this.VeloY = pVeloY
    }
    dibujar(){
    fill("red")
    circle(this.X, this.Y, this.D)
    }
    movimiento(){
    this.X += this.VeloX;
    this.Y += this.VeloY;
    if(this.X > width){
      this.VeloX*=-1;
    }
    if(this.X < 0){
      this.VeloX*=-1;
    }
    if(this.Y > height){
      this.VeloY*=-1;
    }
      if(this.Y < 0){
      this.VeloY*=-1;
  }
  }
  }