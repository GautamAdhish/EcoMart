document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".slider-track");
  const slider = document.querySelector(".featuredcards");

  const gap = 10;
  const intervalTime = 3000;
  let intervalId = null;

  const cardWidth = track.children[0].offsetWidth + gap;

  let isPaused = false;
  let isDragging = false;
  let startX = 0;
  let currentTranslate = 0;

  function slideNext() {
    track.style.transition = "transform 0.6s ease";
    track.style.transform = `translateX(-${cardWidth}px)`;

    setTimeout(() => {
      track.style.transition = "none";
      track.style.transform = "translateX(0)";
      track.appendChild(track.firstElementChild);
    }, 600);
  }

  function startAuto() {
    if (!intervalId) {
      intervalId = setInterval(() => {
        if (!isPaused && !isDragging) slideNext();
      }, intervalTime);
    }
  }

  function stopAuto() {
    clearInterval(intervalId);
    intervalId = null;
  }

  /* ---------- Auto pause on hover ---------- */
  slider.addEventListener("mouseenter", () => {
    isPaused = true;
  });

  slider.addEventListener("mouseleave", () => {
    isPaused = false;
  });

  /* ---------- Manual drag ---------- */
  slider.addEventListener("mousedown", (e) => {
    isDragging = true;
    stopAuto();
    startX = e.clientX;
    currentTranslate = 0;
    track.style.transition = "none";
    slider.style.cursor = "grabbing";
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    track.style.transform = `translateX(${diff}px)`;
    currentTranslate = diff;
  });

  slider.addEventListener("mouseup", () => {
    slider.style.cursor = "grab";
    isDragging = false;

    if (Math.abs(currentTranslate) > cardWidth / 3) {
      if (currentTranslate < 0) {
        slideNext();
      } else {
        track.style.transition = "transform 0.6s ease";
        track.style.transform = `translateX(${cardWidth}px)`;

        setTimeout(() => {
          track.style.transition = "none";
          track.style.transform = "translateX(0)";
          track.prepend(track.lastElementChild);
        }, 600);
      }
    } else {
      track.style.transition = "transform 0.4s ease";
      track.style.transform = "translateX(0)";
    }

    startAuto();
  });

  slider.addEventListener("mouseleave", () => {
    if (isDragging) {
      isDragging = false;
      track.style.transition = "transform 0.4s ease";
      track.style.transform = "translateX(0)";
      startAuto();
    }
  });

  slider.style.cursor = "grab";
  startAuto();
});
