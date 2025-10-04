let next = document.getElementById("next");
let prev = document.getElementById("prev");
let activeCircles = document.querySelectorAll(".circle");
let current = 0; // start from index 0
 activeCircles[0].classList.add("active");
        current++;
 if (current <= 1) {
        prev.disabled = true; // disable at the start
    }
next.addEventListener("click", () => {
    if (current < activeCircles.length) {
        activeCircles[current].classList.add("active");
        current++;
    }

    if (current === activeCircles.length) {
        next.disabled = true; // disable at the end
    }
    prev.disabled = false; // enable prev when moving forward
});

prev.addEventListener("click", () => {
    if (current > 0) {
        current--; // move back first
        activeCircles[current].classList.remove("active");
    }
   
    if (current <= 1) {
        prev.disabled = true; // disable at the start
    }
    next.disabled = false; // re-enable next if moving back
});
