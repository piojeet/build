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

      

    //  ~~~~~~~~~~~~~~~ Tabs ~~~~~~~~~~~~~~~
    function openTab(evt, tabName) {
      // Declare all variables
      var i, tabcontent, tablinks;
  
      // Get all elements with class="tabcontent" and hide them
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].classList.remove("show");
      }
  
      // Get all elements with class="tablinks" and remove the class "active"
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
          tablinks[i].classList.remove("active");
      }
  
      // Show the current tab, and add an "active" class to the button that opened the tab
      document.getElementById(tabName).classList.add("show");
      evt.currentTarget.classList.add("active");
  }



    //  ~~~~~~~~~~~~~~~ Login page Tabs ~~~~~~~~~~~~~~~
    function openTab(evt, tabName) {
      // Declare all variables
      var i, tabcontent, tablinks;
  
      // Get all elements with class="tabcontent" and hide them
      tabcontent = document.getElementsByClassName("logcontent");
      for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].classList.remove("show");
      }
  
      // Get all elements with class="tablinks" and remove the class "active"
      tablinks = document.getElementsByClassName("loglinks");
      for (i = 0; i < tablinks.length; i++) {
          tablinks[i].classList.remove("active");
      }
  
      // Show the current tab, and add an "active" class to the button that opened the tab
      document.getElementById(tabName).classList.add("show");
      evt.currentTarget.classList.add("active");
  }
  

  document.addEventListener('DOMContentLoaded', function() {
    const usersign = document.querySelector('.usersign');
    const passsign = document.querySelector('.passsign');
    const nextbtn = document.getElementById('nextbtn');
    const backbtn = document.getElementById('backbtn');

    usersign.style.display = 'block'; // Initial state

    nextbtn.addEventListener('click', function() {
        usersign.style.display = 'none';
        passsign.style.display = 'block';
    });

    backbtn.addEventListener('click', function() {
        passsign.style.display = 'none';
        usersign.style.display = 'block';
    });
});