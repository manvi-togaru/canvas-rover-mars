var bi,ri
canvas=document.getElementById('mycanvas');
ctx=canvas.getContext('2d')
marsimage=["mars.jpg","https://ichef.bbci.co.uk/news/976/cpsprodpb/2808/production/_118684201_mars_perseverance_zl0_0036_0670134061_053eby_n0031392zcam03107_1100luj.jpg",
"https://scitechdaily.com/images/Olympus-Mons-Mars-scaled.jpg","https://www.vaisala.com/sites/default/files/images/LIFT-Mars_3D-illustration_1600x900.jpg"]
randomnumber=Math.floor(Math.random()*4);
console.log(randomnumber)
roverwidth=100;
roverheight=100;
roverx=10;
rovery=10;
backgroundimage=marsimage[randomnumber];
roverimage="rover.png"
function add()
{
bi=new Image();
bi.onload=uploadBackground;
bi.src=backgroundimage;
ri=new Image();
ri.onload=uploadRover;
ri.src=roverimage;
}
function uploadBackground()
{
  ctx.drawImage(bi,0,0,canvas.width,canvas.height)  
}
function uploadRover()
{
  ctx.drawImage(ri,roverx,rovery,roverwidth,roverheight)  
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
keyPressed=e.keyCode;
console.log(keyPressed)
if (keyPressed=='38') {
up();
console.log("up")
}
if (keyPressed=='40') {
    down();
    console.log("down")
    }
if (keyPressed=='37') {
        left();
        console.log("left")
        }
if (keyPressed=='39') {
        right();
        console.log("right")
            }
}
function up()
{
if (rovery>=0) {
   rovery=rovery-10;
   uploadBackground();
   uploadRover();

}
}
function left()
{
if (roverx>=0) {
   roverx=roverx-10;
   uploadBackground();
   uploadRover();
   
}
}function right()
{
if (roverx<=700) {
   roverx=roverx+10;
   uploadBackground();
   uploadRover();
   
}
}function down()
{
if (rovery<=500) {
   rovery=rovery+10;
   uploadBackground();
   uploadRover();
   
}
}
