var img
function preload(){
img=loadImage("dog_cat.jpg")
}
function setup(){
canvas=createCanvas(700,500);
canvas.position(400,200)
}
function draw(){
image(img,0,0,700,500)

stroke(245, 0, 0);
strokeWeight(4);
noFill()
textSize(50);
textStyle(NORMAL);
text("Dog:",150,115)
rect(150, 80, 190, 400);
text("Cat:",340,115)
rect(340, 80, 300, 400);

}
