const userQuestion = "Will I invent the time machine?";
console.log(`The user asked ${userQuestion}`);


function myFuture() {
    const randomNumber = Math.floor(Math.random() * 13);
    let eightBall = "";
    switch (randomNumber) {
        case 0:
            eightBall = 'It is certain';
            break;
        case 1:
            eightBall = 'It is decidedly so';
            break;
        case 2:
            eightBall = 'It is uncertain try again later';
        case 3:
            eightBall = 'There is a possibility';
            break;
        case 4:
            eightBall = 'Do not count on it';
            break;
        case 5:
            eightBall = 'My sources say no';
            break;
        case 6:
            eightBall = 'Outlook is not so good';
            break;
        case 7:
            eightBall = 'Signs point to yes';
            break;
        case 8:
            eightBall = 'The odds are in your favor';
            break;
        case 9:
            eightBall = 'Most likely';
            break;
        case 10:
            eightBall = 'How dare you ask that!';
            break;
        case 11:
            eightBall = 'You should plan on it';
            break;
        case 12:
            eightBall = 'Better not tell you now';
            break;

    }

    const magicAnswer = `Eight ball answered: ${eightBall}`;



    if (document.getElementById('myInput').value == "") {
        alert("You didn't ask anything!");
    }
    else if (document.getElementById('myInput').value.includes('?') == false) {
        alert("Pose it in form of a question!");
    }
    else {
        document.getElementById('eightball').classList.toggle('clickMe');
        document.getElementById('answer').textContent = magicAnswer;
    }

}
