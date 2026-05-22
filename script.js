 // IMAGE SLIDER
    let slideIndex = 0;
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slides img').length;

    function nextSlide() {
      slideIndex++;

      if(slideIndex >= totalSlides){
        slideIndex = 0;
      }

      // FIXED: Corrected string template literals using actual backticks
      slides.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    setInterval(nextSlide, 3000);
  </script>
