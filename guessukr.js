function playGuess1() {
    var answer = parseInt(Math.random() * 100);
    while (true) {
        var userAnswer = prompt(' Введіть число від 0 до 100. Для виходу нажміть q');
        if (userAnswer == 'q') {
            break;
        }
        userAnswer = parseInt(userAnswer);

        if (userAnswer > answer) {
            alert('Ваша відповідь занадто велика');
        } else if (userAnswer < answer) {
            alert('Ваша відповідь занадто мала');
        } else if (userAnswer == answer) {
            alert('Ви вгадали!');
            break;
        } else {
            alert('Необхідно ввести число!');
        }
    }
}