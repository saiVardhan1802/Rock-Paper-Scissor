const initialRPS = document.querySelector('.rps').innerHTML;
const initialRules = document.querySelector('.rules').innerHTML;
const initialBody = document.body.innerHTML;

let userIntScore = 0;
let pcIntScore = 0;

let getRPS = ["rock", "paper", "scissor"];
let getImg = ["icons8-fist-67 1.png", "icons8-hand-64 1.png", "scissors.png"];

let userScore = document.getElementById('user-score').innerText;
let pcScore = document.getElementById('pc-score').innerText;

document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.rules').style.display = 'none';
});

document.querySelector('.rules-box').addEventListener('click', function() {
    document.querySelector('.rules').style.display = 'block';
});

function displayResult(chosen) {
    const c = determine(chosen);
    const result = c[0];
    const pcChosen = c[1];
    const resultDiv = document.getElementsByClassName('rps');
    resultDiv[0].style = `
        display: flex;
        flex-direction: row;
        gap: 6vw;
        width: 60vw;
        height: 60vh;
        position: relative;
        top: 17vh;
        left: 23vw;
    `

    document.querySelector('.rules-box').style = `top: 3.35vh;`;
    document.querySelector('.rules').style = `bottom: 50vh;`;
    // console.log(chosen, pcChosen, determine(chosen));
    
    if (result === "tie") {
        resultDiv[0].innerHTML = 
        `
        
            <div class="circle-js user-border">
                <p >YOU PICKED</p>
                <img src='' />
            </div>

            <div class="show-result">
                <p 
                style="font-size: 2.5rem;">TIE UP</p>
                <button onclick="resetGame()"><p>REPLAY</p></button>
            </div>

            <div class="circle-js pc-border">
                <p style="margin-left: 0.35vw;">PC PICKED</p>
                <img src='' />
            </div>
        `;

        document.getElementsByClassName('rules')[0].style.display = 'none';
    }

    else if (result === "lost") {
        resultDiv[0].innerHTML = 
        `
        
            <div class="lost circle-js user-border">
                <p >YOU PICKED</p>
                <img src='' />
            </div>

            <div class="show-result">
                <p 
                style="font-size: 2.5rem;">YOU LOST</p>
                <p 
                style="font-size: 1.5rem;">AGAINST PC</p>
                <button onclick="resetGame()"><p>PLAY AGAIN</p></button>
            </div>

            <div class="won circle-js pc-border">
                <p style="margin-left: 0.35vw;">PC PICKED</p>
                <img src='' />
            </div>
        `;

        document.getElementsByClassName('rules')[0].style.display = 'none';
        pcScore = pcScore + "+1";
        pcScore = eval(pcScore);
        document.getElementById('pc-score').innerText = pcScore;
        pcIntScore++;
    }

    else {
        resultDiv[0].innerHTML = 
        `
        
            <div class="won circle-js user-border">
                <p >YOU PICKED</p>
                <img src='' />
            </div>

            <div class="show-result">
                <p 
                style="font-size: 2.5rem;">YOU WIN</p>
                <p 
                style="font-size: 1.5rem;">AGAINST PC</p>
                <button onclick="removeNext()"><p>PLAY AGAIN</p></button>
            </div>

            <div class="lost circle-js pc-border">
                <p style="margin-left: 0.35vw;">PC PICKED</p>
                <img src='' />
            </div>
        `;

        const next = document.createElement('div');
        next.className = 'next-box';
        console.log(next);
        document.body.appendChild(next);
        next.innerHTML = `
        <p >NEXT</p>
        `
        next.onclick = displayHurray;
        document.querySelector('.rules-box').style = `left: 78vw;
        top: 5vh`;

        document.getElementsByClassName('rules')[0].style.display = 'none';
        userScore = userScore + "+1";
        userScore = eval(userScore);
        document.getElementById('user-score').innerText = userScore;
        userIntScore++;
    }

    switch(chosen) {
        case 0:
            document.querySelector(".user-border img").setAttribute('src', getImg[0]);
            document.querySelector(".user-border").style = `border: 1.25rem solid rgba(189, 0, 255, 1);`
            document.querySelector(".user-border img").style = `
            width: 60%;
            height: 43%;
            position: relative;
            left: 18%;
            top: 13%;
            `
            break;
        case 1:
            document.querySelector(".user-border img").setAttribute('src', getImg[1]);
            document.querySelector(".user-border").style = `border: 1.25rem solid rgba(255, 169, 67, 1);`
            document.querySelector(".user-border img").style = `
            width: 55%;
            height: 55%;
            position: relative;
            left: 22%;
            top: 10%;
            `
            break;
        case 2:
            document.querySelector(".user-border img").setAttribute('src', getImg[2]);
            document.querySelector(".user-border").style = `border: 1.25rem solid rgba(0, 116, 182, 1);`
            document.querySelector(".user-border img").style = `
            width: 37%;
            height: 45%;
            position: relative;
            left: 32%;
            top: 13%;
            `
            break;
    }

    switch(pcChosen) {
        case 0:
            document.querySelector(".pc-border img").setAttribute('src', getImg[0]);
            document.querySelector(".pc-border").style = `border: 1.25rem solid rgba(189, 0, 255, 1);`
            document.querySelector(".pc-border img").style = `
            width: 60%;
            height: 43%;
            position: relative;
            left: 18%;
            top: 13%;
            `
            break;
        case 1:
            document.querySelector(".pc-border img").setAttribute('src', getImg[1]);
            document.querySelector(".pc-border").style = `border: 1.25rem solid rgba(255, 169, 67, 1);`
            document.querySelector(".pc-border img").style = `
            width: 55%;
            height: 55%;
            position: relative;
            left: 22%;
            top: 10%;
            `
            break;
        case 2:
            document.querySelector(".pc-border img").setAttribute('src', getImg[2]);
            document.querySelector(".pc-border").style = `border: 1.25rem solid rgba(0, 116, 182, 1);`
            document.querySelector(".pc-border img").style = `
            width: 37%;
            height: 45%;
            position: relative;
            left: 32%;
            top: 13%;
            `
            break;
    }
}

function determine(num) {
    const pcChoice = Math.floor(Math.random() * 3);
    console.log(pcChoice);
    console.log(num);
    let result;

    if (num === pcChoice) {
        result = "tie";
    }

    else if (
            (num === 0 && pcChoice === 1) ||
            (num === 1 && pcChoice === 2) ||
            (num === 2 && pcChoice === 0)
     ) {
            result = "lost";
        }

    else if (
            (num === 1 && pcChoice === 0) ||
            (num === 2 && pcChoice === 1) ||
            (num === 0 && pcChoice === 2)
     ) {
        result = "win";
    }

    return [result, pcChoice];
}

function resetGame() {
    document.querySelector('.rps').style = `
    width: 40vw;
    height: 60vh;
    position: relative;
    top: 13vh;
    left: 28vw;
    `
    document.querySelector('.rps').innerHTML = initialRPS;
    document.getElementsByClassName('rules')[0].style.display = 'block';
    document.getElementsByClassName('rules')[0].style = 'bottom: 40vh;';
    document.querySelector('.rules-box').style = `top: 14vh`;
}

function removeNext() {
    document.querySelector('.next-box').remove();

    document.querySelector('.rps').style = `
    width: 40vw;
    height: 60vh;
    position: relative;
    top: 13vh;
    left: 28vw;
    `
    document.querySelector('.rps').innerHTML = initialRPS;
    document.getElementsByClassName('rules')[0].style.display = 'block';
    document.getElementsByClassName('rules')[0].style = 'bottom: 40vh;';
    document.querySelector('.rules-box').style = `top: 14vh`;
}

function displayHurray() {
    document.body.innerHTML = `
    <div class="display-winner">
        <img src="Vector.png" />

        <div class="set-1">
            <span class="star-1">&#9733;</span>
            <span class="star-2">&#9733;</span>
            <span class="star-3">&#9733;</span>
            <span class="star-4">&#9733;</span>
        </div>

        <div class="set-2">
            <span class="star-1">&#9733;</span>
            <span class="star-2">&#9733;</span>
            <span class="star-3">&#9733;</span>
            <span class="star-4">&#9733;</span>
        </div>

        <div class="hurray">
            <p style="
                font-size: 6.5rem;
                line-height: 6.5rem;
                ">HURRAY!!</p>
            <p style="
                font-size: 3rem;
                line-height: 3rem;
                margin-top: 2vh;
                ">YOU WON THE GAME</p>
            <button onclick="resetHurray()"><p>PLAY AGAIN</p></button>
        </div>
    </div>

    <div class="rules-box2" onclick="resetHurray()">
        <p >RULES</p>
    </div>
    `

    console.log(initialBody);


}

function resetHurray() {
    document.body.innerHTML = initialBody;

    document.getElementById("user-score").innerText = userIntScore;
    document.getElementById("pc-score").innerText = pcIntScore;

    document.querySelector('.close').addEventListener('click', function() {
        document.querySelector('.rules').style.display = 'none';
    });
    
    document.querySelector('.rules-box').addEventListener('click', function() {
        document.querySelector('.rules').style.display = 'block';
    });
}