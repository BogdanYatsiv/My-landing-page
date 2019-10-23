function playGuess2() {
    var answer = parseInt(Math.random() * 100);
    var playerNum = 1; 

    while (true) {
        var userAnswer = prompt('Ходить гравець ' + playerNum + '. Введіть число від 0 до 100. Для виходу нажміть q');
        if (userAnswer == 'q') {
            break;
        }
        userAnswer = parseInt(userAnswer);

        if (userAnswer > answer) {
            alert('Ваша відповідь занадто велика');
        } else if (userAnswer < answer) {
            alert('Ваша відповідь занадто мала');
        } else if (userAnswer == answer) {
            alert('Ви вгадали! Выиграв гравець: ' + playerNum);
            break;
        } else {
            alert('Необхідно ввести число!');
        }
        if (playerNum == 1) {
            playerNum = 2;
        } else {
            playerNum = 1;
        }
    }
}
