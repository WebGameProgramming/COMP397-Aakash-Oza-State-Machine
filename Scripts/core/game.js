///<reference path="_reference.ts"/>
// GLOBAL GAME FRAMEWORK VARIABLES
//global variables
var canvas = document.getElementById("canvas");
var stage;
var hellolable;
function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    createjs.Ticker.setFPS(100); //setting the fram rate of 100
    createjs.Ticker.on("tick", gameLoop, this);
    main();
}
function gameLoop(event) {
    stage.update();
}
function main() {
    console.log("game started");
    hellolable = new createjs.Text("hello world", "60px Consolas", "#04gf00");
    hellolable.regX = hellolable.getMeasuredWidth() * 0.5;
    hellolable.regY = hellolable.getMeasuredHeight() * 0.5;
    hellolable.x = 320;
    hellolable.y = 480;
    stage.addChild(hellolable);
}
/*
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;
var state: number;
var scene: createjs.Container;
var stateFunction: any; // alias for our current state

// Game Variables
var helloLabel: objects.Label;
var startButton: objects.Button;


function init():void {
    canvas = document.getElementById("canvas"); // reference to canvas element
    stage = new createjs.Stage(canvas); // passing canvas to stage
    stage.enableMouseOver(20); // enable mouse events
    createjs.Ticker.setFPS(60); // set frame rate to 60 fps
    createjs.Ticker.on("tick", gameLoop); // update gameLoop every frame
    setupStats(); // sets up our stats counting

    state = config.MENU_STATE;
    changeState();
}

// Main Game Loop
function gameLoop(event: createjs.Event): void {
    stats.begin(); // start counting

    stage.update(); // redraw/refresh stage every frame

    stats.end(); // stop counting
}

// Setup Game Stats
function setupStats():void {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}

// Callback function / Event Handler for Start Button Click
function clickStartButton(event: createjs.MouseEvent): void {
    helloLabel.text = "Clicked";
}



// state machine prep
function changeState(): void {
    // Launch various scenes

    switch (state) {
        case config.MENU_STATE:
            // show the menu scene
            stateFunction = states.menu;

            break;
        case config.PLAY_STATE:
            // show the play scene
            break;
        case config.OVER_STATE:
            // show the game over scene
            break;
    }

    stateFunction();
}
 */ 
//# sourceMappingURL=game.js.map