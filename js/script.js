//console.log("Welcome to my portfolio site!");


function menuToggle () {
  //change the class of the menu so it shows menu links on onClick

  var x = document.getElementById('myNavToggle');

  //if the classn name of x is navtoggle, add responsive to the class name, else leave it alone
  if (x.className === 'navtoggle')
    x.className += ' responsive'; //this will show the menu
  else
    x.className = 'navtoggle'; //this will hide the menu
}


$(document).ready(function(){
      $(".fade").css('display','none');
    //$(".fade").fadeIn(500);
      $(".fade").fadeTo(2000, 1);
});


//rounded box
//<script type="text/javascript"> $(document).ready(function(){ $("div.roundbox").wrap(' <div class="roundedbox">'+ ' <div class="bd">'+ ' <div class="c">'+ ' <div class="s">'+ ' </div>'+ ' </div>'+ ' </div>'+ '</div>'); }); </script>
