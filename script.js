// модальное окно
window.onload = () => {
  document.getElementById('modal').style.display = 'block';
};

document.getElementById('closeModal').onclick = () => {
  document.getElementById('modal').style.display = 'none';
};

// слайдер
const images = [
  "1.jpg",
  "2.jpeg",
  "3.jpg"
];

let i = 0;
const img = document.getElementById('slide');

document.getElementById('next').onclick = () => {
  i = (i + 1) % images.length;
  img.src = images[i];
};

document.getElementById('prev').onclick = () => {
  i = (i - 1 + images.length) % images.length;
  img.src = images[i];
};

// видео
document.addEventListener("DOMContentLoaded", () => {

  const video = document.getElementById('video');
  const btn = document.getElementById('playBtn');

  btn.onclick = () => {
    if (video.paused) {
      video.play();
      btn.textContent = "⏸ Пауза";
    } else {
      video.pause();
      btn.textContent = "▶ Пуск";
    }
  };

});

// форма
document.getElementById('form').onsubmit = function(e) {
  e.preventDefault();
  document.getElementById('msg').textContent = "Форма отправлена!";
};

let count = 0;
document.getElementById('addField').onclick = () => {
  count++;
  const input = document.createElement('input');
  input.placeholder = "Поле " + count;
  input.style.display = "block";
  document.getElementById('fields').appendChild(input);
};