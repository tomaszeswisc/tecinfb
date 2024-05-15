document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".grid img");
    const shuffledImages = Array.from(images).sort(() => Math.random() - 0.5);
    const totalImages = images.length;
    let loadedCount = 0;
  
    shuffledImages.forEach((img, index) => {
      img.onload = () => {
        img.style.animationDelay = `${index * 0.5}s`;
        loadedCount++;
        if (loadedCount === totalImages) {
          setTimeout(() => {
            showImages();
          }, 1000);
        }
      };
    });
  
    function showImages() {
      shuffledImages.forEach((img, index) => {
        img.style.opacity = 1;
        img.style.transitionDelay = `${index * 0.5}s`;
        img.style.transform = "scale(1)";
      });
    }
  });
  