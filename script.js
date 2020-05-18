var screenSize = screen.width;
var windowSize = window.innerWidth;
$(document).ready(function(){
  $(window).bind('resize', function(e){
    if (window.RT) clearTimeout(window.RT);
    window.RT = setTimeout(function(){
      this.location.reload(false); /* false to get page from cache */
    }, 100);
  });
});
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
