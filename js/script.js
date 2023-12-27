let burgerElement = document.querySelector(".burger");

burgerElement.addEventListener("click", function () {
   this.classList.toggle("active");
   document.querySelector(".header__shell").classList.toggle("active");
   document.body.classList.toggle("lock");
});

document.addEventListener("DOMContentLoaded", function () {
   const boxes = document.querySelector(".services__box");

   boxes.addEventListener("click", function () {
      this.after(document.querySelector(".servicess__shell"));

      document.querySelector(".servicess__shell").classList.toggle("show");
   });
});
