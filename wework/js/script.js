$(function () {
  mainInit();


  //링크막아주기 넣기
  $(document).on('click', 'a[href="#"]', function (e) { e.preventDefault() })


})



function mainInit() {
  gnb_menu();
banner();

}





//메뉴
function gnb_menu() {
 
}


//비주얼
function banner(){
  
  
let ul = document.querySelector('#visual .banner ul');
let next = document.querySelector('#visual .btn .next');
let prev = document.querySelector('#visual .btn .prev');
let first='', last='';
let timer='', interval=4000;


timer=setInterval(make,interval);

function make(){
  last = document.querySelector('#visual .banner ul li:last-child');
  ul.prepend(last);
}

next.addEventListener('click',function(e){
 last = document.querySelector('#visual .banner ul li:last-child');
 ul.prepend(last);
 clearInterval(timer);
 timer=setInterval(make, interval);

})

prev.addEventListener('click',function(e){
 first = document.querySelector('#visual .banner ul li:first-child');
 ul.append(first);
 clearInterval(timer);
 timer=setInterval(make, interval);
})

}



