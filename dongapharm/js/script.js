$(function () {
  mainInit();

  //링크막아주기 넣기
  $(document).on('click', 'a[href="#"]', function (e) { e.preventDefault() })


})



function mainInit() {
  gnb_menu();
  visual();
  product();

  site();
  top_btn();

}





//메뉴
function gnb_menu() {
  let $gnbli = $('#header .nav > .gnb > li');
  let $gnb = $('#header .nav > .gnb');
  let $nav = $('#header .nav');
  let $gnba = $('#header .nav > .gnb > li>a');
  let $subul = $('#header .nav> .gnb > li >ul');
  let $suba = $('#header .nav> .gnb > li >ul>li>a');
  let $header = $('#header');

  let cnt = 0;

  $subul.hide().css('opacity', '1');


  $gnbli.hover(function () {
    $subul.hide();
    $(this).find('ul').show().css('z-index', '100');

  })

  $header.on('mouseleave', function () {
    $subul.hide();
  })

}


//비주얼
function visual() {

  let $bannerul = $('#visual .main-banner');
  let $bannerli = $('#visual .main-banner> li');
  let $bannerimg = $('#visual .main-banner> li >img');
  let $pagingli = $('#visual .paging li');
  let current = 0, old = 0, first, last, a = 0,imgurl='';
  let size = $bannerli.length;
  let w = $bannerli.width();

  let arrA=[];
  for(let i=0;i<size;i++){
    arrA[i]=$bannerli.width();
  }


  let cnt = 0, timer = null, interval = '3000';

  timer = setInterval(make, interval);

  function make() {
    cnt++;
    if (cnt > size - 1) {
      cnt = 0;
    }

    $bannerul.stop().animate({ left:-( w * cnt)});
  
    $pagingli.removeClass('on');
    $pagingli.eq(cnt).addClass('on');

  
    
  }



  $pagingli.on('click', function () {
    cnt = $(this).index();
    $bannerul.stop().animate({ left:-( w * cnt)});
    $pagingli.removeClass('on');
    $pagingli.eq(cnt).addClass('on');

    clearInterval(timer);
    timer = setInterval(make, interval);
  })



    

}


//신제품
function product() {
  let $productul = $('#container .product ul');
  let $productli = $('#container .product ul li');
  let $productimg = $('#container .product ul li img');
  let $number = $('#container .product .number');
  let $title = $('#container .product .text-box h3');
  let $text1 = $('#container .product .text-box h4');
  let $text2 = $('#container .product .text-box p');
  let $prev = $('#container .product .prev ');
  let $next = $('#container .product .next ');

  let arrNum = ['01', '02', '03', '04', '05'];
  let arrTitle = ['멜라토닝 크림', '노스카나인 트러블세럼', '비타그란', '노즈원큐 / 나잘원큐', '써큐란'];
  let arrText1 = ["‘색소침착 치료제’", "‘10배속 급속 진정 세럼'", "‘내 몸이 좋아하는 비타민C’", "‘비강 / 구강 스프레이’", "'혈행 개선 케어'"];
  let arrText2 = ['더 늦기전에 간편하게 치료하세요!', '확실한 피부 변화를 느껴보세요!', '분말/정제/츄어블 다양한 타입!', '콧물, 코막힘 / 붓고 아픈목에 한번에!', '써큐란 알파/오메가3/코큐텐 출시!'];


  let cnt = 0, imgurl = '', first = '', last = '';
  let current = 0, old = 0;
  let size = $productli.width();


  $number.html(arrNum[cnt]);
  $title.html(arrTitle[cnt]);
  $text1.html(arrText1[cnt]);
  $text2.html(arrText2[cnt]);


  $next.on('click', function () {

    cnt++;
    if (cnt > $productli.length - 1) {
      cnt = 0;
    }
    $number.text(arrNum[cnt]);
    $title.text(arrTitle[cnt]);
    $text1.text(arrText1[cnt]);
    $text2.text(arrText2[cnt]);
    

    $productul.stop().animate({ left: '-=' + size }, function () {
      first = $('#container .product ul li:first');
      $productul.append(first);
      $productul.css({ left: '+=' + size });
    })
   


  })//


  $prev.on('click', function () {
    cnt--;
    if (cnt < 0) {
      cnt = $productli.length - 1;
    }
    $number.text(arrNum[cnt]);
    $title.text(arrTitle[cnt]);
    $text1.text(arrText1[cnt]);
    $text2.text(arrText2[cnt]);

    $productul.animate({ left: '+=' + size }, function () {
      last = $('#container .product ul li:last');
      $productul.prepend(last);
      $productul.css({ left: '-=' + size });

    })
  })



}





//푸터 사이트
function site(){


  $('#footer .site .family ul').hide();
  $('#footer .site .family .title').on('click',function(){
    $('#footer .site .family ul').toggle();
  })
  
  $('#footer .site .brand ul ').hide();
  $('#footer .site .brand .title ').on('click',function(){
    $('#footer .site .brand ul ').toggle();
  })
}



//탑버튼 
function top_btn(){
  let $top=$('#footer .top');
  let ty=0;
  let h = $('#header').height();
  
  
  $(window).on('scroll',function(){
    ty = $(window).scrollTop();
    if(ty>h){
      $top.show();
    }else{
      $top.hide();
    }
  })
  $top.click(function(){
    $('html, body').animate({scrollTop:0},400);
    return false;
  });
}