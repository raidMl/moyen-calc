$(document).ready(function(){

	// // Page loading animation
    // $(window).on('load', function() {

    //     $('#js-preloader').addClass('loaded');

    // });









// for ( var i=1;i<=3;i++)
function myfunction(add,rem1,rem2){
$(".click"+add).on("click",function(){   
// a=document.getElementsByClassName("first-service");
//  a[0].style.BackgroundImage= url(img/service-bg.jpg);
// console.log(a);
// console.log(a[0]);


var myElement = $(this);
//   myElement.css({"background-image":"url(img/service-bg.jpg)",  "background-position": "right top",
//  "background-repeat": "no-repeat", "background-size": "cover"});
myElement.addClass("chooseLevel");
$(".click"+rem1).removeClass("chooseLevel");
$(".click"+rem2).removeClass("chooseLevel");



})
}

myfunction(1,2,3);
myfunction(2,1,3);
myfunction(3,1,2);


/// showed table  choose level

function showedTable(add,rem1,rem2,disp){
$(".click"+add).on("click",function(){   
    document.getElementById("table"+add).style.display="block";  
    document.getElementById("alert"+add).style.display="block"; 
    document.getElementById("divbuttons"+add).style.display="block";
    document.getElementById("bd").style.direction=disp;

    document.getElementById("table"+rem1).style.display="none";  
    document.getElementById("alert"+rem1).style.display="none"; 
    document.getElementById("divbuttons"+rem1).style.display="none";

    document.getElementById("table"+rem2).style.display="none";  
    document.getElementById("alert"+rem2).style.display="none"; 
    document.getElementById("divbuttons"+rem2).style.display="none";


    document.getElementById("niveau").style.display="none";
    document.getElementById("tap").style.display="block";

 
    })

}

showedTable(1,2,3,"auto");
showedTable(2,1,3,"auto");
showedTable(3,1,2,"auto");







function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
  
}
)
  