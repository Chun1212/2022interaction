function setup() {
    initializeFields();
    createCanvas(500, 500);
}

function draw() {
    background(color(0xF3, 0xF5, 0x88));
    fill(color(0x88, 0xA6, 0xF5));
    rect(100, 100, 100, 150);
    rect(mouseX, mouseY, 100, 150);
}

function initializeFields() {
}
