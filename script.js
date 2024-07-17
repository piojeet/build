let currentSlideIndex = 0;
      const slides = document.querySelectorAll(".slide");
      const dots = document.querySelectorAll(".dot");

      function showSlide(index) {
        slides.forEach((slide, i) => {
          if (i === index) {
            slide.classList.add("active");
          } else {
            slide.classList.remove("active");
          }
        });
        dots.forEach((dot, i) => {
          if (i === index) {
            dot.classList.add("active");
          } else {
            dot.classList.remove("active");
          }
        });
      }

      function nextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(currentSlideIndex);
      }

      function prevSlide() {
        currentSlideIndex =
          (currentSlideIndex - 1 + slides.length) % slides.length;
        showSlide(currentSlideIndex);
      }

      function currentSlide(index) {
        currentSlideIndex = index;
        showSlide(index);
      }

      // Auto slide every 5 seconds

      // Show the initial slide
      showSlide(currentSlideIndex);