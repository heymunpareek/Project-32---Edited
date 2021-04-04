const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var time;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg) {
        background(backgroundImg);
    }


    Engine.update(engine);

    // write code to display time in correct format here
    
    displayTime();
    textSize(40);
        fill("black");
        stroke("black");
        strokeWeight(3);
        textAlign(CENTER);
        text(time, width/2, height/2);
    


}

async function getBackgroundImg(){

    // write code to fetch time from API
    link = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
    //change the data in JSON format
    linkJson = await link.json();

    // write code slice the datetime
    datetime = linkJson.datetime;
    //console.log(datetime);
    hour = datetime.slice(11,13);
    //console.log(hour);

    // add conditions to change the background images from sunrise to sunset
    if(hour > 4 && hour <= 6) {
        backgroundImg = loadImage("sunrise1.png");
    }
    else if(hour > 6 && hour <= 7) {
        backgroundImg = loadImage("sunrise2.png");
    }
    else if(hour > 7 && hour <=8) {
        backgroundImg = loadImage("sunrise3.png");
    }
    else if(hour > 8 && hour <=10) {
        backgroundImg = loadImage("sunrise4.png");
    }
    else if(hour > 10 && hour <=12) {
        backgroundImg = loadImage("sunrise5.png");
    }
    else if(hour > 12 && hour <=16) {
        backgroundImg = loadImage("sunrise6.png");
    }
    else if(hour > 16 && hour <=18) {
        backgroundImg = loadImage("sunset7.png");
    }
    else if(hour > 18 && hour <=19) {
        backgroundImg = loadImage("sunset9.png");
    }
    else if(hour > 19 && hour <=20) {
        backgroundImg = loadImage("sunset10.png");
    }    
    else if(hour > 20 && hour <=23) {
        backgroundImg = loadImage("sunset11.png");
    }
    else if(hour > 23 && hour <=4) {
        backgroundImg = loadImage("sunset12.png");
    }


    //load the image in backgroundImg variable here

}
async function displayTime()
 {
    // write code to fetch time from API
    link = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
    //change the data in JSON format
    linkJson = await link.json();

    // write code slice the datetime
    datetime = linkJson.datetime;
    //console.log(datetime);
    time = datetime.slice(11,16);
        //console.log(time);
        

    
 }