const userQuestion = "Will I invent the time machine?";
console.log(`The user asked ${userQuestion}`);


function myFuture () {
    const randomNumber = Math.floor(Math.random() * 8);
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

}

const magicAnswer = `The eighball answered: ${eightBall}`;
document.getElementById('answer').textContent = magicAnswer;
document.getElementById('eightball').classList.toggle('clickMe');

}
