let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector(".timer-display");
let int = null;
let isRunning = false;

window.addEventListener('DOMContentLoaded', (event) => {
                    const sunElement = document.querySelector('.sun-class');
                    sunElement.addEventListener('click', () => {
                                        document.body.classList.toggle('dark');
                    });
});

document.getElementById("start-stop-timer").addEventListener("click", startStopTimer);

document.body.onkeyup = function (e) {
                    if (e.keyCode == 32) {
                                        startStopTimer();
                    }
}

function startStopTimer() {
                    if (isRunning) {
                                        clearInterval(int);
                                        isRunning = false;
                    } else {
                                        int = setInterval(displayTimer, 10);
                                        isRunning = true;
                    }
}

document.getElementById("reset-timer").addEventListener("click", () => {
                    clearInterval(int);
                    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
                    timeRef.innerHTML = "00 : 00 : 00 : 000 ";
                    generateScramble();
                    isRunning = false;
});

function displayTimer() {
                    milliseconds += 10;
                    if (milliseconds == 1000) {
                                        milliseconds = 0;
                                        seconds++;
                                        if (seconds == 60) {
                                                            seconds = 0;
                                                            minutes++;
                                                            if (minutes == 60) {
                                                                                minutes = 0;
                                                                                hours++;
                                                            }
                                        }
                    }

                    let h = hours < 10 ? "0" + hours : hours;
                    let m = minutes < 10 ? "0" + minutes : minutes;
                    let s = seconds < 10 ? "0" + seconds : seconds;
                    let ms =
                                        milliseconds < 10
                                                            ? "00" + milliseconds
                                                            : milliseconds < 100
                                                                                ? "0" + milliseconds
                                                                                : milliseconds;

                    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}

function generateScramble() {
                    var moves = ["F", "R", "U", "L", "B", "D"];
                    var prime = ["", "'", "2"];
                    var scramble = [];
                    var lastMove = '';

                    for (var i = 0; i < 20; i++) {
                                        var move = moves[Math.floor(Math.random() * moves.length)];
                                        while (move === lastMove) {
                                                            move = moves[Math.floor(Math.random() * moves.length)];
                                        }
                                        var move1 = move + prime[Math.floor(Math.random() * prime.length)];
                                        scramble.push(move1);
                                        lastMove = move;
                    }

                    document.getElementById("scramble").innerText = scramble.join(" ");
}

generateScramble();
