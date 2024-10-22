lucide.createIcons();

let darkColor = "#2b3137"
let lightColor = "#3d4b52"
let color = document.body.id.startsWith("dark") ? darkColor : lightColor
const canvas = document.getElementById('circuitCanvas');
const ctx = canvas.getContext('2d');

function toggleTheme() {
    const themeSwitch = document.querySelector(".theme-switch")

    if (document.body.id.startsWith("dark")) {
        document.body.id = "light-theme"
        themeSwitch.setAttribute('data-lucide', 'moon')
        color = lightColor
    } else {
        document.body.id = "dark-theme"
        themeSwitch.setAttribute('data-lucide', 'sun')
        color = darkColor
    }
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    lucide.createIcons();
    resizeCanvas();
} 

const gridSize = 40;
let grid;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initGrid();
    drawCircuitBoard();
}

function initGrid() {
    const cols = Math.ceil(canvas.width / gridSize);
    const rows = Math.ceil(canvas.height / gridSize);
    grid = new Array(rows).fill(null).map(() => new Array(cols).fill(0));
}

function drawCircuitBoard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 2;

    const numLines = Math.floor((canvas.width * canvas.height) / (gridSize * gridSize * 4));

    for (let i = 0; i < numLines; i++) {
        let x = Math.floor(Math.random() * grid[0].length);
        let y = Math.floor(Math.random() * grid.length);

        if (grid[y][x] === 0) {
            drawLine(x, y);
        }
    }
}

function drawLine(x, y) {
    let currentX = x;
    let currentY = y;
    let prevX = x;
    let prevY = y;

    ctx.beginPath();
    ctx.arc(currentX * gridSize, currentY * gridSize, 3, 0, Math.PI * 2);
    ctx.fill();

    while (true) {
        grid[currentY][currentX] = 1;
        const directions = getValidDirections(currentX, currentY, prevX, prevY);
        if (directions.length === 0) break;

        const [nextX, nextY] = directions[Math.floor(Math.random() * directions.length)];
        
        ctx.beginPath();
        ctx.moveTo(currentX * gridSize, currentY * gridSize);
        ctx.lineTo(nextX * gridSize, nextY * gridSize);
        ctx.stroke();

        prevX = currentX;
        prevY = currentY;
        currentX = nextX;
        currentY = nextY;
    }

    ctx.beginPath();
    ctx.arc(currentX * gridSize, currentY * gridSize, 3, 0, Math.PI * 2);
    ctx.fill();
}

function getValidDirections(x, y, prevX, prevY) {
    const directions = [
        [x + 1, y],
        [x - 1, y],
        [x, y + 1],
        [x, y - 1]
    ];

    return directions.filter(([nextX, nextY]) => 
        nextX >= 0 && nextX < grid[0].length &&
        nextY >= 0 && nextY < grid.length &&
        grid[nextY][nextX] === 0 &&
        (nextX !== prevX || nextY !== prevY)
    );
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
