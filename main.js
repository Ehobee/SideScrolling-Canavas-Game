const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

//create class of Player
class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        };
        this.width = 100;
        this.heigth = 100;
    };
    drawPlayer() {
        context.fillRect(this.position.x, this.position.y, this.width, this.heigth)
    };
};

//draw new player by creating an object and call the drawPlayer method
const player = new Player();
player.drawPlayer()

//console.log(context)