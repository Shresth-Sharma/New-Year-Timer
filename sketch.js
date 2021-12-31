var response,responseJSON;
var datetime;
var time,time2;
var a1,a2,a3,a4,a5,a6,a7,a8,a9;
var s1=0,s2,s3,s4,s5,s6,s7,s8,s9;
function preload(){
    s2=loadSound("a1.mp3");
}
function setup(){
    frameRate(2);
    createCanvas(1350,600);
}
function draw(){
    background("red");
    textSize(350);
    fill("yellow");
    text(a1+":"+a2+":"+a3,0,400);
    time1();
    a1=24-a4-1
    a2=60-a5-1
    a3=60-a6
    if(a4<1&&s1===0){
        s2.loop();
        s1=1
    }
}
async function time1(){
    response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    responseJSON = await response.json();

    datetime = responseJSON.datetime;
    //alert(datetime);
    time=datetime.slice(11,19);
    a4=datetime.slice(11,13);
    a5=datetime.slice(14,16);
    a6=datetime.slice(17,19);
    
}