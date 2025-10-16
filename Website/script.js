const creeper = document.getElementById("creeper");

const creeperStates = [
  "👀...",
  "Hisss...",
  "uwu...",
  "💣"
];

if (creeper) {
  creeper.addEventListener("click", () => {
    creeper.classList.remove("creeper-animate");
    void creeper.offsetWidth;
    creeper.classList.add("creeper-animate");

    const randomIndex = Math.floor(Math.random() * creeperStates.length);
    console.log("Random Creeper state:", creeperStates[randomIndex]);
  });
}
