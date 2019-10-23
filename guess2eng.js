function playGuess2() {
    var answer = parseInt(Math.random() * 100);
    var playerNum = 1; 

    while (true) {
        var userAnswer = prompt('Walks player ' + playerNum + '. Enter a number from 0 to 100. To exit, press q');
        if (userAnswer == 'q') {
            break;
        }
        userAnswer = parseInt(userAnswer);

        if (userAnswer > answer) {
            alert('Your answer is too big');
        } else if (userAnswer < answer) {
            alert('Your answer is too small');
        } else if (userAnswer == answer) {
            alert('You win! Won player: ' + playerNum);
            break;
        } else {
            alert('You must enter a number!');
        }

        //делаем смену игрока
        if (playerNum == 1) {
            playerNum = 2;
        } else {
            playerNum = 1;
        }
    }
}
