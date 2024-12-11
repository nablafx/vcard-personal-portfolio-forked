'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }
window.onresize = function(){
  var sidebar = document.querySelector("[data-sidebar]")
  sidebar.classList.remove("active");
}


// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// news variables
const newsItem = document.querySelectorAll("[data-news-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");


// modal toggle function
const newsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < newsItem.length; i++) {

  newsItem[i].addEventListener("click", function () {

    modalTitle.innerHTML = this.querySelector("[data-news-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-news-text]").innerHTML;
    const modalDate = document.querySelector("#data-modal-date");
    modalDate.setAttribute("datetime", this.querySelector("#data-news-date").getAttribute("datetime"));
    modalDate.innerHTML = this.querySelector("#data-news-date").innerHTML;

    newsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", newsModalFunc);
overlay.addEventListener("click", newsModalFunc);








// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}