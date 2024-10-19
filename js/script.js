let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
   loop:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".reviews-slider", {
   grabCursor:true,
   loop:true,
   autoHeight:true,
   spaceBetween: 20,
   breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
   },
});

let loadMoreBtn = document.querySelector('.packages .load-more .btn');
let currentItem = 3;

loadMoreBtn.onclick = () =>{
   let boxes = [...document.querySelectorAll('.packages .box-container .box')];
   for (var i = currentItem; i < currentItem + 3; i++){
      boxes[i].style.display = 'inline-block';
   };
   currentItem += 3;
   if(currentItem >= boxes.length){
      loadMoreBtn.style.display = 'none';
   }
}

///-----------------------Callender--------------------
let bookedDates = [new Date("2022-12-25"), new Date("2022-12-26")];

let calendar = document.getElementById("calendar");
let checkAvailabilityButton = document.getElementById("check-availability");

checkAvailabilityButton.addEventListener("click", function() {
  let selectedDates = getSelectedDatesFromCalendar(calendar);
  let available = checkAvailability(selectedDates, bookedDates);
  
  if (available) {
    alert("Available");
  } else {
    alert("Not available");
  }
});

function getSelectedDatesFromCalendar(calendar) {
  // code to get selected dates from calendar
}

function checkAvailability(selectedDates, bookedDates) {
  // code to check if all selected dates are not in bookedDates
  return true;
}
///-----------reservations--------
let reservations = [
   { bookingNumber: 1, schedule: "2023-02-01 10:00" },
   { bookingNumber: 2, schedule: "2023-02-02 11:00" },
   { bookingNumber: 3, schedule: "2023-02-03 12:00" },
   { bookingNumber: 4, schedule: "2023-02-04 13:00" }
 ];
 
 let reservationList = "";
 reservationList += "<ul>";
 
 for (let i = 0; i < reservations.length; i++) {
   reservationList += "<li>Booking number: " + reservations[i].bookingNumber + ", Schedule: " + reservations[i].schedule + "</li>";
 }
 
 reservationList += "</ul>";
 
 // Display the reservation list
 document.getElementById("reservations").innerHTML = reservationList;
 