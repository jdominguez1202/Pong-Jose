class jugador1 {
    constructor(pX, pY, pW, pH){
     this.X= pX
     this.Y= pY
     this.W= pW
     this.H= pH
   }
   dibujar(){  
     fill("purple");
     rect(this.X, this.Y, this.W, this.H)
   }
   movimiento(){
     if (keyIsDown(87)) {
       this.Y -= 5;
     }
      if (keyIsDown(83)){
        this.Y +=5;
      }
     }
   }
   class jugador2 {
    constructor(pX, pY, pW, pH){
     this.X= pX
     this.Y= pY
     this.W= pW
     this.H= pH
   }
   dibujar(){
     fill("blue");
     rect(this.X, this.Y, this.W, this.H)
   }
   movimiento(){
     if(keyIsDown(38)){
       this.Y -= 5;
     }
     if (keyIsDown(40)){
       this.Y += 5;
   }  
   }
   }