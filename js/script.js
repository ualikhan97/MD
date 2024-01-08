let burgerElement = document.querySelector(".burger");

burgerElement.addEventListener("click", function () {
   this.classList.toggle("active");
   document.querySelector(".header__shell").classList.toggle("active");

   document.body.classList.toggle("lock");
});

// document.addEventListener("DOMContentLoaded", function () {
//    const boxes = document.querySelectorAll(".services__box");

//    boxes.forEach((box) => {
//       box.addEventListener("click", function () {
//          boxes.forEach((otherBox) => {
//             if (otherBox !== box) {
//                otherBox.classList.remove("active-box");
//             }
//          });
//          this.after(document.querySelector(".servicess__shell"));

//          document.querySelector(".servicess__shell").classList.toggle("show");
//          box.classList.toggle("active-box");
//       });
//    });
// });

// document.addEventListener("DOMContentLoaded", function () {
//    const boxes = document.querySelectorAll(".services__box");

//    boxes.forEach((box, index) => {
//       box.addEventListener("click", function () {
//          boxes.forEach((otherBox) => {
//             if (otherBox !== box) {
//                otherBox.classList.remove("active-box");
//             }
//          });

//          const shell = document.querySelector(".servicess__shell");

//          // Проверяем, находится ли текущий индекс в диапазоне от 4 до 8
//          if (index >= 3 && index <= 7) {
//             // Вставляем shell после 3-го бокса (его индекс 2)
//             shell.parentNode.insertBefore(shell, boxes[2].nextSibling);
//          }

//          shell.classList.toggle("show");
//          box.classList.toggle("active-box");
//       });
//    });
// });

document.addEventListener("DOMContentLoaded", function () {
   const boxes = document.querySelectorAll(".services__box");

   boxes.forEach((box, index) => {
      box.addEventListener("click", function () {
         boxes.forEach((otherBox) => {
            if (otherBox !== box) {
               otherBox.classList.remove("active-box");
            }
         });

         const shell = document.querySelector(".servicess__shell");
         const screenWidth = window.innerWidth;

         if (screenWidth < 653) {
            this.after(document.querySelector(".servicess__shell"));
         } else if (screenWidth > 1451 && index >= 0 && index <= 4) {
            // Вставляем shell после 3-го бокса (его индекс 2)
            this.after(document.querySelector(".servicess__shell"));
         } else {
            shell.parentNode.insertBefore(shell, boxes[2].nextSibling);
         }

         if (screenWidth < 1451 && index >= 0 && index <= 5) {
            this.after(document.querySelector(".servicess__shell"));
         } else {
            shell.parentNode.insertBefore(shell, boxes[4].nextSibling);
         }

         if (screenWidth < 891) {
            this.after(document.querySelector(".servicess__shell"));
         }

         shell.classList.toggle("show");
         box.classList.toggle("active-box");
      });
   });
});

document.addEventListener("DOMContentLoaded", function () {
   const menuItems = document.querySelectorAll(".header__menu ul li a");

   menuItems.forEach(function (item) {
      item.addEventListener("mouseover", function () {
         menuItems.forEach(function (innerItem) {
            innerItem.classList.remove("active");
         });

         this.classList.add("active");
      });

      item.addEventListener("mouseout", function () {
         this.classList.remove("active");
      });
   });
});
