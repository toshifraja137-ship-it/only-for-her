document
.getElementById("secretBtn")
.addEventListener("click", () => {

    document
    .getElementById("secretMessage")
    .innerHTML =
    "🫂 If you're reading this, I miss you too 😭💖";

});
const hearts = [

    "💖",
    "💕",
    "💗",
    "💞",
    "❤️"

];

setInterval(() => {

    const heart =
        document.createElement("div");

    heart.innerHTML =
        hearts[
        Math.floor(
            Math.random() *
            hearts.length
        )
        ];

    heart.style.position = "fixed";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.bottom = "-20px";

    heart.style.fontSize =
        Math.random() * 20 + 20 + "px";

    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.style.transition =
            "all 5s linear";

        heart.style.transform =
            "translateY(-110vh)";

        heart.style.opacity = "0";

    }, 100);

    setTimeout(() => {

        heart.remove();

    }, 5000);

}, 500);

heart.innerHTML =
    hearts[
    Math.floor(
        Math.random() *
        hearts.length
    )
    ];

heart.style.fontSize =

    Math.random() * 20 + 20

    + "px";
