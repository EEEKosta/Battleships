var randomLoc = Math.floor(Math.random() * 5);
//позиции корабля
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;//номер текущей попытки
var hits = 0;//кол-во попаданий
var guesses = 0;//кол-во попыток
var isSunk = false;//состояние коробля

//цикл пока черную жемчужину не потопили
while (isSunk == false) {
	guess = prompt("Привет! Это мини игра морской бой :) Представь, что в 7 ячейках по горизонтали ••••••• (от нуля до шести) расположен 3-ёх палубный корабль врага. Твоя задача потопить его за меньшее кол-во попыток. Стреляй! (введи число 0-6):");
	//получить координаты выстрела
	if (guess < 0 || guess > 6) {
		alert("Введи валидное значение 0-6");
	} else {
		guesses = guesses + 1;
		//если выстрел попал
		if (guess == location1 || guess == location2 || guess == location3) {
			alert("Попал");
			hits = hits + 1;
			if (hits == 3) {
				isSunk = true;
				alert("Корабль потоплен");
			}
		} else {
			alert("Мимо");
		}
	}
}

var stats = "Ты справился за " + guesses + " попыток. Твоя точность равна " + (3 / guesses);
alert(stats);
