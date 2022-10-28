$(document).ready(function () {
   $(".accordion-list > li > .answer").hide();

   $(".accordion-list > li").click(function () {
      if ($(this).hasClass("active")) {
         $(this).removeClass("active").find(".answer").slideUp();
      } else {
         $(".accordion-list > li.active .answer").slideUp();
         $(".accordion-list > li.active").removeClass("active");
         $(this).addClass("active").find(".answer").slideDown();
      }
      return false;
   });
});




let cards = document.querySelectorAll('.audio_cont')
    
function liveSearch() {
    let search_query = document.getElementById("searchbox").value;
    
    //Use innerText if all contents are visible
    //Use textContent for including hidden elements
    for (var i = 0; i < cards.length; i++) {
        if(cards[i].textContent.toLowerCase()
                .includes(search_query.toLowerCase())) {
            cards[i].classList.remove("is-hidden");
        } else {
            cards[i].classList.add("is-hidden");
        }
    }
}

//A little delay
let typingTimer;               
let typeInterval = 0;  
let searchInput = document.getElementById('searchbox');

searchInput.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(liveSearch, typeInterval);
});

