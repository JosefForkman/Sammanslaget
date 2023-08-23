const steppers = document.querySelectorAll(".stepper-item");
const stepperActive = document.querySelector(".stepper-item.active");
const steppersCompleted = document.querySelectorAll(".stepper-item.completed");

steppers.forEach((stepper) => {
    stepper.addEventListener("click", (event) => {
        const curentStepper = event.currentTarget;

        /* check if click on active stepper */
        // console.log(curentStepper == stepperActive);
        // console.log(curentStepper.classList.contains('active'));

        steppers.forEach(stepper => {
            console.log(stepper.classList.contains('active'));
            console.log(curentStepper.dataset.stepp);

            if (stepper.dataset.stepp < curentStepper.dataset.stepp) {
                stepper.classList = "stepper-item completed"
            } else {
                stepper.classList = "stepper-item"
            }

            curentStepper.classList.add("active")
        })
    });
});
