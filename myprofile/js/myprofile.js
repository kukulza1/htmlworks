window.onload=function(){
  let picture = ["img/bgb.jpg","img/bg.jpg"
                  ,"img/bg2.jpg","img/bg33.jpg"];

  let i= 0;
 showSlide();

  function showSlide(){
    document.getElementById("pic").src=picture[i];    
    i++
    if(i == picture.length){ i=0;}
  
    setTimeout(showSlide,2000);
  }
setInterval(myWatch,1000);

function myWatch(){
  const now = new Date();//날짜와 시간이 함께생성
  let time = now.toLocaleTimeString(); //시간만 출력
  console.log(time);

  let watch = document.getElementById("show")
  //watch.innerHTML = time;
  if(time>12){
        watch.innerHTML = time.replace("오전","am")
  }else{
    watch.innerHTML = time.replace("오후","pm")
  }
  watch.style.color="orangered";
}
}