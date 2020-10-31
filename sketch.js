//Create variables here
var dog;
var database;

function preload()
{
  dog=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png");
  
}

function setup() {
  database = firebase.database();
 
  createCanvas(500, 500);
  foodStock=database.ref('food');
  foodStock.on('value',readStock);

  dog=createSprite(200,200)
  dog.addImage(happyDog)
  dog.scale=0.2;
}


function draw() {  
  background(46, 139, 87);



if(keyWentDown("UP_ARROW")){
writeStock(foodS);


}
if(keyWentDown("UP_ARROW")){
  writeStock(foodS);
  dog.addImage(happyDog)
  
  }

  drawSprites();
  //add styles here

}

function readStock(data) {
  foodS=data.val();
}





function writeStock(x){

  if(x<=0){
    x=0
  }else{
x=x-1;
  }
 database.ref('/').update({
   food:x
 })


}


