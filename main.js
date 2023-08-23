const steppers = document.querySelectorAll(".stepper-item");
const stepperActive = document.querySelector(".stepper-item.active");
const steppersCompleted = document.querySelectorAll(".stepper-item.completed");

steppers.forEach((stepper) => {
    stepper.addEventListener("click", (event) => {
        const curentStepper = event.currentTarget;

        /* check if click on active stepper */
        // console.log(curentStepper == stepperActive);
        // console.log(curentStepper.classList.contains('active'));

        curentStepper.classList = 'stepper-item active'

        steppers.forEach(stepper => {
            console.log(stepper.classList.contains('active'));
            
            if (stepper.classList.contains('active')) {
                stepper.classList.add('active')
            }
        })
    });
});
