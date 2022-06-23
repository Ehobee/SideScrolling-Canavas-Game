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
        this.position.x += this.velocity.x;

        if (this.position.y + this.heigth + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity;
        } else {
            this.velocity.y = 0;
        };
    };
};

class Platform {
    constructor() {
        this.position = {
            x: 200,
            y: 100
        };
        this.width = 200;
        this.height = 20;
    };
    drawPlatform() {
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
};
//draw new player by creating an object and call the drawPlayer method
const player = new Player();
const platform = new Platform();

const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
};

//Animation
function animation() {
    requestAnimationFrame(animation);
    context.clearRect(0, 0, canvas.width, canvas.height);
    player.updatePlayer();
    platform.drawPlatform();
    //player movement
    if (keys.right.pressed) {
        player.velocity.x = 5;
    } else if (keys.left.pressed) {
        player.velocity.x = -5;
    } else {
        player.velocity.x = 0;
    };

    //detect collision between player and platform
    if (player.position.y + player.heigth <= platform.position.y 
        && player.position.y + player.heigth + player.velocity.y >= platform.position.y
        && player.position.x + player.width >= platform.position.x
        && player.position.x <= platform.position.x + platform.width) {
        player.velocity.y = 0
        
    };
};

animation();

//Event listener for pressed keys
window.addEventListener('keydown', ({ code }) => {

    switch (code) {
        case 'KeyA':
            keys.left.pressed = true;
            break;
        case 'KeyD':
            keys.right.pressed = true;
            //console.log(keys.right.pressed)
            break;
        case 'KeyW':
            player.velocity.y -= 2;
            break;
        case 'KeyS':
            console.log('down')
            break;
    }
});

window.addEventListener('keyup', ({ code }) => {

    switch (code) {
        case 'KeyA':
            keys.left.pressed = false;
            break;
        case 'KeyD':
            keys.right.pressed = false;
            //console.log(keys.right.pressed)
            break;
        case 'KeyW':
            player.velocity.y -= 20;
            break;
        case 'KeyS':
            console.log('down')
            break;
    }
});
//console.log(context)