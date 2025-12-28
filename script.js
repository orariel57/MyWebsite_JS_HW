//חיבור שם חיה לסאונד
const sounds = {
  bear: "sounds/bear.mp3",
  bird: "sounds/bird.mp3",
  cat: "sounds/cat.mp3",
  elephant: "sounds/elephant.mp3",
  gorilla: "sounds/gorilla.mp3",
  lion: "sounds/lion.mp3",
  wolf: "sounds/wolf.mp3",
};

let currentAnimalAudio = null; // ישמור את הסאונד האחרון שהתנגן

function playAnimal(animalName) {
  const src = sounds[animalName];
  if (!src) return;

  // אם יש סאונד קודם שמתנגן - נעצור אותו
  if (currentAnimalAudio) {
    currentAnimalAudio.pause();
    currentAnimalAudio.currentTime = 0;
  }

  // נפעיל את החדש
  currentAnimalAudio = new Audio(src);
  currentAnimalAudio.play();
}


// קליקים על חיות
document.querySelectorAll(".animal").forEach((btn) => {
  btn.addEventListener("click", () => {
    playAnimal(btn.dataset.animal);
  });
});

// מקלדת
document.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();

  if (key.length !== 1) return;

  const btn = document.querySelector(`.animal[data-key="${key}"]`);

  if (btn) {
    playAnimal(btn.dataset.animal);
  } else {
    alert("No such animal key!");
  }
});

// מוזיקת רקע
const bgMusic = new Audio("sounds/forest.mp3");
bgMusic.loop = true;

bgMusic.volume = 0.25;

const musicBtn = document.getElementById("musicToggleBtn");
let isPlaying = false;

musicBtn.addEventListener("click", () => {
  if (!isPlaying) {
    bgMusic.play();
    musicBtn.textContent = "עצירת מוזיקה 🔇";
    musicBtn.classList.add("stop");
    isPlaying = true;
  } else {
    bgMusic.pause();
    bgMusic.currentTime = 0;
    musicBtn.textContent = "הפעלת מוזיקת רקע 🎵";
    musicBtn.classList.remove("stop");
    isPlaying = false;
  }
});
