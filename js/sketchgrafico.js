var data;
var botonFelipeSanchez;
var countFS = 1;
var botonTomasLopez;
var countTL = 1; 
var botonFelipeCabello;
var countFC =1;
var botonValentinaEspinoza;
var countVE = 1;
var botonDeianiraReyes;
var countDR = 1;
var botonRamiroSalinas;
var countRS = 1;
var botonCarolinaCaceres;
var countCC = 1;
var botonRelleno;
var countRELLENO;

function preload(){
  data = loadJSON("https://api.myjson.com/bins/15su3b");
}

function setup() {
    
  createCanvas(1300, 988);
  botonFelipeSanchez = createButton(data[0].dedicacion[0].nombre);
  botonFelipeSanchez.position(1350,180);
  botonFelipeSanchez.size(110,30);
  botonFelipeSanchez.style('background-color',color(100, 150, 200,150));
  botonTomasLopez = createButton(data[0].dedicacion[1].nombre);
  botonTomasLopez.position(1350,240);
  botonTomasLopez.size(110,30);
  botonTomasLopez.style('background-color',color(100, 200, 100,150));
  botonFelipeCabello = createButton(data[0].dedicacion[2].nombre);
  botonFelipeCabello.position(1350,300);
  botonFelipeCabello.size(110,30);
  botonFelipeCabello.style('background-color',color(200, 100, 100,150));
  botonValentinaEspinoza = createButton(data[0].dedicacion[3].nombre);
  botonValentinaEspinoza.position(1350,360);
  botonValentinaEspinoza.size(110,30);
  botonValentinaEspinoza.style('background-color',color(200, 100, 200,150));
  botonDeianiraReyes = createButton(data[0].dedicacion[4].nombre);
  botonDeianiraReyes.position(1350,420);
  botonDeianiraReyes.size(110,30);
  botonDeianiraReyes.style('background-color',color(200, 200, 100,150));
  botonRamiroSalinas = createButton(data[0].dedicacion[0].nombre);
  botonRamiroSalinas.position(1350,480);
  botonRamiroSalinas.size(110,30);
  botonRamiroSalinas.style('background-color',color(200, 50, 150,150));
  botonCarolinaCaceres = createButton(data[0].dedicacion[0].nombre);
  botonCarolinaCaceres.position(1350,540);
  botonCarolinaCaceres.size(110,30);
  botonCarolinaCaceres.style('background-color',color(50, 150, 0,150));
  
}

function draw() {
  background(220);
  for (i = 0; i < 8; i++){
    strokeWeight(2);
    stroke(100, 150, 200);
    line(250+i*100,485,250+i*100,515);
    fill(0);
    strokeWeight(0);
    textSize(11);
    textAlign(CENTER);
    text(data[i].nombre, 211+100*i, 525, 80, 200);
  }

  for (h = 0; h < 9; h++){
    strokeWeight(2);
    stroke(100, 150, 200);
    line(135,460-40*h,165,460-40*h);
    fill(0);
    strokeWeight(0);
    textSize(12);
    textAlign(CENTER);
    text(2+2*h, 83, 453-40*h, 80, 200);
  }
    
    textSize(14);
    text('HORAS',127,75,50,50);
    text('CURSOS',1022,492,50,50);
    
  stroke (100, 150, 200);
  strokeWeight(4);
  line (150,500,1000,500);
  line (150,500,150,100);

  botonFelipeSanchez.mousePressed(negro0);
  botonFelipeSanchez.mouseReleased(blanco0);
  botonTomasLopez.mousePressed(negro1);
  botonTomasLopez.mouseReleased(blanco1);
  botonFelipeCabello.mousePressed(negro2);
  botonFelipeCabello.mouseReleased(blanco2);
  botonValentinaEspinoza.mousePressed(negro3);
  botonValentinaEspinoza.mouseReleased(blanco3);
  botonDeianiraReyes.mousePressed(negro4);
  botonDeianiraReyes.mouseReleased(blanco4);
  botonRamiroSalinas.mousePressed(negro5);
  botonRamiroSalinas.mouseReleased(blanco5);  
  botonCarolinaCaceres.mousePressed(negro6);
  botonCarolinaCaceres.mouseReleased(blanco6); 
  botonRelleno.mousePressed(negro7);
  botonRelleno.mouseReleased(blanco7);

  
  }
  
  function negro0(){
    countFS += 1;
    
    if (countFS == 2){
      
    for (i = 0; i < 8; i++){
    
    strokeWeight(1);
    fill(100, 150, 200, 20);
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[0].horas[0]+data[0].dedicacion[0].horas[1]+data[0].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[0].horas[0]+data[1].dedicacion[0].horas[1]+data[1].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[0].horas[0]+data[2].dedicacion[0].horas[1]+data[2].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[0].horas[0]+data[3].dedicacion[0].horas[1]+data[3].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[0].horas[0]+data[4].dedicacion[0].horas[1]+data[4].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[0].horas[0]+data[5].dedicacion[0].horas[1]+data[5].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[0].horas[0]+data[6].dedicacion[0].horas[1]+data[6].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[0].horas[0]+data[7].dedicacion[0].horas[1]+data[7].dedicacion[0].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(100, 150, 200);
    circle(250+i*100,
          500-((data[i].dedicacion[0].horas[0]+data[i].dedicacion[0].horas[1]+data[i].dedicacion[0].horas[2])/3)*20,
          12);
      }
    }
    else {
    clear();
      background(220);
        
  for (i = 0; i < 8; i++){
    strokeWeight(2);
    stroke(100, 150, 200);
    line(250+i*100,485,250+i*100,515);
    fill(0);
    strokeWeight(0);
    textSize(11);
    textAlign(CENTER);
    text(data[i].nombre, 211+100*i, 525, 80, 200);
  }
        
    for (h = 0; h < 9; h++){
    strokeWeight(2);
    stroke(100, 150, 200);
    line(135,460-40*h,165,460-40*h);
    fill(0);
    strokeWeight(0);
    textSize(12);
    textAlign(CENTER);
    text(2+2*h, 83, 453-40*h, 80, 200);
  }
       
    textSize(14);
    text('HORAS',127,75,50,50);
    text('CURSOS',1022,492,50,50);
        
  stroke (100, 150, 200);
  strokeWeight(4);
  line (150,500,1000,500);
  line (150,500,150,100);
        
    if(countTL == 2){
         for (i = 0; i < 8; i++){
    stroke(100, 200, 100);
    strokeWeight(1);
    fill(100, 200, 100, 20);
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[1].horas[0]+data[0].dedicacion[1].horas[1]+data[0].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[1].horas[0]+data[1].dedicacion[1].horas[1]+data[1].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[1].horas[0]+data[2].dedicacion[1].horas[1]+data[2].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[1].horas[0]+data[3].dedicacion[1].horas[1]+data[3].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[1].horas[0]+data[4].dedicacion[1].horas[1]+data[4].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[1].horas[0]+data[5].dedicacion[1].horas[1]+data[5].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[1].horas[0]+data[6].dedicacion[1].horas[1]+data[6].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[1].horas[0]+data[7].dedicacion[1].horas[1]+data[7].dedicacion[1].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(100, 200, 100);
    circle(250+i*100,
          500-((data[i].dedicacion[1].horas[0]+data[i].dedicacion[1].horas[1]+data[i].dedicacion[1].horas[2])/3)*20,
          12);
    }
    }
        
   if (countFC == 2){
    for (i = 0; i < 8; i++){
    stroke(200, 100, 100);
    strokeWeight(1);
    fill(200, 100, 100, 20);
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[2].horas[0]+data[0].dedicacion[2].horas[1]+data[0].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[2].horas[0]+data[1].dedicacion[2].horas[1]+data[1].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[2].horas[0]+data[2].dedicacion[2].horas[1]+data[2].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[2].horas[0]+data[3].dedicacion[2].horas[1]+data[3].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[2].horas[0]+data[4].dedicacion[2].horas[1]+data[4].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[2].horas[0]+data[5].dedicacion[2].horas[1]+data[5].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[2].horas[0]+data[6].dedicacion[2].horas[1]+data[6].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[2].horas[0]+data[7].dedicacion[2].horas[1]+data[7].dedicacion[2].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(200, 100, 100);
    circle(250+i*100,
          500-((data[i].dedicacion[2].horas[0]+data[i].dedicacion[2].horas[1]+data[i].dedicacion[2].horas[2])/3)*20,
          12);
    }
    }
       
    if (countVE == 2){
    for (i = 0; i < 8; i++){
    stroke(200, 100, 200);
    strokeWeight(1);
    fill(200, 100, 200, 20);
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[3].horas[0]+data[0].dedicacion[3].horas[1]+data[0].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[3].horas[0]+data[1].dedicacion[3].horas[1]+data[1].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[3].horas[0]+data[2].dedicacion[3].horas[1]+data[2].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[3].horas[0]+data[3].dedicacion[3].horas[1]+data[3].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[3].horas[0]+data[4].dedicacion[3].horas[1]+data[4].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[3].horas[0]+data[5].dedicacion[3].horas[1]+data[5].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[3].horas[0]+data[6].dedicacion[3].horas[1]+data[6].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[3].horas[0]+data[7].dedicacion[3].horas[1]+data[7].dedicacion[3].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(200, 100, 200);
    circle(250+i*100,
          500-((data[i].dedicacion[3].horas[0]+data[i].dedicacion[3].horas[1]+data[i].dedicacion[3].horas[2])/3)*20,
          12);
    }
    }
        
    if (countDR == 2){
    for (i = 0; i < 8; i++){
    stroke(200, 200, 100);
    strokeWeight(1);
    fill(200, 200, 100, 20);
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[4].horas[0]+data[0].dedicacion[4].horas[1]+data[0].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[4].horas[0]+data[1].dedicacion[4].horas[1]+data[1].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[4].horas[0]+data[2].dedicacion[4].horas[1]+data[2].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[4].horas[0]+data[3].dedicacion[4].horas[1]+data[3].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[4].horas[0]+data[4].dedicacion[4].horas[1]+data[4].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[4].horas[0]+data[5].dedicacion[4].horas[1]+data[5].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[4].horas[0]+data[6].dedicacion[4].horas[1]+data[6].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[4].horas[0]+data[7].dedicacion[4].horas[1]+data[7].dedicacion[4].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(200, 200, 100);
    circle(250+i*100,
          500-((data[i].dedicacion[4].horas[0]+data[i].dedicacion[4].horas[1]+data[i].dedicacion[4].horas[2])/3)*20,
          12);
    }
    }
        
    if (countRS == 2){
    for (i = 0; i < 8; i++){
    stroke(200, 50, 150);
    strokeWeight(1);
    fill(200, 50, 150, 20); 
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[5].horas[0]+data[0].dedicacion[5].horas[1]+data[0].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[5].horas[0]+data[1].dedicacion[5].horas[1]+data[1].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[5].horas[0]+data[2].dedicacion[5].horas[1]+data[2].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[5].horas[0]+data[3].dedicacion[5].horas[1]+data[3].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[5].horas[0]+data[4].dedicacion[5].horas[1]+data[4].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[5].horas[0]+data[5].dedicacion[5].horas[1]+data[5].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[5].horas[0]+data[6].dedicacion[5].horas[1]+data[6].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[5].horas[0]+data[7].dedicacion[5].horas[1]+data[7].dedicacion[5].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(200, 50, 150);
    circle(250+i*100,
          500-((data[i].dedicacion[5].horas[0]+data[i].dedicacion[5].horas[1]+data[i].dedicacion[5].horas[2])/3)*20,
          12);
    }
    }
        
    if (countCC == 2){
    for (i = 0; i < 8; i++){
    stroke(50, 150, 0);
    strokeWeight(1);
    fill(50, 150, 0, 20);
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[6].horas[0]+data[0].dedicacion[6].horas[1]+data[0].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[6].horas[0]+data[1].dedicacion[6].horas[1]+data[1].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[6].horas[0]+data[2].dedicacion[6].horas[1]+data[2].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[6].horas[0]+data[3].dedicacion[6].horas[1]+data[3].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[6].horas[0]+data[4].dedicacion[6].horas[1]+data[4].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[6].horas[0]+data[5].dedicacion[6].horas[1]+data[5].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[6].horas[0]+data[6].dedicacion[6].horas[1]+data[6].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[6].horas[0]+data[7].dedicacion[6].horas[1]+data[7].dedicacion[6].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(50, 150, 0);
    circle(250+i*100,
          500-((data[i].dedicacion[6].horas[0]+data[i].dedicacion[6].horas[1]+data[i].dedicacion[6].horas[2])/3)*20,
          12);
    }
    }
        
    }
    if (countFS > 2){ 
   countFS = 1;
    }
  }
      
  function blanco0(){
        
      }


        
// Tomas Lopez--------------------------------------------------------------------------------------------------------------------
        
        
        
function negro1(){
  countTL += 1;
    
    if (countTL == 2){
    for (i = 0; i < 8; i++){
    stroke(100, 200, 100);
    strokeWeight(1);
    fill(100, 200, 100, 20);
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[1].horas[0]+data[0].dedicacion[1].horas[1]+data[0].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[1].horas[0]+data[1].dedicacion[1].horas[1]+data[1].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[1].horas[0]+data[2].dedicacion[1].horas[1]+data[2].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[1].horas[0]+data[3].dedicacion[1].horas[1]+data[3].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[1].horas[0]+data[4].dedicacion[1].horas[1]+data[4].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[1].horas[0]+data[5].dedicacion[1].horas[1]+data[5].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[1].horas[0]+data[6].dedicacion[1].horas[1]+data[6].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[1].horas[0]+data[7].dedicacion[1].horas[1]+data[7].dedicacion[1].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(100, 200, 100);
    circle(250+i*100,
          500-((data[i].dedicacion[1].horas[0]+data[i].dedicacion[1].horas[1]+data[i].dedicacion[1].horas[2])/3)*20,
          12);
    }
    }
      else{
      clear();
      background(220);
          
  for (i = 0; i < 8; i++){
    strokeWeight(2);
    stroke(100, 150, 200);
    line(250+i*100,485,250+i*100,515);
    fill(0);
    strokeWeight(0);
    textSize(11);
    textAlign(CENTER);
    text(data[i].nombre, 211+100*i, 525, 80, 200);
  }
          
    for (h = 0; h < 9; h++){
    strokeWeight(2);
    stroke(100, 150, 200);
    line(135,460-40*h,165,460-40*h);
    fill(0);
    strokeWeight(0);
    textSize(12);
    textAlign(CENTER);
    text(2+2*h, 83, 453-40*h, 80, 200);
  }
     
    textSize(14);
    text('HORAS',127,75,50,50);
    text('CURSOS',1022,492,50,50);
          
  stroke (100, 150, 200);
  strokeWeight(4);
  line (150,500,1000,500);
  line (150,500,150,100);
          
    if (countFS == 2){
      
    for (i = 0; i < 8; i++){
    
    strokeWeight(1);
    fill(100, 150, 200, 20);
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[0].horas[0]+data[0].dedicacion[0].horas[1]+data[0].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[0].horas[0]+data[1].dedicacion[0].horas[1]+data[1].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[0].horas[0]+data[2].dedicacion[0].horas[1]+data[2].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[0].horas[0]+data[3].dedicacion[0].horas[1]+data[3].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[0].horas[0]+data[4].dedicacion[0].horas[1]+data[4].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[0].horas[0]+data[5].dedicacion[0].horas[1]+data[5].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[0].horas[0]+data[6].dedicacion[0].horas[1]+data[6].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[0].horas[0]+data[7].dedicacion[0].horas[1]+data[7].dedicacion[0].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(100, 150, 200);
    circle(250+i*100,
          500-((data[i].dedicacion[0].horas[0]+data[i].dedicacion[0].horas[1]+data[i].dedicacion[0].horas[2])/3)*20,
          12);
      }
    }
          
    if (countFC == 2){
    for (i = 0; i < 8; i++){
    stroke(200, 100, 100);
    strokeWeight(1);
    fill(200, 100, 100, 20);
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[2].horas[0]+data[0].dedicacion[2].horas[1]+data[0].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[2].horas[0]+data[1].dedicacion[2].horas[1]+data[1].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[2].horas[0]+data[2].dedicacion[2].horas[1]+data[2].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[2].horas[0]+data[3].dedicacion[2].horas[1]+data[3].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[2].horas[0]+data[4].dedicacion[2].horas[1]+data[4].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[2].horas[0]+data[5].dedicacion[2].horas[1]+data[5].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[2].horas[0]+data[6].dedicacion[2].horas[1]+data[6].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[2].horas[0]+data[7].dedicacion[2].horas[1]+data[7].dedicacion[2].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(200, 100, 100);
    circle(250+i*100,
          500-((data[i].dedicacion[2].horas[0]+data[i].dedicacion[2].horas[1]+data[i].dedicacion[2].horas[2])/3)*20,
          12);
    }
    }
       
    if (countVE == 2){
    for (i = 0; i < 8; i++){
    stroke(200, 100, 200);
    strokeWeight(1);
    fill(200, 100, 200, 20);
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[3].horas[0]+data[0].dedicacion[3].horas[1]+data[0].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[3].horas[0]+data[1].dedicacion[3].horas[1]+data[1].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[3].horas[0]+data[2].dedicacion[3].horas[1]+data[2].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[3].horas[0]+data[3].dedicacion[3].horas[1]+data[3].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[3].horas[0]+data[4].dedicacion[3].horas[1]+data[4].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[3].horas[0]+data[5].dedicacion[3].horas[1]+data[5].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[3].horas[0]+data[6].dedicacion[3].horas[1]+data[6].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[3].horas[0]+data[7].dedicacion[3].horas[1]+data[7].dedicacion[3].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(200, 100, 200);
    circle(250+i*100,
          500-((data[i].dedicacion[3].horas[0]+data[i].dedicacion[3].horas[1]+data[i].dedicacion[3].horas[2])/3)*20,
          12);
    }
    }
        
    if (countDR == 2){
    for (i = 0; i < 8; i++){
    stroke(200, 200, 100);
    strokeWeight(1);
    fill(200, 200, 100, 20);
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[4].horas[0]+data[0].dedicacion[4].horas[1]+data[0].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[4].horas[0]+data[1].dedicacion[4].horas[1]+data[1].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[4].horas[0]+data[2].dedicacion[4].horas[1]+data[2].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[4].horas[0]+data[3].dedicacion[4].horas[1]+data[3].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[4].horas[0]+data[4].dedicacion[4].horas[1]+data[4].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[4].horas[0]+data[5].dedicacion[4].horas[1]+data[5].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[4].horas[0]+data[6].dedicacion[4].horas[1]+data[6].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[4].horas[0]+data[7].dedicacion[4].horas[1]+data[7].dedicacion[4].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(200, 200, 100);
    circle(250+i*100,
          500-((data[i].dedicacion[4].horas[0]+data[i].dedicacion[4].horas[1]+data[i].dedicacion[4].horas[2])/3)*20,
          12);
    }
    }
    
    if (countRS == 2){
    for (i = 0; i < 8; i++){
    stroke(200, 50, 150);
    strokeWeight(1);
    fill(200, 50, 150, 20); 
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[5].horas[0]+data[0].dedicacion[5].horas[1]+data[0].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[5].horas[0]+data[1].dedicacion[5].horas[1]+data[1].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[5].horas[0]+data[2].dedicacion[5].horas[1]+data[2].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[5].horas[0]+data[3].dedicacion[5].horas[1]+data[3].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[5].horas[0]+data[4].dedicacion[5].horas[1]+data[4].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[5].horas[0]+data[5].dedicacion[5].horas[1]+data[5].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[5].horas[0]+data[6].dedicacion[5].horas[1]+data[6].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[5].horas[0]+data[7].dedicacion[5].horas[1]+data[7].dedicacion[5].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(200, 50, 150);
    circle(250+i*100,
          500-((data[i].dedicacion[5].horas[0]+data[i].dedicacion[5].horas[1]+data[i].dedicacion[5].horas[2])/3)*20,
          12);
    }
    }
        
    if (countCC == 2){
    for (i = 0; i < 8; i++){
    stroke(50, 150, 0);
    strokeWeight(1);
    fill(50, 150, 0, 20);
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[6].horas[0]+data[0].dedicacion[6].horas[1]+data[0].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[6].horas[0]+data[1].dedicacion[6].horas[1]+data[1].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[6].horas[0]+data[2].dedicacion[6].horas[1]+data[2].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[6].horas[0]+data[3].dedicacion[6].horas[1]+data[3].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[6].horas[0]+data[4].dedicacion[6].horas[1]+data[4].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[6].horas[0]+data[5].dedicacion[6].horas[1]+data[5].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[6].horas[0]+data[6].dedicacion[6].horas[1]+data[6].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[6].horas[0]+data[7].dedicacion[6].horas[1]+data[7].dedicacion[6].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(50, 150, 0);
    circle(250+i*100,
          500-((data[i].dedicacion[6].horas[0]+data[i].dedicacion[6].horas[1]+data[i].dedicacion[6].horas[2])/3)*20,
          12);
    }
    }
          
    }
    
  
    
  if (countTL > 2){ 
   countTL = 1;
    }
}

function blanco1(){
        
      }



// Felipe Cabello--------------------------------------------------------------------------------------------------------------------
        
        
        
function negro2(){
  countFC += 1;
    
    if (countFC == 2){
    for (i = 0; i < 8; i++){
    stroke(200, 100, 100);
    strokeWeight(1);
    fill(200, 100, 100, 20);
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[2].horas[0]+data[0].dedicacion[2].horas[1]+data[0].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[2].horas[0]+data[1].dedicacion[2].horas[1]+data[1].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[2].horas[0]+data[2].dedicacion[2].horas[1]+data[2].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[2].horas[0]+data[3].dedicacion[2].horas[1]+data[3].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[2].horas[0]+data[4].dedicacion[2].horas[1]+data[4].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[2].horas[0]+data[5].dedicacion[2].horas[1]+data[5].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[2].horas[0]+data[6].dedicacion[2].horas[1]+data[6].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[2].horas[0]+data[7].dedicacion[2].horas[1]+data[7].dedicacion[2].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(200, 100, 100);
    circle(250+i*100,
          500-((data[i].dedicacion[2].horas[0]+data[i].dedicacion[2].horas[1]+data[i].dedicacion[2].horas[2])/3)*20,
          12);
    }
    }
      else{
      clear();
      background(220);
  for (i = 0; i < 8; i++){
    strokeWeight(2);
    stroke(100, 150, 200);
    line(250+i*100,485,250+i*100,515);
    fill(0);
    strokeWeight(0);
    textSize(11);
    textAlign(CENTER);
    text(data[i].nombre, 211+100*i, 525, 80, 200);
  }
          
    for (h = 0; h < 9; h++){
    strokeWeight(2);
    stroke(100, 150, 200);
    line(135,460-40*h,165,460-40*h);
    fill(0);
    strokeWeight(0);
    textSize(12);
    textAlign(CENTER);
    text(2+2*h, 83, 453-40*h, 80, 200);
  }
        
    textSize(14);
    text('HORAS',127,75,50,50);
    text('CURSOS',1022,492,50,50);
          
  stroke (100, 150, 200);
  strokeWeight(4);
  line (150,500,1000,500);
  line (150,500,150,100);
    
   if (countFS == 2){
      
    for (i = 0; i < 8; i++){
    
    strokeWeight(1);
    fill(100, 150, 200, 20);
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[0].horas[0]+data[0].dedicacion[0].horas[1]+data[0].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[0].horas[0]+data[1].dedicacion[0].horas[1]+data[1].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[0].horas[0]+data[2].dedicacion[0].horas[1]+data[2].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[0].horas[0]+data[3].dedicacion[0].horas[1]+data[3].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[0].horas[0]+data[4].dedicacion[0].horas[1]+data[4].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[0].horas[0]+data[5].dedicacion[0].horas[1]+data[5].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[0].horas[0]+data[6].dedicacion[0].horas[1]+data[6].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[0].horas[0]+data[7].dedicacion[0].horas[1]+data[7].dedicacion[0].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(100, 150, 200);
    circle(250+i*100,
          500-((data[i].dedicacion[0].horas[0]+data[i].dedicacion[0].horas[1]+data[i].dedicacion[0].horas[2])/3)*20,
          12);
      }
    }
          
    if(countTL == 2){
         for (i = 0; i < 8; i++){
    stroke(100, 200, 100);
    strokeWeight(1);
    fill(100, 200, 100, 20);
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[1].horas[0]+data[0].dedicacion[1].horas[1]+data[0].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[1].horas[0]+data[1].dedicacion[1].horas[1]+data[1].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[1].horas[0]+data[2].dedicacion[1].horas[1]+data[2].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[1].horas[0]+data[3].dedicacion[1].horas[1]+data[3].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[1].horas[0]+data[4].dedicacion[1].horas[1]+data[4].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[1].horas[0]+data[5].dedicacion[1].horas[1]+data[5].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[1].horas[0]+data[6].dedicacion[1].horas[1]+data[6].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[1].horas[0]+data[7].dedicacion[1].horas[1]+data[7].dedicacion[1].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(100, 200, 100);
    circle(250+i*100,
          500-((data[i].dedicacion[1].horas[0]+data[i].dedicacion[1].horas[1]+data[i].dedicacion[1].horas[2])/3)*20,
          12);
    }
    }
          
    if (countVE == 2){
    for (i = 0; i < 8; i++){
    stroke(200, 100, 200);
    strokeWeight(1);
    fill(200, 100, 200, 20);
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[3].horas[0]+data[0].dedicacion[3].horas[1]+data[0].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[3].horas[0]+data[1].dedicacion[3].horas[1]+data[1].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[3].horas[0]+data[2].dedicacion[3].horas[1]+data[2].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[3].horas[0]+data[3].dedicacion[3].horas[1]+data[3].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[3].horas[0]+data[4].dedicacion[3].horas[1]+data[4].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[3].horas[0]+data[5].dedicacion[3].horas[1]+data[5].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[3].horas[0]+data[6].dedicacion[3].horas[1]+data[6].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[3].horas[0]+data[7].dedicacion[3].horas[1]+data[7].dedicacion[3].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(200, 100, 200);
    circle(250+i*100,
          500-((data[i].dedicacion[3].horas[0]+data[i].dedicacion[3].horas[1]+data[i].dedicacion[3].horas[2])/3)*20,
          12);
    }
    }
        
    if (countDR == 2){
    for (i = 0; i < 8; i++){
    stroke(200, 200, 100);
    strokeWeight(1);
    fill(200, 200, 100, 20);
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[4].horas[0]+data[0].dedicacion[4].horas[1]+data[0].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[4].horas[0]+data[1].dedicacion[4].horas[1]+data[1].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[4].horas[0]+data[2].dedicacion[4].horas[1]+data[2].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[4].horas[0]+data[3].dedicacion[4].horas[1]+data[3].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[4].horas[0]+data[4].dedicacion[4].horas[1]+data[4].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[4].horas[0]+data[5].dedicacion[4].horas[1]+data[5].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[4].horas[0]+data[6].dedicacion[4].horas[1]+data[6].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[4].horas[0]+data[7].dedicacion[4].horas[1]+data[7].dedicacion[4].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(200, 200, 100);
    circle(250+i*100,
          500-((data[i].dedicacion[4].horas[0]+data[i].dedicacion[4].horas[1]+data[i].dedicacion[4].horas[2])/3)*20,
          12);
    }
    }
    
    if (countRS == 2){
    for (i = 0; i < 8; i++){
    stroke(200, 50, 150);
    strokeWeight(1);
    fill(200, 50, 150, 20); 
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[5].horas[0]+data[0].dedicacion[5].horas[1]+data[0].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[5].horas[0]+data[1].dedicacion[5].horas[1]+data[1].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[5].horas[0]+data[2].dedicacion[5].horas[1]+data[2].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[5].horas[0]+data[3].dedicacion[5].horas[1]+data[3].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[5].horas[0]+data[4].dedicacion[5].horas[1]+data[4].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[5].horas[0]+data[5].dedicacion[5].horas[1]+data[5].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[5].horas[0]+data[6].dedicacion[5].horas[1]+data[6].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[5].horas[0]+data[7].dedicacion[5].horas[1]+data[7].dedicacion[5].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(200, 50, 150);
    circle(250+i*100,
          500-((data[i].dedicacion[5].horas[0]+data[i].dedicacion[5].horas[1]+data[i].dedicacion[5].horas[2])/3)*20,
          12);
    }
    }
        
    if (countCC == 2){
    for (i = 0; i < 8; i++){
    stroke(50, 150, 0);
    strokeWeight(1);
    fill(50, 150, 0, 20);
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[6].horas[0]+data[0].dedicacion[6].horas[1]+data[0].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[6].horas[0]+data[1].dedicacion[6].horas[1]+data[1].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[6].horas[0]+data[2].dedicacion[6].horas[1]+data[2].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[6].horas[0]+data[3].dedicacion[6].horas[1]+data[3].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[6].horas[0]+data[4].dedicacion[6].horas[1]+data[4].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[6].horas[0]+data[5].dedicacion[6].horas[1]+data[5].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[6].horas[0]+data[6].dedicacion[6].horas[1]+data[6].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[6].horas[0]+data[7].dedicacion[6].horas[1]+data[7].dedicacion[6].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(50, 150, 0);
    circle(250+i*100,
          500-((data[i].dedicacion[6].horas[0]+data[i].dedicacion[6].horas[1]+data[i].dedicacion[6].horas[2])/3)*20,
          12);
    }
    }
          
    }
  if (countFC > 2){ 
   countFC = 1;
    }
}

function blanco2(){
        
      }

        
        
// Valentina Espinoza--------------------------------------------------------------------------------------------------------------------


        
function negro3(){
  countVE += 1;
    
    if (countVE == 2){
    for (i = 0; i < 8; i++){
    stroke(200, 100, 200);
    strokeWeight(1);
    fill(200, 100, 200, 20);
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[3].horas[0]+data[0].dedicacion[3].horas[1]+data[0].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[3].horas[0]+data[1].dedicacion[3].horas[1]+data[1].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[3].horas[0]+data[2].dedicacion[3].horas[1]+data[2].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[3].horas[0]+data[3].dedicacion[3].horas[1]+data[3].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[3].horas[0]+data[4].dedicacion[3].horas[1]+data[4].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[3].horas[0]+data[5].dedicacion[3].horas[1]+data[5].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[3].horas[0]+data[6].dedicacion[3].horas[1]+data[6].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[3].horas[0]+data[7].dedicacion[3].horas[1]+data[7].dedicacion[3].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(200, 100, 200);
    circle(250+i*100,
          500-((data[i].dedicacion[3].horas[0]+data[i].dedicacion[3].horas[1]+data[i].dedicacion[3].horas[2])/3)*20,
          12);
    }
    }
      else{
      clear();
      background(220);
  for (i = 0; i < 8; i++){
    strokeWeight(2);
    stroke(100, 150, 200);
    line(250+i*100,485,250+i*100,515);
    fill(0);
    strokeWeight(0);
    textSize(11);
    textAlign(CENTER);
    text(data[i].nombre, 211+100*i, 525, 80, 200);
  }
          
    for (h = 0; h < 9; h++){
    strokeWeight(2);
    stroke(100, 150, 200);
    line(135,460-40*h,165,460-40*h);
    fill(0);
    strokeWeight(0);
    textSize(12);
    textAlign(CENTER);
    text(2+2*h, 83, 453-40*h, 80, 200);
  }
        
    textSize(14);
    text('HORAS',127,75,50,50);
    text('CURSOS',1022,492,50,50);
          
  stroke (100, 150, 200);
  strokeWeight(4);
  line (150,500,1000,500);
  line (150,500,150,100);
    
    if (countFS == 2){
      
    for (i = 0; i < 8; i++){
    
    strokeWeight(1);
    fill(100, 150, 200, 20);
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[0].horas[0]+data[0].dedicacion[0].horas[1]+data[0].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[0].horas[0]+data[1].dedicacion[0].horas[1]+data[1].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[0].horas[0]+data[2].dedicacion[0].horas[1]+data[2].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[0].horas[0]+data[3].dedicacion[0].horas[1]+data[3].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[0].horas[0]+data[4].dedicacion[0].horas[1]+data[4].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[0].horas[0]+data[5].dedicacion[0].horas[1]+data[5].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[0].horas[0]+data[6].dedicacion[0].horas[1]+data[6].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[0].horas[0]+data[7].dedicacion[0].horas[1]+data[7].dedicacion[0].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(100, 150, 200);
    circle(250+i*100,
          500-((data[i].dedicacion[0].horas[0]+data[i].dedicacion[0].horas[1]+data[i].dedicacion[0].horas[2])/3)*20,
          12);
      }
    }
          
    if(countTL == 2){
         for (i = 0; i < 8; i++){
    stroke(100, 200, 100);
    strokeWeight(1);
    fill(100, 200, 100, 20);
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[1].horas[0]+data[0].dedicacion[1].horas[1]+data[0].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[1].horas[0]+data[1].dedicacion[1].horas[1]+data[1].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[1].horas[0]+data[2].dedicacion[1].horas[1]+data[2].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[1].horas[0]+data[3].dedicacion[1].horas[1]+data[3].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[1].horas[0]+data[4].dedicacion[1].horas[1]+data[4].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[1].horas[0]+data[5].dedicacion[1].horas[1]+data[5].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[1].horas[0]+data[6].dedicacion[1].horas[1]+data[6].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[1].horas[0]+data[7].dedicacion[1].horas[1]+data[7].dedicacion[1].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(100, 200, 100);
    circle(250+i*100,
          500-((data[i].dedicacion[1].horas[0]+data[i].dedicacion[1].horas[1]+data[i].dedicacion[1].horas[2])/3)*20,
          12);
    }
    }
        
   if (countFC == 2){
    for (i = 0; i < 8; i++){
    stroke(200, 100, 100);
    strokeWeight(1);
    fill(200, 100, 100, 20);
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[2].horas[0]+data[0].dedicacion[2].horas[1]+data[0].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[2].horas[0]+data[1].dedicacion[2].horas[1]+data[1].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[2].horas[0]+data[2].dedicacion[2].horas[1]+data[2].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[2].horas[0]+data[3].dedicacion[2].horas[1]+data[3].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[2].horas[0]+data[4].dedicacion[2].horas[1]+data[4].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[2].horas[0]+data[5].dedicacion[2].horas[1]+data[5].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[2].horas[0]+data[6].dedicacion[2].horas[1]+data[6].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[2].horas[0]+data[7].dedicacion[2].horas[1]+data[7].dedicacion[2].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(200, 100, 100);
    circle(250+i*100,
          500-((data[i].dedicacion[2].horas[0]+data[i].dedicacion[2].horas[1]+data[i].dedicacion[2].horas[2])/3)*20,
          12);
    }
    }
          
    if (countDR == 2){
    for (i = 0; i < 8; i++){
    stroke(200, 200, 100);
    strokeWeight(1);
    fill(200, 200, 100, 20);
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[4].horas[0]+data[0].dedicacion[4].horas[1]+data[0].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[4].horas[0]+data[1].dedicacion[4].horas[1]+data[1].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[4].horas[0]+data[2].dedicacion[4].horas[1]+data[2].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[4].horas[0]+data[3].dedicacion[4].horas[1]+data[3].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[4].horas[0]+data[4].dedicacion[4].horas[1]+data[4].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[4].horas[0]+data[5].dedicacion[4].horas[1]+data[5].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[4].horas[0]+data[6].dedicacion[4].horas[1]+data[6].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[4].horas[0]+data[7].dedicacion[4].horas[1]+data[7].dedicacion[4].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(200, 200, 100);
    circle(250+i*100,
          500-((data[i].dedicacion[4].horas[0]+data[i].dedicacion[4].horas[1]+data[i].dedicacion[4].horas[2])/3)*20,
          12);
    }
    }
          
    if (countRS == 2){
    for (i = 0; i < 8; i++){
    stroke(200, 50, 150);
    strokeWeight(1);
    fill(200, 50, 150, 20); 
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[5].horas[0]+data[0].dedicacion[5].horas[1]+data[0].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[5].horas[0]+data[1].dedicacion[5].horas[1]+data[1].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[5].horas[0]+data[2].dedicacion[5].horas[1]+data[2].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[5].horas[0]+data[3].dedicacion[5].horas[1]+data[3].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[5].horas[0]+data[4].dedicacion[5].horas[1]+data[4].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[5].horas[0]+data[5].dedicacion[5].horas[1]+data[5].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[5].horas[0]+data[6].dedicacion[5].horas[1]+data[6].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[5].horas[0]+data[7].dedicacion[5].horas[1]+data[7].dedicacion[5].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(200, 50, 150);
    circle(250+i*100,
          500-((data[i].dedicacion[5].horas[0]+data[i].dedicacion[5].horas[1]+data[i].dedicacion[5].horas[2])/3)*20,
          12);
    }
    }
        
    if (countCC == 2){
    for (i = 0; i < 8; i++){
    stroke(50, 150, 0);
    strokeWeight(1);
    fill(50, 150, 0, 20);
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[6].horas[0]+data[0].dedicacion[6].horas[1]+data[0].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[6].horas[0]+data[1].dedicacion[6].horas[1]+data[1].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[6].horas[0]+data[2].dedicacion[6].horas[1]+data[2].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[6].horas[0]+data[3].dedicacion[6].horas[1]+data[3].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[6].horas[0]+data[4].dedicacion[6].horas[1]+data[4].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[6].horas[0]+data[5].dedicacion[6].horas[1]+data[5].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[6].horas[0]+data[6].dedicacion[6].horas[1]+data[6].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[6].horas[0]+data[7].dedicacion[6].horas[1]+data[7].dedicacion[6].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(50, 150, 0);
    circle(250+i*100,
          500-((data[i].dedicacion[6].horas[0]+data[i].dedicacion[6].horas[1]+data[i].dedicacion[6].horas[2])/3)*20,
          12);
    }
    }
          
    }
  if (countVE > 2){ 
   countVE = 1;
    }
}

function blanco3(){
        
      }



// Deianira Reyes--------------------------------------------------------------------------------------------------------------------
        
        
        
function negro4(){
  countDR += 1;
    
    if (countDR == 2){
    for (i = 0; i < 8; i++){
    stroke(200, 200, 100);
    strokeWeight(1);
    fill(200, 200, 100, 20);
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[4].horas[0]+data[0].dedicacion[4].horas[1]+data[0].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[4].horas[0]+data[1].dedicacion[4].horas[1]+data[1].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[4].horas[0]+data[2].dedicacion[4].horas[1]+data[2].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[4].horas[0]+data[3].dedicacion[4].horas[1]+data[3].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[4].horas[0]+data[4].dedicacion[4].horas[1]+data[4].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[4].horas[0]+data[5].dedicacion[4].horas[1]+data[5].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[4].horas[0]+data[6].dedicacion[4].horas[1]+data[6].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[4].horas[0]+data[7].dedicacion[4].horas[1]+data[7].dedicacion[4].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(200, 200, 100);
    circle(250+i*100,
          500-((data[i].dedicacion[4].horas[0]+data[i].dedicacion[4].horas[1]+data[i].dedicacion[4].horas[2])/3)*20,
          12);
    }
    }
      else{
      clear();
      background(220);
  for (i = 0; i < 8; i++){
    strokeWeight(2);
    stroke(100, 150, 200);
    line(250+i*100,485,250+i*100,515);
    fill(0);
    strokeWeight(0);
    textSize(11);
    textAlign(CENTER);
    text(data[i].nombre, 211+100*i, 525, 80, 200);
  }
          
    for (h = 0; h < 9; h++){
    strokeWeight(2);
    stroke(100, 150, 200);
    line(135,460-40*h,165,460-40*h);
    fill(0);
    strokeWeight(0);
    textSize(12);
    textAlign(CENTER);
    text(2+2*h, 83, 453-40*h, 80, 200);
  }
        
    textSize(14);
    text('HORAS',127,75,50,50);
    text('CURSOS',1022,492,50,50);
          
  stroke (100, 150, 200);
  strokeWeight(4);
  line (150,500,1000,500);
  line (150,500,150,100);
    
    if (countFS == 2){
      
    for (i = 0; i < 8; i++){
    
    strokeWeight(1);
    fill(100, 150, 200, 20);
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[0].horas[0]+data[0].dedicacion[0].horas[1]+data[0].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[0].horas[0]+data[1].dedicacion[0].horas[1]+data[1].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[0].horas[0]+data[2].dedicacion[0].horas[1]+data[2].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[0].horas[0]+data[3].dedicacion[0].horas[1]+data[3].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[0].horas[0]+data[4].dedicacion[0].horas[1]+data[4].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[0].horas[0]+data[5].dedicacion[0].horas[1]+data[5].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[0].horas[0]+data[6].dedicacion[0].horas[1]+data[6].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[0].horas[0]+data[7].dedicacion[0].horas[1]+data[7].dedicacion[0].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(100, 150, 200);
    circle(250+i*100,
          500-((data[i].dedicacion[0].horas[0]+data[i].dedicacion[0].horas[1]+data[i].dedicacion[0].horas[2])/3)*20,
          12);
      }
    }
          
    if(countTL == 2){
         for (i = 0; i < 8; i++){
    stroke(100, 200, 100);
    strokeWeight(1);
    fill(100, 200, 100, 20);
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[1].horas[0]+data[0].dedicacion[1].horas[1]+data[0].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[1].horas[0]+data[1].dedicacion[1].horas[1]+data[1].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[1].horas[0]+data[2].dedicacion[1].horas[1]+data[2].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[1].horas[0]+data[3].dedicacion[1].horas[1]+data[3].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[1].horas[0]+data[4].dedicacion[1].horas[1]+data[4].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[1].horas[0]+data[5].dedicacion[1].horas[1]+data[5].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[1].horas[0]+data[6].dedicacion[1].horas[1]+data[6].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[1].horas[0]+data[7].dedicacion[1].horas[1]+data[7].dedicacion[1].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(100, 200, 100);
    circle(250+i*100,
          500-((data[i].dedicacion[1].horas[0]+data[i].dedicacion[1].horas[1]+data[i].dedicacion[1].horas[2])/3)*20,
          12);
    }
    }
        
   if (countFC == 2){
    for (i = 0; i < 8; i++){
    stroke(200, 100, 100);
    strokeWeight(1);
    fill(200, 100, 100, 20);
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[2].horas[0]+data[0].dedicacion[2].horas[1]+data[0].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[2].horas[0]+data[1].dedicacion[2].horas[1]+data[1].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[2].horas[0]+data[2].dedicacion[2].horas[1]+data[2].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[2].horas[0]+data[3].dedicacion[2].horas[1]+data[3].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[2].horas[0]+data[4].dedicacion[2].horas[1]+data[4].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[2].horas[0]+data[5].dedicacion[2].horas[1]+data[5].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[2].horas[0]+data[6].dedicacion[2].horas[1]+data[6].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[2].horas[0]+data[7].dedicacion[2].horas[1]+data[7].dedicacion[2].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(200, 100, 100);
    circle(250+i*100,
          500-((data[i].dedicacion[2].horas[0]+data[i].dedicacion[2].horas[1]+data[i].dedicacion[2].horas[2])/3)*20,
          12);
    }
    }
          
    if (countVE == 2){
    for (i = 0; i < 8; i++){
    stroke(200, 100, 200);
    strokeWeight(1);
    fill(200, 100, 200, 20);
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[3].horas[0]+data[0].dedicacion[3].horas[1]+data[0].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[3].horas[0]+data[1].dedicacion[3].horas[1]+data[1].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[3].horas[0]+data[2].dedicacion[3].horas[1]+data[2].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[3].horas[0]+data[3].dedicacion[3].horas[1]+data[3].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[3].horas[0]+data[4].dedicacion[3].horas[1]+data[4].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[3].horas[0]+data[5].dedicacion[3].horas[1]+data[5].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[3].horas[0]+data[6].dedicacion[3].horas[1]+data[6].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[3].horas[0]+data[7].dedicacion[3].horas[1]+data[7].dedicacion[3].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(200, 100, 200);
    circle(250+i*100,
          500-((data[i].dedicacion[3].horas[0]+data[i].dedicacion[3].horas[1]+data[i].dedicacion[3].horas[2])/3)*20,
          12);
    }
    }
    
    if (countRS == 2){
    for (i = 0; i < 8; i++){
    stroke(200, 50, 150);
    strokeWeight(1);
    fill(200, 50, 150, 20); 
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[5].horas[0]+data[0].dedicacion[5].horas[1]+data[0].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[5].horas[0]+data[1].dedicacion[5].horas[1]+data[1].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[5].horas[0]+data[2].dedicacion[5].horas[1]+data[2].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[5].horas[0]+data[3].dedicacion[5].horas[1]+data[3].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[5].horas[0]+data[4].dedicacion[5].horas[1]+data[4].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[5].horas[0]+data[5].dedicacion[5].horas[1]+data[5].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[5].horas[0]+data[6].dedicacion[5].horas[1]+data[6].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[5].horas[0]+data[7].dedicacion[5].horas[1]+data[7].dedicacion[5].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(200, 50, 150);
    circle(250+i*100,
          500-((data[i].dedicacion[5].horas[0]+data[i].dedicacion[5].horas[1]+data[i].dedicacion[5].horas[2])/3)*20,
          12);
    }
    }
        
    if (countCC == 2){
    for (i = 0; i < 8; i++){
    stroke(50, 150, 0);
    strokeWeight(1);
    fill(50, 150, 0, 20);
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[6].horas[0]+data[0].dedicacion[6].horas[1]+data[0].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[6].horas[0]+data[1].dedicacion[6].horas[1]+data[1].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[6].horas[0]+data[2].dedicacion[6].horas[1]+data[2].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[6].horas[0]+data[3].dedicacion[6].horas[1]+data[3].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[6].horas[0]+data[4].dedicacion[6].horas[1]+data[4].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[6].horas[0]+data[5].dedicacion[6].horas[1]+data[5].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[6].horas[0]+data[6].dedicacion[6].horas[1]+data[6].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[6].horas[0]+data[7].dedicacion[6].horas[1]+data[7].dedicacion[6].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(50, 150, 0);
    circle(250+i*100,
          500-((data[i].dedicacion[6].horas[0]+data[i].dedicacion[6].horas[1]+data[i].dedicacion[6].horas[2])/3)*20,
          12);
    }
    }
    
    }
    
    if (countDR > 2){ 
   countDR = 1;
    }
        
}

function blanco4(){
        
      }





////////////////////////////////// Ramiro Salinas////////////////////





function negro5(){
    countRS += 1;
    
    if (countRS == 2){
    for (i = 0; i < 8; i++){
    stroke(200, 50, 150);
    strokeWeight(1);
    fill(200, 50, 150, 20); 
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[5].horas[0]+data[0].dedicacion[5].horas[1]+data[0].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[5].horas[0]+data[1].dedicacion[5].horas[1]+data[1].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[5].horas[0]+data[2].dedicacion[5].horas[1]+data[2].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[5].horas[0]+data[3].dedicacion[5].horas[1]+data[3].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[5].horas[0]+data[4].dedicacion[5].horas[1]+data[4].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[5].horas[0]+data[5].dedicacion[5].horas[1]+data[5].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[5].horas[0]+data[6].dedicacion[5].horas[1]+data[6].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[5].horas[0]+data[7].dedicacion[5].horas[1]+data[7].dedicacion[5].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(200, 50, 150);
    circle(250+i*100,
          500-((data[i].dedicacion[5].horas[0]+data[i].dedicacion[5].horas[1]+data[i].dedicacion[5].horas[2])/3)*20,
          12);
    }
    }
    
    else{
      clear();
      background(220);
  for (i = 0; i < 8; i++){
    strokeWeight(2);
    stroke(100, 150, 200);
    line(250+i*100,485,250+i*100,515);
    fill(0);
    strokeWeight(0);
    textSize(11);
    textAlign(CENTER);
    text(data[i].nombre, 211+100*i, 525, 80, 200);
  }
          
    for (h = 0; h < 9; h++){
    strokeWeight(2);
    stroke(100, 150, 200);
    line(135,460-40*h,165,460-40*h);
    fill(0);
    strokeWeight(0);
    textSize(12);
    textAlign(CENTER);
    text(2+2*h, 83, 453-40*h, 80, 200);
  }
        
    textSize(14);
    text('HORAS',127,75,50,50);
    text('CURSOS',1022,492,50,50);
          
  stroke (100, 150, 200);
  strokeWeight(4);
  line (150,500,1000,500);
  line (150,500,150,100);
        
    if (countFS == 2){
      
    for (i = 0; i < 8; i++){
    
    strokeWeight(1);
    fill(100, 150, 200, 20);
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[0].horas[0]+data[0].dedicacion[0].horas[1]+data[0].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[0].horas[0]+data[1].dedicacion[0].horas[1]+data[1].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[0].horas[0]+data[2].dedicacion[0].horas[1]+data[2].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[0].horas[0]+data[3].dedicacion[0].horas[1]+data[3].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[0].horas[0]+data[4].dedicacion[0].horas[1]+data[4].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[0].horas[0]+data[5].dedicacion[0].horas[1]+data[5].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[0].horas[0]+data[6].dedicacion[0].horas[1]+data[6].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[0].horas[0]+data[7].dedicacion[0].horas[1]+data[7].dedicacion[0].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(100, 150, 200);
    circle(250+i*100,
          500-((data[i].dedicacion[0].horas[0]+data[i].dedicacion[0].horas[1]+data[i].dedicacion[0].horas[2])/3)*20,
          12);
      }
    }
          
    if(countTL == 2){
         for (i = 0; i < 8; i++){
    stroke(100, 200, 100);
    strokeWeight(1);
    fill(100, 200, 100, 20);
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[1].horas[0]+data[0].dedicacion[1].horas[1]+data[0].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[1].horas[0]+data[1].dedicacion[1].horas[1]+data[1].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[1].horas[0]+data[2].dedicacion[1].horas[1]+data[2].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[1].horas[0]+data[3].dedicacion[1].horas[1]+data[3].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[1].horas[0]+data[4].dedicacion[1].horas[1]+data[4].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[1].horas[0]+data[5].dedicacion[1].horas[1]+data[5].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[1].horas[0]+data[6].dedicacion[1].horas[1]+data[6].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[1].horas[0]+data[7].dedicacion[1].horas[1]+data[7].dedicacion[1].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(100, 200, 100);
    circle(250+i*100,
          500-((data[i].dedicacion[1].horas[0]+data[i].dedicacion[1].horas[1]+data[i].dedicacion[1].horas[2])/3)*20,
          12);
    }
    }
        
   if (countFC == 2){
    for (i = 0; i < 8; i++){
    stroke(200, 100, 100);
    strokeWeight(1);
    fill(200, 100, 100, 20);
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[2].horas[0]+data[0].dedicacion[2].horas[1]+data[0].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[2].horas[0]+data[1].dedicacion[2].horas[1]+data[1].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[2].horas[0]+data[2].dedicacion[2].horas[1]+data[2].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[2].horas[0]+data[3].dedicacion[2].horas[1]+data[3].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[2].horas[0]+data[4].dedicacion[2].horas[1]+data[4].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[2].horas[0]+data[5].dedicacion[2].horas[1]+data[5].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[2].horas[0]+data[6].dedicacion[2].horas[1]+data[6].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[2].horas[0]+data[7].dedicacion[2].horas[1]+data[7].dedicacion[2].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(200, 100, 100);
    circle(250+i*100,
          500-((data[i].dedicacion[2].horas[0]+data[i].dedicacion[2].horas[1]+data[i].dedicacion[2].horas[2])/3)*20,
          12);
    }
    }
          
    if (countVE == 2){
    for (i = 0; i < 8; i++){
    stroke(200, 100, 200);
    strokeWeight(1);
    fill(200, 100, 200, 20);
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[3].horas[0]+data[0].dedicacion[3].horas[1]+data[0].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[3].horas[0]+data[1].dedicacion[3].horas[1]+data[1].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[3].horas[0]+data[2].dedicacion[3].horas[1]+data[2].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[3].horas[0]+data[3].dedicacion[3].horas[1]+data[3].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[3].horas[0]+data[4].dedicacion[3].horas[1]+data[4].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[3].horas[0]+data[5].dedicacion[3].horas[1]+data[5].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[3].horas[0]+data[6].dedicacion[3].horas[1]+data[6].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[3].horas[0]+data[7].dedicacion[3].horas[1]+data[7].dedicacion[3].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(200, 100, 200);
    circle(250+i*100,
          500-((data[i].dedicacion[3].horas[0]+data[i].dedicacion[3].horas[1]+data[i].dedicacion[3].horas[2])/3)*20,
          12);
    }
    }
        
    if (countDR == 2){
    for (i = 0; i < 8; i++){
    stroke(200, 200, 100);
    strokeWeight(1);
    fill(200, 200, 100, 20);
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[4].horas[0]+data[0].dedicacion[4].horas[1]+data[0].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[4].horas[0]+data[1].dedicacion[4].horas[1]+data[1].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[4].horas[0]+data[2].dedicacion[4].horas[1]+data[2].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[4].horas[0]+data[3].dedicacion[4].horas[1]+data[3].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[4].horas[0]+data[4].dedicacion[4].horas[1]+data[4].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[4].horas[0]+data[5].dedicacion[4].horas[1]+data[5].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[4].horas[0]+data[6].dedicacion[4].horas[1]+data[6].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[4].horas[0]+data[7].dedicacion[4].horas[1]+data[7].dedicacion[4].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(200, 200, 100);
    circle(250+i*100,
          500-((data[i].dedicacion[4].horas[0]+data[i].dedicacion[4].horas[1]+data[i].dedicacion[4].horas[2])/3)*20,
          12);
    }
    }
        
    if (countCC == 2){
    for (i = 0; i < 8; i++){
    stroke(50, 150, 0);
    strokeWeight(1);
    fill(50, 150, 0, 20);
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[6].horas[0]+data[0].dedicacion[6].horas[1]+data[0].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[6].horas[0]+data[1].dedicacion[6].horas[1]+data[1].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[6].horas[0]+data[2].dedicacion[6].horas[1]+data[2].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[6].horas[0]+data[3].dedicacion[6].horas[1]+data[3].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[6].horas[0]+data[4].dedicacion[6].horas[1]+data[4].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[6].horas[0]+data[5].dedicacion[6].horas[1]+data[5].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[6].horas[0]+data[6].dedicacion[6].horas[1]+data[6].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[6].horas[0]+data[7].dedicacion[6].horas[1]+data[7].dedicacion[6].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(50, 150, 0);
    circle(250+i*100,
          500-((data[i].dedicacion[6].horas[0]+data[i].dedicacion[6].horas[1]+data[i].dedicacion[6].horas[2])/3)*20,
          12);
    }
    }
          
    }
    
    if (countRS > 2){ 
   countRS = 1;
    }
    
}



function blanco5(){
        
      }





////////////////////////Carolina Caceres ////////////////////////////////////






function negro6(){
        countCC += 1;
    
    if (countCC == 2){
    for (i = 0; i < 8; i++){
    stroke(50, 150, 0);
    strokeWeight(1);
    fill(50, 150, 0, 20);
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[6].horas[0]+data[0].dedicacion[6].horas[1]+data[0].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[6].horas[0]+data[1].dedicacion[6].horas[1]+data[1].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[6].horas[0]+data[2].dedicacion[6].horas[1]+data[2].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[6].horas[0]+data[3].dedicacion[6].horas[1]+data[3].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[6].horas[0]+data[4].dedicacion[6].horas[1]+data[4].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[6].horas[0]+data[5].dedicacion[6].horas[1]+data[5].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[6].horas[0]+data[6].dedicacion[6].horas[1]+data[6].dedicacion[6].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[6].horas[0]+data[7].dedicacion[6].horas[1]+data[7].dedicacion[6].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(50, 150, 0);
    circle(250+i*100,
          500-((data[i].dedicacion[6].horas[0]+data[i].dedicacion[6].horas[1]+data[i].dedicacion[6].horas[2])/3)*20,
          12);
    }
    }
    
    else{
      clear();
      background(220);
  for (i = 0; i < 8; i++){
    strokeWeight(2);
    stroke(100, 150, 200);
    line(250+i*100,485,250+i*100,515);
    fill(0);
    strokeWeight(0);
    textSize(11);
    textAlign(CENTER);
    text(data[i].nombre, 211+100*i, 525, 80, 200);
  }
          
    for (h = 0; h < 9; h++){
    strokeWeight(2);
    stroke(100, 150, 200);
    line(135,460-40*h,165,460-40*h);
    fill(0);
    strokeWeight(0);
    textSize(12);
    textAlign(CENTER);
    text(2+2*h, 83, 453-40*h, 80, 200);
  }
        
    textSize(14);
    text('HORAS',127,75,50,50);
    text('CURSOS',1022,492,50,50);
          
  stroke (100, 150, 200);
  strokeWeight(4);
  line (150,500,1000,500);
  line (150,500,150,100);
        
    if (countFS == 2){
      
    for (i = 0; i < 8; i++){
    
    strokeWeight(1);
    fill(100, 150, 200, 20);
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[0].horas[0]+data[0].dedicacion[0].horas[1]+data[0].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[0].horas[0]+data[1].dedicacion[0].horas[1]+data[1].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[0].horas[0]+data[2].dedicacion[0].horas[1]+data[2].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[0].horas[0]+data[3].dedicacion[0].horas[1]+data[3].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[0].horas[0]+data[4].dedicacion[0].horas[1]+data[4].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[0].horas[0]+data[5].dedicacion[0].horas[1]+data[5].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[0].horas[0]+data[6].dedicacion[0].horas[1]+data[6].dedicacion[0].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[0].horas[0]+data[7].dedicacion[0].horas[1]+data[7].dedicacion[0].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(100, 150, 200);
    circle(250+i*100,
          500-((data[i].dedicacion[0].horas[0]+data[i].dedicacion[0].horas[1]+data[i].dedicacion[0].horas[2])/3)*20,
          12);
      }
    }
          
    if(countTL == 2){
         for (i = 0; i < 8; i++){
    stroke(100, 200, 100);
    strokeWeight(1);
    fill(100, 200, 100, 20);
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[1].horas[0]+data[0].dedicacion[1].horas[1]+data[0].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[1].horas[0]+data[1].dedicacion[1].horas[1]+data[1].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[1].horas[0]+data[2].dedicacion[1].horas[1]+data[2].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[1].horas[0]+data[3].dedicacion[1].horas[1]+data[3].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[1].horas[0]+data[4].dedicacion[1].horas[1]+data[4].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[1].horas[0]+data[5].dedicacion[1].horas[1]+data[5].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[1].horas[0]+data[6].dedicacion[1].horas[1]+data[6].dedicacion[1].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[1].horas[0]+data[7].dedicacion[1].horas[1]+data[7].dedicacion[1].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(100, 200, 100);
    circle(250+i*100,
          500-((data[i].dedicacion[1].horas[0]+data[i].dedicacion[1].horas[1]+data[i].dedicacion[1].horas[2])/3)*20,
          12);
    }
    }
        
   if (countFC == 2){
    for (i = 0; i < 8; i++){
    stroke(200, 100, 100);
    strokeWeight(1);
    fill(200, 100, 100, 20);
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[2].horas[0]+data[0].dedicacion[2].horas[1]+data[0].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[2].horas[0]+data[1].dedicacion[2].horas[1]+data[1].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[2].horas[0]+data[2].dedicacion[2].horas[1]+data[2].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[2].horas[0]+data[3].dedicacion[2].horas[1]+data[3].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[2].horas[0]+data[4].dedicacion[2].horas[1]+data[4].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[2].horas[0]+data[5].dedicacion[2].horas[1]+data[5].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[2].horas[0]+data[6].dedicacion[2].horas[1]+data[6].dedicacion[2].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[2].horas[0]+data[7].dedicacion[2].horas[1]+data[7].dedicacion[2].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(200, 100, 100);
    circle(250+i*100,
          500-((data[i].dedicacion[2].horas[0]+data[i].dedicacion[2].horas[1]+data[i].dedicacion[2].horas[2])/3)*20,
          12);
    }
    }
          
    if (countVE == 2){
    for (i = 0; i < 8; i++){
    stroke(200, 100, 200);
    strokeWeight(1);
    fill(200, 100, 200, 20);
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[3].horas[0]+data[0].dedicacion[3].horas[1]+data[0].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[3].horas[0]+data[1].dedicacion[3].horas[1]+data[1].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[3].horas[0]+data[2].dedicacion[3].horas[1]+data[2].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[3].horas[0]+data[3].dedicacion[3].horas[1]+data[3].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[3].horas[0]+data[4].dedicacion[3].horas[1]+data[4].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[3].horas[0]+data[5].dedicacion[3].horas[1]+data[5].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[3].horas[0]+data[6].dedicacion[3].horas[1]+data[6].dedicacion[3].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[3].horas[0]+data[7].dedicacion[3].horas[1]+data[7].dedicacion[3].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(200, 100, 200);
    circle(250+i*100,
          500-((data[i].dedicacion[3].horas[0]+data[i].dedicacion[3].horas[1]+data[i].dedicacion[3].horas[2])/3)*20,
          12);
    }
    }
        
    if (countDR == 2){
    for (i = 0; i < 8; i++){
    stroke(200, 200, 100);
    strokeWeight(1);
    fill(200, 200, 100, 20);
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[4].horas[0]+data[0].dedicacion[4].horas[1]+data[0].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[4].horas[0]+data[1].dedicacion[4].horas[1]+data[1].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[4].horas[0]+data[2].dedicacion[4].horas[1]+data[2].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[4].horas[0]+data[3].dedicacion[4].horas[1]+data[3].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[4].horas[0]+data[4].dedicacion[4].horas[1]+data[4].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[4].horas[0]+data[5].dedicacion[4].horas[1]+data[5].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[4].horas[0]+data[6].dedicacion[4].horas[1]+data[6].dedicacion[4].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[4].horas[0]+data[7].dedicacion[4].horas[1]+data[7].dedicacion[4].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(200, 200, 100);
    circle(250+i*100,
          500-((data[i].dedicacion[4].horas[0]+data[i].dedicacion[4].horas[1]+data[i].dedicacion[4].horas[2])/3)*20,
          12);
    }
    }
        
    if (countRS == 2){
    for (i = 0; i < 8; i++){
    stroke(200, 50, 150);
    strokeWeight(1);
    fill(200, 50, 150, 20); 
    beginShape();
    vertex(150,500);
      
    vertex(250+0*100,500-((data[0].dedicacion[5].horas[0]+data[0].dedicacion[5].horas[1]+data[0].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+1*100,500-((data[1].dedicacion[5].horas[0]+data[1].dedicacion[5].horas[1]+data[1].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+2*100,500-((data[2].dedicacion[5].horas[0]+data[2].dedicacion[5].horas[1]+data[2].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+3*100,500-((data[3].dedicacion[5].horas[0]+data[3].dedicacion[5].horas[1]+data[3].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+4*100,500-((data[4].dedicacion[5].horas[0]+data[4].dedicacion[5].horas[1]+data[4].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+5*100,500-((data[5].dedicacion[5].horas[0]+data[5].dedicacion[5].horas[1]+data[5].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+6*100,500-((data[6].dedicacion[5].horas[0]+data[6].dedicacion[5].horas[1]+data[6].dedicacion[5].horas[2])/3)*20);
      
    vertex(250+7*100,500-((data[7].dedicacion[5].horas[0]+data[7].dedicacion[5].horas[1]+data[7].dedicacion[5].horas[2])/3)*20);
      
    vertex(1000,500);
    endShape();
    strokeWeight(0);
    fill(200, 50, 150);
    circle(250+i*100,
          500-((data[i].dedicacion[5].horas[0]+data[i].dedicacion[5].horas[1]+data[i].dedicacion[5].horas[2])/3)*20,
          12);
    }
    }    
    
      }
    
    if (countCC > 2){ 
   countCC = 1;
    }

}

function blanco6(){
        
      }