const steppers = document.querySelectorAll(".stepper-item");

const gameFrame = document.querySelector("iframe");
const backBtn = document.querySelector(".back-btn");
const nextBtn = document.querySelector(".next-btn");

const time = document.querySelector(".time");
let stopwatchId = stopwatch()

const demoGame = [
    "https://scratch.mit.edu/projects/884792694/embed",
    "https://scratch.mit.edu/projects/884735449/embed",
    "https://scratch.mit.edu/projects/884464291/embed",
];

let currentSelectedStepper = 0;

steppers.forEach((stepper) =>
    stepper.addEventListener("click", (event) => {
        selectStepper(event.currentTarget);
        setGameIframe();
    })
);

function selectStepper(currentStepper) {
    steppers.forEach((stepper) => {
        stepper.classList = "stepper-item";
        currentStepper.classList.add("active");

        if (
            stepper.dataset.stepp < currentStepper.dataset.stepp ||
            steppers[steppers.length - 1].dataset.stepp ==
                currentStepper.dataset.stepp
        ) {
            stepper.classList = "stepper-item completed";
        }

        currentSelectedStepper = Number.parseInt(currentStepper.dataset.stepp);
    });
}

backBtn.addEventListener("click", () => {
    if (currentSelectedStepper != 0) {
        currentSelectedStepper = currentSelectedStepper - 1;
        selectStepper(steppers[currentSelectedStepper]);
        setGameIframe();
    }
});
nextBtn.addEventListener("click", () => {
    if (currentSelectedStepper != steppers.length - 1) {
        currentSelectedStepper = currentSelectedStepper + 1;
        selectStepper(steppers[currentSelectedStepper]);
        setGameIframe();
    }
});

function setGameIframe() {
    gameFrame.src = demoGame[0];
    if (demoGame.length >= currentSelectedStepper) {
        gameFrame.src = demoGame[currentSelectedStepper];
    }
    
    /* Check if on last stepper */
    if (currentSelectedStepper == demoGame.length - 1) {
        clearInterval(stopwatchId)
    }
}
function stopwatch() {
    const countDate = new Date().setTime(new Date().getTime() + 1000 * 60);

    return setInterval(() => {
        const now = new Date().getTime();
        const gap = countDate - now;

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;

        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);

        if (gap >= 0) {
            time.textContent = `${textMinute}:${textSecond}`;
        }
    }, 1000);
}

