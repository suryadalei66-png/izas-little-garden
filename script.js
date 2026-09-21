const flowersContainer = document.querySelector(".flowers");
const starsContainer = document.querySelector(".stars");
const firefliesContainer = document.querySelector(".fireflies");
const butterfliesContainer = document.querySelector(".butterflies");
const flowerTypes = ["🌷", "🌸", "🌼", "🌻", "🌺", "💮"];

/* Create stars */
for (let i = 0; i < 70; i++) {
    const star = document.createElement("span");

    star.className = "star";
    star.textContent = Math.random() > 0.72 ? "✦" : "•";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 68 + "%";
    star.style.fontSize = 6 + Math.random() * 13 + "px";
    star.style.setProperty("--duration", 1.5 + Math.random() * 3 + "s");
    star.style.animationDelay = Math.random() * 3 + "s";

    starsContainer.appendChild(star);
}

/* Create lots of flowers */
for (let i = 0; i < 280; i++) {
    const flower = document.createElement("span");

    flower.className = "flower";
    flower.textContent =
        flowerTypes[Math.floor(Math.random() * flowerTypes.length)];

    flower.style.left = Math.random() * 100 + "%";
    flower.style.bottom = Math.random() * 190 - 5 + "px";
    flower.style.fontSize = 13 + Math.random() * 29 + "px";
    flower.style.zIndex = Math.floor(3 + Math.random() * 5);
    flower.style.setProperty("--sway", 2 + Math.random() * 3 + "s");
    flower.style.animationDelay = Math.random() * 2 + "s";

    flowersContainer.appendChild(flower);
}

/* Create fireflies */
for (let i = 0; i < 35; i++) {
    const firefly = document.createElement("span");

    firefly.className = "firefly";

    firefly.style.left = Math.random() * 100 + "%";
    firefly.style.top = 25 + Math.random() * 60 + "%";
    firefly.style.setProperty("--x", -25 + Math.random() * 50 + "px");
    firefly.style.setProperty("--y", -35 + Math.random() * 70 + "px");
    firefly.style.setProperty("--duration", 2 + Math.random() * 4 + "s");
    firefly.style.animationDelay = Math.random() * 4 + "s";

    firefliesContainer.appendChild(firefly);
}
/* Create butterflies */
for (let i = 0; i < 8; i++) {
    const butterfly = document.createElement("span");

butterfly.className = "butterfly";
butterfly.textContent = "🦋";
butterfly.style.fontSize = 14 + Math.random() * 18 + "px";
    butterfly.style.left = 10 + Math.random() * 80 + "%";
    butterfly.style.top = 25 + Math.random() * 50 + "%";

    butterfly.style.setProperty("--x", -60 + Math.random() * 120 + "px");
    butterfly.style.setProperty("--y", -50 + Math.random() * 100 + "px");
    butterfly.style.setProperty("--y2", -20 + Math.random() * 80 + "px");

    butterfly.style.setProperty(
        "--duration",
        5 + Math.random() * 5 + "s"
    );

    butterfly.style.animationDelay = Math.random() * 5 + "s";

    butterfliesContainer.appendChild(butterfly);
}
/* Scene controls */
const goButton = document.querySelector("#goButton");
const welcome = document.querySelector("#welcome");
const gardenScreen = document.querySelector("#gardenScreen");
const moodButton = document.querySelector("#moodButton");
const moodPanel = document.querySelector("#moodPanel");
const response = document.querySelector("#response");

goButton.addEventListener("click", () => {
    welcome.classList.add("hide");

    setTimeout(() => {
        gardenScreen.classList.add("show");
    }, 650);
});

moodButton.addEventListener("click", () => {
    moodPanel.classList.add("show");
});
const responses = {
    good: "I'm really glad you're having a good day. I hope something small makes it even better. 🌷",

    notreally: "It's okay if today isn't going that well. You don't have to act okay with me. If you want to talk, I'm here to listen. 🌙",

    bad: "I'm sorry you're having a rough day. You don't have to deal with everything at once. Take a little breath and stay here for a while. 🫂",

    unknown: "You don't have to know what you're feeling right now. Take your time. Sometimes it's okay to just exist without having an answer. ✨"
};

document.querySelectorAll(".mood-buttons button").forEach((button) => {
    button.addEventListener("click", () => {
        response.textContent = responses[button.dataset.mood];
    });
});
const finalButton = document.querySelector("#finalButton");
const finalMessage = document.querySelector("#finalMessage");

finalButton.addEventListener("click", () => {
    finalMessage.classList.add("show");
    finalButton.style.display = "none";
});