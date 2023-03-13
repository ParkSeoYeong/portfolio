$(function(){
    mainInit()
})

function mainInit(){
    gnb_menu();
  site();
}


//메인메뉴
function gnb_menu(){

  let $menui = $('#header .top p:nth-of-type(2)');
  let $nav = $('#header .nav');
  let $bg = $('#header .bg');
  let $close = $('#header .nav .close');
  let $menua = $('#header .nav .gnb >li>a');


  $menui.on('click', function(){
    $nav.addClass('on');
    $bg.addClass('on');
  })

    
  $close.on('click',function(){
    $nav.removeClass('on');
    $bg.removeClass('on');
    $('.nav .gnb li ul').stop().hide();
})

$menua.on('click',function(){
    $('.nav .gnb li ul').stop().slideUp();
    $(this).next().stop().slideDown();
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