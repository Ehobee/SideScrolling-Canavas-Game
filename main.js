const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const gravity = 0.5;
//create class of Player
class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        };
        this.velocity = {
            x: 0,
            y: 1
        };
        this.width = 50;
        this.heigth = 50;
    };
    drawPlayer() {
        context.fillRect(this.position.x, this.position.y, this.width, this.heigth)
    };
    updatePlayer() {
        this.drawPlayer();
        this.position.y += this.velocity.y;

        if (this.position.y + this.heigth + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity;
        } else {
            this.velocity.y = 0;
        };
    };
};

//draw new player by creating an object and call the drawPlayer method
const player = new Player();

//Animation
function animation() {
    requestAnimationFrame(animation);
    context.clearRect(0, 0, canvas.width, canvas.height);
    player.updatePlayer();
};

animation();
//console.log(context)