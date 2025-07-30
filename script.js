// Список игр (замени на свои данные)
const games = [
    {
        title: "Shooter 2D",
        cover: "assets/shooter_2d.jpg",
        url: "https://shooter-2d.vercel.app/"
    },
    {
        title: "Арканоид",
        cover: "assets/arkanoid.jpg",
        url: "https://arkanoid-gamma.vercel.app/"
    },
    {
        title: "Flappy duck",
        cover: "assets/flappy_duck.jpg",
        url: "https://flappy-duck-infr.vercel.app/"
    },
    {
        title: "Ping Pong",
        cover: "assets/ping_pong.jpg",
        url: "https://pingpong-topaz.vercel.app/"
    },
    {
        title: "Snake",
        cover: "assets/snake.jpg",
        url: "https://snake-orcin-chi.vercel.app/"
    },
    {
        title: "Tic tac toe 5",
        cover: "assets/tic_tac_toe.jpg",
        url: "https://tic-tac-toe-virid-eight-55.vercel.app/"
    },
    // Добавь остальные игры...
];

const gamesList = document.getElementById('games-list');
const gameFrame = document.getElementById('game-frame');
const fullscreenBtn = document.getElementById('fullscreen-btn');

// Загружаем список игр
games.forEach(game => {
    const gameCard = document.createElement('div');
    gameCard.className = 'game-card';
    gameCard.innerHTML = `
        <img src="${game.cover}" alt="${game.title}">
        <h3>${game.title}</h3>
    `;
    gameCard.addEventListener('click', () => {
        gameFrame.src = game.url;
    });
    gamesList.appendChild(gameCard);
});

// Загружаем первую игру по умолчанию
if (games.length > 0) {
    gameFrame.src = games[0].url;
}

// Режим полного экрана
fullscreenBtn.addEventListener('click', () => {
    if (gameFrame.requestFullscreen) {
        gameFrame.requestFullscreen();
    } else if (gameFrame.webkitRequestFullscreen) { // Safari
        gameFrame.webkitRequestFullscreen();
    } else if (gameFrame.msRequestFullscreen) { // IE/Edge
        gameFrame.msRequestFullscreen();
    }
});