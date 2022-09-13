var  nose_x=0;
var  nose_y=0;


function preload() {

    moustache_nose = loadImage("moustache.png"); 

}

function setup() {
    // create Canvas here 
    canvas = createCanvas(300, 250);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    my_posenet = ml5.poseNet(video, model_loaded);
    my_posenet.on('pose', got_Results);

}

function draw() {

    image(video, 0, 0, 300, 250);
    //fill("red");
    //circle(nose_x,nose_y,25);
    image(moustache_nose,nose_x,nose_y,25,25);
}

function model_loaded(){

     console.log("PoseNet model is loaded");

}

function got_Results(results){

    if(results.length > 0){
        //console.log(results);

        nose_x = results[0].pose.nose.x - 174;
        nose_y = results[0].pose.nose.y - 117;

        console.log("Nose X Position is : ", nose_x);
        console.log("Nose Y Position is : ", nose_y); 
    }

    
}


function Take_snap() {
    save("filtered_img.png");
}