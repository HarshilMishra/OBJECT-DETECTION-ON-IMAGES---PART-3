function next_page1()
{
    window.location("index_1.html");
}
function next_page2()
{
    window.location("index_2.html");
}
function next_page3()
{ 
    window.location("index_3.html");
}
function next_page4()
{
    window.location("index_4.html");
}
function next_page5()
{
    window.location("index_5.html");
}
function back()
{
    window.location("index.html");
}
img="";
img_1 = "";
img_2 = "";
img_3 = "";
img_4 = "";
status = "";

function preload()
{
  img=loadImage("bedroom_image.jpg");

  img_1=loadImage("t.v._ac_image.jpg");

  img_2=loadImage("desk_image.jpg");

  img_3=loadImage("bottle_image.jpg");

  img_4=loadImage("fruit_basket_image.jpg");

}
function setup()
{
  canvas = createCanvas(640,420);
  canvas.center();
  objectDetector=ml5.objectDetector('cocossd',modelLoaded);
  document.getElementById("status").innerHTML="Status : Detecting Objects";
}
function draw()
{
  image(img,0,0,380,380);

  if(status != ""){

    r = random(255);
    g = random(255);
    b = random(255);

    objectDetector.detect(img,gotResult);
    

    for(i = 0; i < objects.length; i++)
    {
      document.getElementById("status").innerHTML = "Status: Object Detected";
  
      percent = floor(objects[i].confidence * 100);
      fill(r,g,b);
      text(objects[i].label + "" + percent + "%" , objects[i].x+15, objects[i].y+15);
      noFill();
      stroke(r,g,b);
      rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
  }
}
function modelLoaded()
{
  console.log("Model Loaded!");
  status = true;
  objectDetector.detect(img,gotResult);
}
function gotResult(error,results)
{
  if(error){
    console.error(error);
  }
  else{
    console.log(results);
    objects = results;
  }
}
