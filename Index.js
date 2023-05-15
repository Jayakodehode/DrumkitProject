//const drumkitContainer = document.getElementById("drumkit");
//drumkitContainer.textContent = "hei";
//console.log(drumkitContainer);
const sounds = [
  "sounds/clap.wav",
  "sounds/hihat.wav",
  "sounds/kick.wav",
  "sounds/openhat.wav",
  "sounds/ride.wav",
  "sounds/snare.wav",
  "sounds/tink.wav",
  "sounds/tom.wav",
];

/*const sounds = [
  { key: "a", filename: "sounds/clap.wav" },
  { key: "b", filename: "sounds/hihat.wav" },
  { key: "c", filename: "sounds/kick.wav" },
  { key: "d", filename: "sounds/openhat.wav" },
  { key: "e", filename: "sounds/ride.wav" },
  { key: "f", filename: "sounds/snare.wav" },
  { key: "g", filename: "sounds/tink.wav" },
  { key: "f", filename: "sounds/tom.wav" },
];*/

const drumkitContainer = document.getElementById("drumkit");

for (let i = 0; i < sounds.length; i++) {
  const button = document.createElement("button");
  button.textContent = sounds[i];
  drumkitContainer.append(button);
  const sound = new Audio(sounds[i]);
  button.addEventListener("click", () => sound.play());
}
