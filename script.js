// Select the button and the fun-fact paragraph
const revealBtn = document.getElementById("reveal-btn");
const funFact = document.getElementById("fun-fact");

// Add a click event listener to the button
revealBtn.addEventListener("click", () => {
    funFact.textContent = "Grace Academy believes in holistic education for academic excellence and personal growth.";
    funFact.classList.remove("hidden");
    funFact.classList.add("visible");
});
