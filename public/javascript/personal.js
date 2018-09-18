/* global $ */



var responsMenu=function(){
      var win = $(window); //this = window
      
      if (win.width() <= 768) { 
        $("#topAttached").attr("class","ui top attached inverted menu");
        $("#nav").attr("class","ui simple dropdown item");
        $("#menu").attr("class","menu");
        $(".header").attr("style","border:0");
        $("i").attr("style","margin-top:4px;margin-left:4px;");
        $("#mainBackground").removeClass("mainBackground");
        $("h4").attr("class","ui header");
      }
      if (win.width() > 768) { 
        $("#topAttached").attr("class","ui inverted tiny segment");
        $("#nav").attr("class","ui inverted secondary pointing  menu");
        $("#menu").attr("class","ui grid");
        $("i").attr("style","margin-top:9px;");
        $("#mainBackground").addClass("mainBackground");
        $("h4").attr("class","ui inverted header sectionTitle");
      }
};

$(window).resize(responsMenu);

$(document).ready(responsMenu);

$('.dropdown')
  .dropdown()
;

var pics=["https://images.unsplash.com/photo-1437652633673-cc02b9c67a1b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e4abadd8c16ecaac8d097b1f5a20d765&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1500885168199-dc1fde1d8177?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8d0988229cac239b3f63dd36293089c4&auto=format&fit=crop&w=766&q=80",
"https://images.unsplash.com/photo-1445462657202-a0893228a1e1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=43bea14c22b8bf4c95ddb9b1d4c27e8f&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1418225043143-90858d2301b4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4d9a782125e97098807fe4df217421ea&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1434397940728-5e4513152691?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9d7927dc659900cf3b56e37792b36b65&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1471958680802-1345a694ba6d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=141ed65bae0927538d045ef436582cb5&auto=format&fit=crop&w=500&q=60"];


//slideshow
var slideIndex=0;
carousel();

function carousel(){
  slideIndex++;
  if (slideIndex>pics.length){slideIndex=1}
   $("img").fadeOut(2000,function() {
        $(this).attr("src",pics[slideIndex-1]).fadeIn(2000).delay(1000)});
  setTimeout(carousel,4100);
}



