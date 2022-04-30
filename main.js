function preload() {

}

function setup() {
canvas = createCanvas(800, 600);
canvas.position(110, 80);
video= createCapture(VIDEO);
video.hide();
tintcolor= "";
}

function draw() {
tint(tintcolor);

image(video, 50, 50, 700, 500);
fill(0, 128, 0);
stroke(0, 128, 0);
circle(40, 40, 70);
fill(350, 200, 240);
rect(74, 30, 670, 20);
fill(0, 128, 0);
stroke(0, 128, 0);
circle(760, 40, 70);

fill(0, 128, 0);
stroke(0, 128, 0);
circle(40, 560, 70);
fill(350, 200, 240);
rect(74, 30, 655, 20);
fill(0, 128, 0);
stroke(0, 128, 0);
circle(760, 560, 70);
fill(350, 200, 240);
rect(74, 550, 655, 20);
fill(0, 128, 0);

fill(150, 350, 240);
rect(30, 70, 20, 460);
fill(0, 128, 0);
fill(150, 350, 240);
rect(750, 70, 20, 460);
fill(0, 128, 0);
}

function Filter() {
    tintcolor= document.getElementById("text_input").value;
    }
    
    function take_snapshot() {
    save("snapshot.png");
    }