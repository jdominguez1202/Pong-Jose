let Pausa;
let pelota;
let player1;
let player2;
let gol1;
let gol2;
const input_radi= document.getElementById("diamentro_pelota");
function setup() {
  const canvasDiv = document.getElementById("canvasContainer");
  let ampleCanvas = canvasDiv.offsetWidth;
  let altCanvas= canvasDiv.offsetHeight;

  let cnv = createCanvas(ampleCanvas, altCanvas);
  cnv.parent("canvasContainer");
  pelota = new hola (width/2, 100, 40, 8, 1);
  player1= new jugador1 (0, height/2, 20, 150);
  player2= new jugador2 (width - 20, height/2, 20, 150);
  gol1 = 0 
  gol2 = 0
  Pausa= true
  
}
function draw() {
  pelota.D = input_radi.value
  background(0);
  rebote()
  marcador()
 if(Pausa === false){
   pelota.dibujar()
   player1.dibujar() 
   player2.dibujar()
   Mensaje()
 }else{
   pelota.dibujar()
   pelota.movimiento()
   player1.dibujar()
   player1.movimiento()
   player2.dibujar()
   player2.movimiento() 
 }
}
function rebote(){
  if(pelota.X < (player1.X + player1.W) ){ 
    if(pelota.Y > player1.Y && pelota.Y < (player1.Y + player1.H) ){
      pelota.VeloX *= -1
    } 
  }

  if((pelota.X + pelota.D/2) > (player2.X + player2.W)){
    if((pelota.Y - pelota.D/2) > player2.Y && (pelota.Y+pelota.D/2) <(player2.Y + player2.H)){
      pelota.VeloX *= -1
    }
  }
}
function Mensaje(){
  fill ("white")
  textSize(20)
  text("Pulsa ESPACIO para continuar", 130 , height / 2)
}
function keyPressed(){
  if(keyCode === 32){
    Pausa = !Pausa
  }
}
function marcador(){
  fill("white")
  textSize(20)
  text( gol1, 50, 50)
  text( gol2, width-50, 50)
  if(pelota.X > width){
      gol1 += 1
      pelota.X = width/2
  }
  if(pelota.X < 0){
    gol2 += 1
    pelota.X= width/2
  }
}
