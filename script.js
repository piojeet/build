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
    function logopenTab(evt, tabName) {
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



    //  ~~~~~~~~~~~~~~~ Tabs contact ~~~~~~~~~~~~~~~
    function contactopenTab(evt, tabName) {
      // Declare all variables
      var i, tabcontent, tablinks;
  
      // Get all elements with class="tabcontent" and hide them
      tabcontent = document.getElementsByClassName("tabcontact");
      for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].classList.remove("show");
      }
  
      // Get all elements with class="tablinks" and remove the class "active"
      tablinks = document.getElementsByClassName("conlinks");
      for (i = 0; i < tablinks.length; i++) {
          tablinks[i].classList.remove("active");
      }
  
      // Show the current tab, and add an "active" class to the button that opened the tab
      document.getElementById(tabName).classList.add("show");
      evt.currentTarget.classList.add("active");
  }





//  ~~~~~~~~~~~~~~~ MOBILE NAV ~~~~~~~~~~~~~~~

  const mobNavBar = document.querySelector(".mobNavBar");
  const navMenuBtn = document.querySelector(".navMenuBtn");
  const mobNavLinks = document.querySelector(".mobNavLinks");
  const navMenu = document.getElementById("navMenu");

  let menuOpen = false;
  let linksVisible = false;

  navMenu.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent the click event from bubbling up to the document
      if (!menuOpen) {
          mobNavBar.classList.add("mobNavBarOpen");
          mobNavBar.classList.remove("mobNavBarClose");
          menuOpen = true;
      } else if (!linksVisible) {
          mobNavLinks.classList.remove("navLinksHidden");
          mobNavLinks.classList.add("navLinksVisible");
          linksVisible = true;
      } else {
          mobNavLinks.classList.add("navLinksHidden");
          mobNavLinks.classList.remove("navLinksVisible");
          linksVisible = false;
      }
  });

  document.addEventListener("click", function (event) {
      if (!event.target.closest(".mobNavBar")) {
          if (menuOpen || linksVisible) {
              mobNavBar.classList.add("mobNavBarClose");
              mobNavBar.classList.remove("mobNavBarOpen");
              mobNavLinks.classList.add("navLinksHidden");
              mobNavLinks.classList.remove("navLinksVisible");
              menuOpen = false;
              linksVisible = false;
          }
      }
  });