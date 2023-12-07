/*let tb= document.querySelector(".navbartb");
let menu = document.querySelector(".navbar_menu");

//버튼눌렀을때 클릭 이벤트 발생
tb.addEventListener('click',function(){
  menu.classList.toggle('active');
});*/
$(document).ready(function(){
  //alert("test");
  //toggle(),show(),hide(), toggleclass()도있음
  $(".navbartb").click(function(){
    $(".navbar_menu").toggle("active");
  });
  //pc해상도에서 상단메뉴 보이지않을때 처리
  $(window).resize(function(){
    if(parseInt($("nav").css("width")>768)){
      $(".navbar_menu").css("display","flex");
    }else{
      $(".navbar_menu").css("display","none");
    }
  })
});
