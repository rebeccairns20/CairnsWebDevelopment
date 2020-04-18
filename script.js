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
function afterContactUs(){
  //alert(windowSize);

  document.getElementById("rightPanel").style.marginRight = windowSize / 11 + "px"
  if (windowSize < 956){
     //alert(windowSize);
     document.getElementById("leftPanel").style.border = "white";
     if (windowSize < 771){
       //leftSide
       document.getElementById("leftPanel").style.width = "100%";
       document.getElementById("leftPanel").style.paddingBottom = "10px";
       document.getElementById("leftPanel").style.borderBottom = "1px solid black";
       document.getElementById("leftPanel").style.paddingLeft = windowSize / 5 + "px";



       //rightSide
       document.getElementById("rightPanel").style.float = "clear";
       document.getElementById("rightPanel").style.marginRight = "0px";
       document.getElementById("rightPanel").style.width = "100%";
       document.getElementById("rightPanel").style.paddingLeft = windowSize / 5 + "px";
       document.getElementById("rightPanel").style.paddingBottom = windowSize / 7 + "px";
    }
  }

};

function afterArticles(){
  if (windowSize < 786){
    //alert(screenSize);
    document.getElementById("rightMainContent").style.paddingLeft =  windowSize / 7 + "px";
    document.getElementById("leftMainContent").style.paddingLeft =  windowSize / 12 + "px";
    document.getElementById("leftMainContent").style.width = "100%";
    document.getElementById("rightMainContent").style.width = "100%";
    document.getElementById("rightMainContent").style.float = "clear";
  }
};
function afterHome(){
    document.getElementById("signature").style.paddingLeft =  windowSize / 3 + "px";
    document.getElementById("ThirdComentBlock").style.paddingTop = "24px";
};

function afterServices(){
    //document.getElementById("servicesList").style.paddingTop =  "24px";
    //document.getElementById("servicesList").style.paddingLeft =  windowSize / 4 + "px";
    if(windowSize < 687){
      document.getElementById("servicesbgImg").style.marginRight = "0px";
      document.getElementById("servicesbgImg").style.width = "100%";
      document.getElementById("servicesbgImg").style.height = "300px";

      //document.getElementById("servicesList").style.marginLeft = windowSize / 5 + "px";
      document.getElementById("servicesList").style.float = "clear";
      document.getElementById("servicesList").style.marginRight = "0px";
      document.getElementById("servicesList").style.width = "100%";
    }
};
function afterfeatures(){
   //alert(windowSize); printScreensize
   document.getElementById("printScreensize").innerHTML = windowSize;
   document.getElementById("featureBody").style.marginLeft = windowSize / 9 + "px";
   document.getElementById("featureBody").style.marginRight = windowSize / 9 + "px";
   if(windowSize < 833){
     document.getElementById("featureBody").style.marginLeft = windowSize / 12 + "px";
     document.getElementById("featureBody").style.marginRight = windowSize / 12 + "px";
   }
   if(windowSize > 1020){
     document.getElementById("featureBody").style.marginLeft = windowSize / 6 + "px";
     document.getElementById("featureBody").style.marginRight = windowSize / 6 + "px";
   }
   if(windowSize < 720){
     document.getElementById("featureBody").style.marginLeft = "0px";
     document.getElementById("featureBody").style.marginRight = "0px";
     document.getElementById("col2").style.clear = "both";
   }
   if(windowSize <  415){

   }
   //document.getElementsByTagName("H1")[0].removeAttribute("class");
};
function afterAboutUs(){
  var people = ["scottPicture", "rebeccaPicture", "sarahPicture", "lisaPicture"] ;
  var a3rd = windowSize / 3 + "px";
  function changeWidth(){
    for(var i = 0; i < 4; i++){
      document.getElementById(people[i]).style.width = a3rd;
    }
  };
  function changeHeight(){
    for(var i = 0; i < 4; i++){
      document.getElementById(people[i]).style.height = a3rd;
    }
  };
  if(windowSize < 481){
    changeWidth();
    changeHeight();
  }

  if(windowSize < 440){
    document.getElementById("bioLeftSide").style.marginLeft = "0px";
  }

  /**** to make about us more responsive
  document.getElementById("bioRightSide").style.marginTop = "0px";
  #scottPicture height: 180px;
  width: 180px;
  #rebeccaPicture height: 180px;
  #sarahPicture height: 180px;
  width: 180px;
  #lisaPicture height: 180px;
  width: 180px;
  */
};
function allSites(){
  if(windowSize < 440){
    document.getElementById("banner").style.borderBottom = "white";
  }
};
