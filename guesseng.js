function playGuess1() {
    var answer = parseInt(Math.random() * 100);
    while (true) {
        var userAnswer = prompt(' Enter a number from 0 to 100. To exit, press q');
        if (userAnswer == 'q') {
            break;
        }
        userAnswer = parseInt(userAnswer);

        if (userAnswer > answer) {
            alert('Your answer is too big');
        } else if (userAnswer < answer) {
            alert('Your answer is too small');
        } else if (userAnswer == answer) {
            alert('You win!');
            break;
        } else {
            alert('You must enter a number!');
        }
    }
}